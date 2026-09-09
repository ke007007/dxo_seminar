/**
 * 開催日程（data/schedule.ts）の検証と変換。
 *
 * 日程を変更したいだけの人は、このファイルを触る必要はありません。
 * → 編集するのは data/schedule.ts です（手順は「日程の変更方法.md」）。
 *
 * ここで検証に失敗すると、ビルドが停止します。
 * 停止すると Vercel は公開を中止するので、誤った日程が公開されることはありません。
 */

export type ScheduleEntry = {
  /** 開催日 "YYYY-MM-DD" 形式 */
  date: string;
  /** 開始時刻 "HH:MM" 形式（24時間表記） */
  start: string;
  /** 終了時刻 "HH:MM" 形式（24時間表記） */
  end: string;
  /** 日付の右に赤字で表示する補足（例: "残り1枠"） */
  note?: string;
  /** true にすると取り消し線＋「満員御礼」を表示 */
  full?: boolean;
};

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];

const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

/** "2026-09-18" → [2026, 9, 18] */
function parseDate(date: string): [number, number, number] {
  const [y, m, d] = date.split('-').map(Number);
  return [y, m, d];
}

/** "13:00" → 分単位の数値（比較用） */
function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

/**
 * data/schedule.ts の内容を検証する。
 * 問題があれば、編集する人が読んで直せる日本語のエラーで停止する。
 */
export function validate(schedule: unknown): ScheduleEntry[] {
  const hint = '\n→ 書き方は data/schedule.ts の冒頭のコメント、または「日程の変更方法.md」を見てください。';

  if (!Array.isArray(schedule)) {
    throw new Error(`data/schedule.ts の schedule は [ ] で囲まれた一覧である必要があります。${hint}`);
  }

  return schedule.map((entry, i) => {
    const where = `data/schedule.ts の ${i + 1} 件目`;

    if (typeof entry !== 'object' || entry === null || Array.isArray(entry)) {
      throw new Error(`${where}が { } で囲まれていません。${hint}`);
    }

    const { date, start, end, note, full } = entry as Record<string, unknown>;

    // --- 日付 ---
    if (typeof date !== 'string' || !DATE_PATTERN.test(date)) {
      throw new Error(
        `${where}の date が正しくありません: ${JSON.stringify(date)}\n` +
        `「2026-09-18」のように、年4ケタ-月2ケタ-日2ケタで書いてください。${hint}`
      );
    }
    const [y, m, d] = parseDate(date);
    const asDate = new Date(y, m - 1, d);
    if (asDate.getFullYear() !== y || asDate.getMonth() !== m - 1 || asDate.getDate() !== d) {
      throw new Error(
        `${where}の date は実在しない日付です: ${date}\n` +
        `カレンダーにある日付か確認してください（例: 2月31日、13月 などは存在しません）。${hint}`
      );
    }

    // --- 時刻 ---
    for (const [key, value] of [['start', start], ['end', end]] as const) {
      if (typeof value !== 'string' || !TIME_PATTERN.test(value)) {
        throw new Error(
          `${where}（${date}）の ${key} が正しくありません: ${JSON.stringify(value)}\n` +
          `「13:00」のように、24時間表記の HH:MM で書いてください。${hint}`
        );
      }
    }
    if (toMinutes(end as string) <= toMinutes(start as string)) {
      throw new Error(
        `${where}（${date}）の終了時刻 ${end} が、開始時刻 ${start} より後になっていません。${hint}`
      );
    }

    // --- 任意項目 ---
    if (note !== undefined && typeof note !== 'string') {
      throw new Error(`${where}（${date}）の note は "残り1枠" のように " " で囲んだ文字で書いてください。${hint}`);
    }
    if (full !== undefined && typeof full !== 'boolean') {
      throw new Error(`${where}（${date}）の full は true か false で書いてください（" " で囲まないでください）。${hint}`);
    }

    return { date, start, end, note, full } as ScheduleEntry;
  });
}

/**
 * LPの画面に表示する文字列を作る。曜日は日付から自動計算する。
 * "2026-09-18" + "13:00" + "18:00" → "9月18日（金）13:00〜18:00"
 */
export function formatJa(entry: ScheduleEntry): string {
  const [y, m, d] = parseDate(entry.date);
  const weekday = WEEKDAYS[new Date(y, m - 1, d).getDay()];
  return `${m}月${d}日（${weekday}）${entry.start}〜${entry.end}`;
}

/**
 * DXO公式HPのイベントカード用に、JSON-LD の subEvent 配列を作る。
 * ビルド時に vite.config.ts が index.html へ差し込む。
 */
export function toSubEvents(schedule: ScheduleEntry[]) {
  return schedule.map((entry) => {
    const [, m, d] = parseDate(entry.date);
    return {
      '@type': 'Event',
      name: `1day体験会 ${m}月${d}日回`,
      startDate: `${entry.date}T${entry.start}:00+09:00`,
      endDate: `${entry.date}T${entry.end}:00+09:00`,
    };
  });
}
