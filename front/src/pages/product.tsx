import { styled } from "styled-components"
import { DefaultLaypout } from "../components/default/default-layput"
import { BackBtn } from "../components/Button/button"
import { useProduct } from "../hooks/useProduct"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import { useLocation } from "react-router-dom"

interface ProductProps {

}

const Container = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 32px;  
    margin-top: 24px;
    img {
        max-width: 640px;
        width: 50%;

    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #d1d1d1;

    }
    h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        color: #d1d1d1;
        margin-top:12px;
    }
    span:nth-of-type(2){
        font-weight: 600;
        font-size: 20px;
        color: #d1d1d1;
        margin-bottom: 24px;
    }
    p {
        font-weight: 300;
        font-size:32px;
        line-height: 150%;
        color: #d1d1d1;
        
    }
    div {
        h3 {
            text-transform: uppercase;
            color: #d1d1d1;
            font-weight: 500;
            font-size: 16px;
        }
        p{
            font-size: 14px;
        }
    }
}
`

export default function Product(id: number) {

    const { data, urlimg } = useProduct(id);
    console.log(data);
    const location = useLocation()
    console.log(location.search);

    return (
        <>
            <Header />
            <DefaultLaypout>
                <Container>
                    <BackBtn />
                    <section>
                        <img src={data?.images.map(url => urlimg + url.url)} />
                        <div>
                            <span>Categoria</span>
                            <h2>{data?.product_name}</h2>
                            <span>{data?.price}</span>
                            <p>{data?.gender}</p>
                            <div>
                                <h3>descrição</h3>
                                <p>{data?.description}</p>
                                <span>{data?.sku}</span>
                                <span>{data?.cod_reference}</span>
                            </div>
                        </div>
                    </section>
                </Container>
            </DefaultLaypout>
            <Footer />
        </>
    )
}