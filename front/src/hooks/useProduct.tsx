import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse } from "../types/products-response";
import { useLocation } from "react-router-dom";

const fetcher = (id): AxiosPromise<ProductFetchResponse> => {
    return axios.get(import.meta.env.VITE_URL_PROD + `${id}`)
}

export function useProduct() {
    const location = useLocation();
    const id = location.pathname.split('/').pop();
    const { data } = useQuery(['product', id], () => fetcher(id));

    const urlimg = import.meta.env.VITE_REACT_APP_LINK_API
    return {
        data: data?.data?.product,
        urlimg
    }
}