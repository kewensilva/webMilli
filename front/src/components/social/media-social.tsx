import { styled } from "styled-components";
import { LogoFacebook } from "../../assets/logoFacebook";
import { LogoInstagram } from "../../assets/logoIntagram";
import { LogoWhatsApp } from "../../assets/logoWhatsApp";

const Container = styled.div`
    position: relative;
    display: flex;
    padding: 1em 20em ;
    margin: 0;
`
const MediaText = styled.h4`
    color: #FFF;
    flex-wrap: wrap;
    padding: 0;
    
`
const HeaderLinks = styled.span`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20%;
  flex-wrap: wrap;
  block-size: 50px;
  gap: 12px;
`;
export function MediaSocial() {
    return (
        <Container>
            <MediaText> Redes Sociais</MediaText>
            <HeaderLinks>
                <a href="https://m.facebook.com/milli.guarapuava/">
                    <LogoFacebook />
                </a>
                <a href="https://api.whatsapp.com/message/566GHU63OXSNI1?autoload=1&app_absent=0">
                    <LogoWhatsApp />
                </a>
                <a href="https://www.instagram.com/milli.guarapuava/?ref=journal.revou.co">
                    <LogoInstagram />
                </a>
            </HeaderLinks>
        </Container>
    )
}