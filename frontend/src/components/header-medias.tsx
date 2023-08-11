import { styled } from "styled-components"
import { MediaFacebook, MediaInstagram, MediaWhatsApp } from "./media-soacial";

const TagMedia = styled.div`
display: flex;
padding: 10px 70px;
position: relative;
width: 15%;
flex-direction: row;
align-items: center;
justify-content: space-between;
 svg {
  cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const TextMedia = styled.text`
color: #FFFF;
font-size: 18px;
font-weight: bold;
margin-right: 2px;

`

export function HeaderMedias() {
  return (
    <TagMedia>
      <TextMedia> Redes Sociais </TextMedia>
      <MediaFacebook />
      <MediaInstagram />
      <MediaWhatsApp />
    </TagMedia>
  )
}