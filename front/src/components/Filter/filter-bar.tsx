import { styled } from "styled-components";

import { FilterType } from "./filter-type";


const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
   
`


export function FilterBar() {
  return (
    <FilterContainer>
      <FilterType />
    </FilterContainer>
  )
}