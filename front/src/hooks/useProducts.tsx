import { ProductsFetchResponse } from "../types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";



const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.get(import.meta.env.VITE_URL_API)
}

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  })
  const urlimg = import.meta.env.VITE_REACT_APP_LINK_API
  return {

    data: { data, urlimg }
  }
}
