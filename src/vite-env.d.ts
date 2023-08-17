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
  readonly VITE_URL_ERROR_NOT_FOUND: string;
  readonly VITE_NAV_PRODUCTS_DETAIL: string;
  // APPLICATION
  readonly VITE_ADMIN_EMAIL: string;
  // CLOUDINARY
  readonly VITE_URL_CLOUDINARY: string;
  readonly VITE_VAR_CLOUDINARY_UPLOAD_PRESET: string;
  readonly VITE_VAR_CLOUDINARY_CLOUD_NAME: string;
}
