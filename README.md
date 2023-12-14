# 勉強目的で開発してみた EC サイト（React + Typescript）

## アプリケーション実行方法 📄

```shell
# プロジェクトクローン
git clone git@github.com:next-shiyon/e-commerce-store.git
cd e-commerce-store

# ノードモジュールのインストール
yarn
# アプリケーション実行
yarn run dev
```

## URL 設計 🏛️

| URL                  | 페이지                   |
| -------------------- | ------------------------ |
| /                    | メイン             |
| /products            | 商品リスト         |
| /products/:productId | 商品詳細           |
| /products/cart       | 商品カート |
| /products/register   | 商品登録           |


## ライブラリ ⚙️

| 要素名           | バージョン |
| ---------------- | ---------- |
| react            | 18.2.0     |
| react-dom        | 18.2.0     |
| react-hook-form  | 7.45.4     |
| react-router-dom | 6.15.0     |
| recoil           | 0.7.7      |
| axios            | 1.4.0      |
| vite             | 4.4.5      |
| firebase         | 10.1.0     |
