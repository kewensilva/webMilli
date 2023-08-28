import { styled } from "styled-components";
import { LogoClose } from "../assets/logoClose";


interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}
const Container = styled.div`
    position: fixed;
    background: rgba(0,0,0,0.6);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`
const Content = styled.div`
    width: 50vw;
    border-radius: 8px;
    padding: 250px 550px;
    position: fixed;
    top: 20%;
    left: 20%;
    background-color:#d1d1d1;
    border-radius: 12px;
    animation: drop 2s linear;
`
const Btn = styled.button`
    border: none;
    position: absolute;
    border-radius:  12px;
    padding: 15px;
    top: 0;
    right: 0vw;
    cursor: pointer;
    background-color: #C4007A;
    color: #FFF;

`
const Title = styled.h1`
    color: #000;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);    
`



export default function WelcomePage({ isOpen, setOpen }: IModal) {

    if (isOpen) {
        return (
            <Container onClick={setOpen.bind(this, false)}>
                <Content onClick={(e) => e.stopPropagation()}>
                    <Title>Conheça as Novidades!!!</Title>
                    <Btn onClick={() => setOpen(!isOpen)}>
                        <LogoClose />
                    </Btn>
                </Content>
            </Container>
        )
    }
}