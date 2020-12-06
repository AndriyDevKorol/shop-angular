export interface ProductModel {
  $key?: string,
  title: string,
  price: number,
  category: string,
  subCategory?: string,
  imgUrl?: string,
  shortDescription: string,
  body: string,
  count?: number,
}
