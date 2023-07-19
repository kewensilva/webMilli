"use client"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card";
import { styled } from "styled-components";

const ListContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, 256px);
grid-gap: 32px;
max-width: 100%;

margin-top: 32px;
`;

export function ProductsList() {
  const { data, } = useProducts();
  return (

    <ListContainer>
      {data?.data?.data.product.map(prod => <ProductCard
        key={prod.id}
        title={prod.product_name}
        price={prod.price}
        img={data.url + prod.img}
      />)}
    </ListContainer>
  )
}