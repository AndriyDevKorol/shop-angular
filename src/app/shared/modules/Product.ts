
export interface Product {
  $key?: string;
  category: string;
  title: string;
  shortDescription: string;
  body: string;
  price: number;
  count?: number;
  reviewShow?: boolean;
}
