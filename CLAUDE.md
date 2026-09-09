# DXO セミナー LP - プロジェクトガイド

## プロジェクト概要
手放す経営ラボラトリーが主催する「DXO（自律分散型組織）体験ワークショップ」のランディングページ。

- **GitHub リポジトリ**: `ke007007/dxo_seminar`（ブランチ: `main`）
- **技術スタック**: React + TypeScript + Vite
- **開発サーバー**: `http://localhost:3000`（ポートが使用中の場合は 3001 になることがある）

---

## よく行う作業

### 開発サーバーの起動
```bash
npm run dev
```

### GitHub への反映（commit → push）
```bash
git add <変更したファイル>
git commit -m "fix: 変更内容の説明"
git push origin main
```

---

## ファイル構成

```
App.tsx                  # ページ全体の構成（セクション順）
data/
  schedule.ts            # 開催日程 ★日程の変更はここだけ（非エンジニアの編集対象）
lib/
  schedule.ts            # 日程の検証・変換ロジック（触らない）
日程の変更方法.md          # 非エンジニア向けの編集手順書
components/
  Hero.tsx               # ファーストビュー（キャッチコピー）
  PainPoints.tsx         # 課題提示セクション
  Solution.tsx           # DXOが解決する内容
  ProgramDetails.tsx     # プログラム詳細
  Instructor.tsx         # 講師紹介
  Overview.tsx           # 開催概要（価格・定員など）※日程は data/schedule.ts から読む
  NextSteps.tsx          # 申込ステップ
  Closing.tsx            # クロージング
  Section.tsx            # 共通レイアウトラッパー
  Button.tsx             # 共通ボタン
```

---

## 開催日程の変更方法（data/schedule.ts のみ）

**日程は `data/schedule.ts` の1ファイルで管理している。他のファイルに日付を書かないこと。**

```ts
export const schedule = [
  { date: "2026-09-18", start: "13:00", end: "18:00" },
  { date: "2026-09-27", start: "10:00", end: "16:00" },
];
```

ここを直すと、次の2つが自動で更新される（手動同期は不要）。

- LPの「開催概要」表示（曜日は日付から自動計算）
- `index.html` の JSON-LD `subEvent`（DXO公式HP連携用）

### 仕組み
```
data/schedule.ts      編集する唯一のファイル（データ＋日本語コメントのみ）
      ↓
lib/schedule.ts       検証・変換（validate / formatJa / toSubEvents）
      ↓
  ┌───┴───┐
Overview.tsx    vite.config.ts の scheduleJsonLd プラグイン
（画面表示）     （ビルド時に index.html の "subEvent": [] へ差し込む）
```

### 覚えておくこと
- **日程が未定のとき**は配列を空 `[]` にする。自動で「開催日程 調整中」表示に切り替わる（コメントアウト運用は廃止）
- **満員御礼**は `full: true`、**残席表示**は `note: "残り1枠"` を行に追記する
- `index.html` の `"subEvent": []` は**差し込み用の目印**。この文字列を変えるとビルドが停止する
- 日付・時刻の書式が不正だと日本語エラーでビルドが停止し、Vercelが公開を中止する（誤った日程は公開されない）

### オーナー以外が編集する場合
リポジトリ直下の `日程の変更方法.md` が非エンジニア向けの手順書。
編集用の直リンクは https://github.com/ke007007/dxo_seminar/edit/main/data/schedule.ts

---

## 申込フォームURL
```
https://share-na2.hsforms.com/1UjhNY43cTzuJ0VCfFJN2sg3d3k5
```
ヘッダーの「ENTRY」ボタンと各CTAボタンに使用。変更する場合は `App.tsx` と各コンポーネント内のリンクを検索して置き換える。

---

## 注意事項
- オーナーはエンジニアではないため、技術的な説明は**平易な日本語**で行う
- 既存ファイルを編集する前に必ず確認をとる
- 変更後は必ず開発サーバーで表示を確認してからpushする
- コミットメッセージは `fix:` や `feat:` などのプレフィックスをつける

---

## DXO公式HP（https://dxo-official.vercel.app）連携メタタグ

このプロジェクトの `index.html` の `<head>` には、DXO公式HPの「現在募集中のイベント・セミナー」
セクションで本LPを自動取得・カード表示するためのメタタグ（OGP / JSON-LD）が含まれています。

### 仕組み
DXO公式HP → Apps Script → Vercel proxy → 本LPのHTML取得 → OGP/JSON-LD抽出 → カード描画

本LPは React SPA のため、サーバーが返すHTMLには `<head>` の情報しか含まれません。
そのため OGP / JSON-LD を `<head>` に明示的に書いておく必要があります。

### 連携先
- DXO公式HP リポジトリ: https://github.com/ke007007/dxo-official
- Apps Script プロジェクト: https://script.google.com/d/1Sqmt-KVYgTKhPrkQQEDHnfqM4qh2XdqDYCHYdfTc7IqORVhkqqBPaOSr/edit

### 編集ルール
- `<head>` 内の OGP / JSON-LD タグを **削除しないこと**（DXO公式HPでのカード表示が壊れます）
- `subEvent` は `data/schedule.ts` からビルド時に自動生成される。`index.html` に日付を直接書かないこと
  （書いても上書きされる）。目印の `"subEvent": []` を変更・削除するとビルドが停止する
- `og:image` / `og:title` / `og:description` を変更する場合は、実際のLPの内容と整合させる
- 構造（property 名、@type、@context など）は変更しない

### 姉妹LP
DXO公式HPに掲載される姉妹LP:
- https://dxo-organization-design.tebanasu-lab.com/ （自律分散組織デザイン講座）

LP の方針変更時は両方の同期を確認してください。
