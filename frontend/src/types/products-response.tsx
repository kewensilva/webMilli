import { Product } from "./product"
export interface ProductsFetchResponse {
  data: {
    product: Product[]
  }
}