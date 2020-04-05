
export interface Product {
  $key?: string;
  title: string;
  price: number;
  category: string;
  imgUrl?: string;
  shortDescription: string;
  body: string;
  count?: number;
}
