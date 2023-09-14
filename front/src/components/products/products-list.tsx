import { useProducts } from "../../hooks/useProducts";
import { styled } from "styled-components";
import { ProductCard } from "./product-card";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
  margin-top: 32px;

`

export function ProductsList() {

  const { data } = useProducts();


  return (

    <ListContainer>
      {data?.data?.data?.product.map((prod: any) =>
        <ProductCard
          key={prod.id}
          title={prod.product_name}
          price={prod.price}
          gender={prod.gender}
          img={data.urlimg + prod.images.map((url: any) => url.url)}
          id={prod.id}

        />)}
    </ListContainer>

  )
}