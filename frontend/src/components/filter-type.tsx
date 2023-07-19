import { useFilter } from "@/hooks/useFilter";
import { FilterTypeEnum } from "@/types/filter-type";
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean
}

interface FilterBarProps {

}

const FilterList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
`

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${props => props.selected ? '600' : '400'};
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${props => props.selected ? '6px solid var(--bg-header)' : ''};

  list-style: none;
`;

interface FilterTypeProps {

}

export function FilterType(props: FilterTypeProps) {
  const { type, setType } = useFilter();

  const handleType = (value: FilterTypeEnum) => {
    setType(value);
  }
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterTypeEnum.all}
        onClick={() => handleType(FilterTypeEnum.all)}
      >Todos Produtos</FilterItem>

      <FilterItem
        selected={type === FilterTypeEnum.botas}
        onClick={() => handleType(FilterTypeEnum.botas)}
      >Botas</FilterItem>

      <FilterItem
        selected={type === FilterTypeEnum.sapatilhas}
        onClick={() => handleType(FilterTypeEnum.sapatilhas)}
      >Sapatilhas</FilterItem>

      <FilterItem
        selected={type === FilterTypeEnum.bolsas}
        onClick={() => handleType(FilterTypeEnum.bolsas)}
      >Bolsas</FilterItem>
    </FilterList>
  )
}