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
components/
  Hero.tsx               # ファーストビュー（キャッチコピー）
  PainPoints.tsx         # 課題提示セクション
  Solution.tsx           # DXOが解決する内容
  ProgramDetails.tsx     # プログラム詳細
  Instructor.tsx         # 講師紹介
  Overview.tsx           # 開催概要（日程・価格など）★よく編集する
  NextSteps.tsx          # 申込ステップ
  Closing.tsx            # クロージング
  Section.tsx            # 共通レイアウトラッパー
  Button.tsx             # 共通ボタン
```

---

## 開催日程の変更方法（Overview.tsx）

`components/Overview.tsx` の **27〜31行目** あたりに日程表示のコードがある。

### 日程が決まっているとき
```tsx
<span>4月26日（日）13:00-18:00</span>
{/* 日程調整中に戻す場合は上の行をコメントアウトし、下の2行のコメントを外す
<span>開催日程 調整中</span>
<span className="text-xs font-normal text-brand-gray">※参加希望の方は申込formより登録下さい。<br />　次回日程が決定次第ご連絡させていただきます。</span>
*/}
```

### 日程が未定のとき（調整中）
上記を逆にする。具体的な日程行をコメントアウトし、「調整中」と注釈の2行のコメントを外す。

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
