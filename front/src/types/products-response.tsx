
export interface Products {
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

export interface ProductsFetchResponse<Products> {

  product: Products[]

}

export interface ProductFetchResponse {
  product: Products,
  prodImg: Products[]

}

