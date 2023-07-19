import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.get(API_URL)
}

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  })

  const url = 'http://localhost:3333/files/';

  return {
    data: { data, url }

  }
}