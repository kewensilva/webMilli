import { styled } from "styled-components"
import { DefaultLaypout } from "../components/default/default-layput"
import { BackBtn } from "../components/Button/button"
import { useProduct } from "../hooks/useProduct"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import { formatValue } from "../utils/formatPrice"

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
        width: 70%;
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
        color: var(--dark);

    }
    h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        color: var(--dark);
        margin-top:12px;
    }
    span:nth-of-type(2){
        font-weight: 600;
        font-size: 20px;
        color: var(--dark);
        margin-bottom: 24px;
    }
    p {
        font-weight: 300;
        font-size:32px;
        line-height: 150%;
        color: var(--dark);
        
    }
    div {
        h3 {
            text-transform: uppercase;
            color: var(--dark);
            font-weight: 500;
            font-size: 16px;
        }
        p{
            font-size: 14px;
        }
    }
}
`

export default function Product(id) {
    const { data, urlimg } = useProduct(id);
    const price = formatValue(data?.price);
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
                            <span>{price}</span>
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