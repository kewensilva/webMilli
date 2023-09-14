
export interface Product {
  id: string,
  sku: string,
  cod_reference: string,
  product_name: string,
  description: string,
  price: number,
  inventary: number,
  gender: string,
  img: Object,
  status_product?: boolean,
  last_update_price?: Date,
  images: Object,
  url: string
}

export interface ProductsFetchResponse<Product> {

  product: Product[]

}

export interface ProductFetchResponse {
  product: Product,
  prodImg: Product[]

}

