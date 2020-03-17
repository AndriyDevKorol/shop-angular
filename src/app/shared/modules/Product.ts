import { Review } from "./Review";

export interface Product {
  $key?: string;
  title: string;
  body: string;
  price: number;
  count?: number;
  reviewShow?: boolean;
  category: string;
}
