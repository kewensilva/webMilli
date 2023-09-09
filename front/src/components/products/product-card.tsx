import { useLocation, useNavigate, useNavigation, useRoutes } from "react-router-dom";
import { styled } from "styled-components";
import { formatValue } from "../../utils/formatPrice";

interface ProductCardProps {
  title: string,
  price: number,
  img: string,
  id: number,
}

export const Card = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 4px 4px 0 0 ;
background: rgba(255,255,255, 0.4);
backdrop-filter: blur(10px);
cursor: pointer;
width: 256px;

img {
  width: 256px;
  height: 256px;
  border-radius: 4px 4px 0 0 ;
}

h3 {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-dark2);
}
p{ 
font-weight: 600;
font-size: 14px;
color: var(--dark);
}
> div {
width: 228px;
height: 1px;
left: 12px;
top: 340px;
margin: 8px 0;
background: #DCE2E6;
}
`;

export function ProductCard(props: ProductCardProps) {
 

  const price = formatValue(props.price)
  
  const router = useNavigate();
  const handleNavigate = () => {
    router("product/" + props.id)
  }
  return (
    <Card onClick={handleNavigate}>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <div />
      <p>{price}</p>
    </Card>
  )
}