# 不動産オークション

Next.js App Router で構築した **SSG（静的サイト生成）** の不動産オークションサイトです。お得な物件情報の掲載・検索を想定したプロジェクトです。

## 技術スタック

- **Next.js**（App Router）
- **TypeScript**
- **Tailwind CSS**
- **ESLint**
- ビルド方式: **Static Export**（`output: 'export'`）

## 開発

開発サーバーを起動するには:

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド（静的エクスポート）

静的サイトとしてビルドするには:

```bash
npm run build
```

ビルド完了後、`out/` フォルダに HTML/CSS/JS が出力されます。任意の静的ホスティング（Vercel、Netlify、GitHub Pages、Nginx など）にデプロイできます。

### 静的プレビュー

`out/` の内容をローカルで確認する例:

```bash
npx serve out
```

## プロジェクト構成

```
fudosan-auction/
├── app/
│   ├── layout.tsx    # ルートレイアウト・メタデータ
│   ├── page.tsx      # トップページ
│   └── globals.css   # グローバルスタイル
├── public/           # 静的アセット
├── next.config.ts    # output: 'export' で SSG
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 参考

- [Next.js Documentation](https://nextjs.org/docs)
- [Static Exports（Next.js）](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
