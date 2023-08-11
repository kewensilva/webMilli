import { styled } from "styled-components";

interface ProductCardProps {
  title: string,
  price: number,
  img: string
}

export const Card = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 00px 0px 4px 4px;
background: rgba(255,255,255, 0.4);
backdrop-filter: blur(10px);
cursor: pointer;

img {
  width: 256px;
  height: 300px;
}
`;

export function ProductCard(props: ProductCardProps) {
  return (
    <Card>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </Card>
  )
}