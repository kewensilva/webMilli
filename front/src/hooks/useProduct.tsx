import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse } from "../types/products-response";

const fetcher = (id: number): AxiosPromise<ProductFetchResponse> => {
    return axios.get(import.meta.env.VITE_URL_PROD + `${id}`, {
    })
}

export function useProduct(id: number) {
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id
    });

    const urlimg = import.meta.env.VITE_REACT_APP_LINK_API
    return {
        data: data?.data?.product,
        urlimg
    }
}