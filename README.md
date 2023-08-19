# React + Typescript 練習用 EC サイトの実装

## 主要技術要素 ⚙️

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

## アプリケーション起動方法 📄

```shell
# プロジェクトクローン
git clone git@github.com:next-shiyon/e-commerce-store.git
cd e-commerce-store

# ノードモジュールインストール
yarn
# アプリケーション起動
yarn run dev
```

## URL 設計 🏛️

| URL                  | 画面名                   |
| -------------------- | ------------------------ |
| /                    | メインページ             |
| /products            | 商品リストページ         |
| /products/:productId | 商品詳細ページ           |
| /products/cart       | ショッピングカートページ |
| /products/register   | 商品登録ページ           |
