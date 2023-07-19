"use client"
import { styled } from "styled-components";

import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInput, PrimaryInputSearchIcon } from "./primary-input";

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface HeaderProps {

}

const TagHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 26px 200px;
background-color: var(--bg-header);
border-radius: 8px;
`;

const Logo = styled.a`
color: var(--logo-color);
font-weight: 400;
line-height: 150%;
font-size: 40px;
`;

export default function Header(props: HeaderProps) {
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Milli Guarapuava</Logo>
            <div>
                <PrimaryInputSearchIcon placeholder="Buscar Produtos" />
            </div>
        </TagHeader>
    )
}