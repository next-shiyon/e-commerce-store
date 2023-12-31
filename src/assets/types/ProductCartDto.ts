import { ProductFormDto } from "./ProductFormDto";

export type ProductCartDto = {
  uid: string;
  pieces: number;
  id: string;
} & ProductFormDto;
