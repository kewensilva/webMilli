import { styled } from "styled-components";

import { LogoIcon } from "../../assets/logo";
import { MediaSocial } from "../social/media-social";


const TagHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: var(--bg-header);
border-radius: 8px ;
padding: 12px 24px;

> div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
}

@media (min-width: 768px) {
    padding: 20px 160px;   
}
`;


const Logo = styled.a`
color: var(--logo-color);
font-weight: 400;
line-height: 75%;
font-size: 24px;
@media (min-width: 768px ) {
    font-size: 40px;
}

`;


export default function Header() {
    return (
        <TagHeader>
            <Logo href="/" >
                <LogoIcon />
            </Logo>
            <MediaSocial />
        </TagHeader>
    )
}