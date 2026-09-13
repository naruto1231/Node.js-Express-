# api

Node.js(Express)で作った、シンプルなAPIサーバーです。

## 概要

CORSに対応した最小構成のAPIサーバーです。`/api/hello`にアクセスすると、固定メッセージをJSONで返します。

## 技術スタック

- Node.js
- Express
- cors

## エンドポイント

| メソッド | パス | 内容 |
|---|---|---|
| GET | `/api/hello` | `{ "message": "Hello from Node" }` を返す |

## 動作環境

```bash
npm install
node server.js
```

起動後、`http://localhost:3001/api/hello` にアクセスすると動作確認できます。

## ライセンス

ISC
