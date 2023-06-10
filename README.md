# microcms-markdown-editor

microCMSの拡張フィールドとして、Markdown入力フォームを提供するアプリケーション.

[md-editor-rt](https://github.com/imzbf/md-editor-rt)をエディタとして利用することで、mermaid記法によるプレビューを表示できる.

## Install

### 1. .envを作成

`.env.example`を参考に`.env`を作成.

```
# .env
NEXT_PUBLIC_MICROCMS_ORIGIN="https://hogehoge.microcms.io"
```

### 2. node_modulesフォルダを作成

Docker Componse で node_modules ボリュームをバインドするために必要.

```
./
  ├─ pages
  ├─ node_modules // このフォルダを作成
  └─ ...
```

### 3. Dockerイメージをビルド

```
docker compose build
```

### 4. アプリケーションを起動

```
docker compose up -d
docker attach $(docker compose ps -q web)
```

### 5. エディタを表示

http://localhost:3000

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
