import { styled } from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
width: 300px;
background: #F3F5F6;
border: none;
padding: 10px 16px;

border-radius: 8px;
font-family: inherit;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: var(--text-dark);
`

const InputContainer = styled.div`
  position: relative;
  width: 340px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  )
}