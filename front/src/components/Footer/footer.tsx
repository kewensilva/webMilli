import { styled } from "styled-components";
// import { LogoIcon } from "../../assets/logo";

import { LogoInstagram } from "../../assets/logoIntagram";
import { LogoWhatsApp } from "../../assets/logoWhatsApp";
import { LogoFacebook } from "../../assets/logoFacebook";

const TagFooter = styled.footer`
background-color: var(--bg-header);
/* position: relative; */
bottom: 0;
color: #FFF;
min-width: 250px;
justify-content: center;
left: 0;
`;

const ContainerFooter = styled.div`
display: flex;
width: relative;
background-color: var(--bg-header);
flex-direction: column;
`;

const FooterColumns = styled.section`
  list-style-type: none;
  padding: 0;
  margin: 0;
  `
const FooterTop = styled.section`
display: flex;
align-items: center;
padding: 8px 0px;
flex-wrap: wrap;
justify-content: space-between;
width: 100vw;
border-bottom: 1px solid var(--text-dark);
@media (min-width: 768px) {
}
`
const FooterLinks = styled.span`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20%;
  flex-wrap: wrap;
  block-size: 50px;
  gap: 12px;
`
const FooterLogo = styled.a`
  > img {
    width: 100px;
    height: 60px;
  }
`
const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    font-size: 24px;
  }
`
export default function Footer() {


  return (
    <TagFooter>
      <ContainerFooter>
        <FooterTop>
          <FooterLogo href="/">
            <img src="/Milli_botao.png" />
          </FooterLogo>
          <FooterLinks>
            <a href="https://m.facebook.com/milli.guarapuava/">
              <LogoFacebook />
            </a>
            <a href="https://api.whatsapp.com/message/566GHU63OXSNI1?autoload=1&app_absent=0">
              <LogoWhatsApp />
            </a>
            <a href="https://www.instagram.com/milli.guarapuava/?ref=journal.revou.co">
              <LogoInstagram />
            </a>
          </FooterLinks>
        </FooterTop>
        <FooterColumns>
          Saldanha Marinho, 1616 Galeria Dipp - Loja 09 <br /> Centro, Guarapuava - PR, 85035-160.
        </FooterColumns>
        <FooterBottom>
          <span>&copy; 2023 - Milli Sapatilhas - CNPJ - 35.295.937/0001-16 </span>
        </FooterBottom>
      </ContainerFooter>
    </TagFooter>
  )
}