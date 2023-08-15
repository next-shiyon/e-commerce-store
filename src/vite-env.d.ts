/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  // APPLICATION URL
  readonly VITE_URL_INDEX: string;
  readonly VITE_URL_PRODUCTS: string;
  readonly VITE_URL_PRODUCTS_DETAIL: string;
  readonly VITE_URL_PRODUCTS_CART: string;
  readonly VITE_URL_PRODUCTS_REGISTER: string;
}
