'use client'
import { FilterTypeEnum } from "@/types/filter-type";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  type: FilterTypeEnum.all,
  setType: (value: FilterTypeEnum) => { }
})

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [type, setType] = useState(FilterTypeEnum.all)

  return (
    <FilterContext.Provider value={{ type, setType }}>
      {children}
    </FilterContext.Provider>
  )
} 