import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import LogoBack from "../../assets/logoBack";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;

`

export function BackBtn() {
    const router = useNavigate();
    return (
        <Button onClick={() => router(-1)}>
            <LogoBack />
            Voltar
        </Button>
    )
}
