import { ProductsFetchResponse } from "../types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { FilterTypeEnum } from "../types/filter-type";



const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.get(import.meta.env.VITE_URL_API)
}

// const getCat = (type: FilterTypeEnum){
//   if (type === FilterTypeEnum.all)
// }
export function useProducts() {
  // const {type} = useFilter()
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  })
  const urlimg = import.meta.env.VITE_REACT_APP_LINK_API
  return {

    data: { data, urlimg }
  }
}
