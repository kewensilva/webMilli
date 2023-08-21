import { styled } from "styled-components";
import { LogoFacebook } from "../../assets/logoFacebook";
import { LogoInstagram } from "../../assets/logoIntagram";
import { LogoWhatsApp } from "../../assets/logoWhatsApp";

const Container = styled.div`
    /* position: relative; */
    padding: 2em 20em ;
    /* outline: 2px solid #FFF; */
    margin: 0;
`
const MediaText = styled.text`
    color: #FFF;
    flex-wrap: wrap;
`

export function MediaSocial() {
    return (
        <Container>
            <MediaText>Redes Sociais</MediaText>
            <LogoFacebook/>
            <LogoInstagram/>
            <LogoWhatsApp/> 
        </Container>
    )
}