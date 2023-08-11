import { ProductsFetchResponse } from "../types/products-response";

import { useQuery } from "@tanstack/react-query";

import axios, { AxiosPromise } from "axios";


const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.get("http://localhost:3333/products")
}

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  })

  const url = 'http://localhost:3333/files/'
  return {
    data: { data, url }
  }
}
