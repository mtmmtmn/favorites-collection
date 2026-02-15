# My Favorites Collection

お気に入りの漫画・本・アニメをPinterest風のレイアウトで管理するNext.jsアプリケーション。

## 特徴

- 📚 漫画・本・アニメのコレクション管理
- 🎨 Pinterest風のマソンリーレイアウト
- 🔍 カテゴリフィルター＆検索機能
- 🌙 モダンなダークモードデザイン
- 🖼️ OGP画像の自動取得
- 📱 完全レスポンシブ対応

## ローカル開発

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## データの追加

`data/favorites.json` ファイルを編集して、新しいアイテムを追加できます：

```json
{
  "id": "unique-id",
  "url": "https://example.com",
  "title": "タイトル",
  "description": "説明文",
  "image": "画像URL（OGP画像など）",
  "category": "manga | book | anime",
  "addedAt": "2026-02-15"
}
```

## Vercelへのデプロイ

1. GitHubにリポジトリをプッシュ
2. [Vercel](https://vercel.com)にログイン
3. 「New Project」からリポジトリをインポート
4. デプロイ設定はデフォルトのままでOK
5. 「Deploy」をクリック

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: CSS Modules
- **OGP取得**: Cheerio
- **デプロイ**: Vercel

## ライセンス

MIT
