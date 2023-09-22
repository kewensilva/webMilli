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
      {data?.data?.data?.product.map((prod: any) => {
        const firstImage = prod.images[0];
        const imageUrl = firstImage ? firstImage.url : null;
        

        return (
          <ProductCard
            key={prod.id}
            title={prod.product_name}
            price={prod.price}
            gender={prod.gender}
            img={imageUrl} 
            id={prod.id}
          />
        );
      })}
    </ListContainer>
  );
}