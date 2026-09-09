import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { schedule } from './data/schedule';
import { validate, toSubEvents } from './lib/schedule';

// index.html の JSON-LD に置いた目印。ここに開催日程を差し込む。
const SUBEVENT_MARKER = '"subEvent": []';

/**
 * data/schedule.ts の開催日程を検証し、index.html の JSON-LD に差し込む。
 *
 * 本LPは React SPA のため、サーバーが返すHTMLの本文は空。
 * DXO公式HPの取得プログラムは <head> しか読めないので、
 * 開催日程を <head> の JSON-LD に静的に埋め込む必要がある。
 */
function scheduleJsonLd() {
  return {
    name: 'dxo-schedule-jsonld',
    transformIndexHtml(html: string) {
      // 日程が正しく書けているか確認する。問題があればここでビルドが止まる。
      const entries = validate(schedule);

      if (!html.includes(SUBEVENT_MARKER)) {
        throw new Error(
          `index.html の JSON-LD に目印 ${SUBEVENT_MARKER} が見つかりません。\n` +
          'このままだと DXO公式HP のイベントカードに開催日程を渡せなくなります。\n' +
          `index.html を編集した場合は、JSON-LD 内の subEvent を ${SUBEVENT_MARKER} に戻してください。`
        );
      }

      return html.replace(SUBEVENT_MARKER, `"subEvent": ${JSON.stringify(toSubEvents(entries))}`);
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), scheduleJsonLd()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
