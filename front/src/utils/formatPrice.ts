export function formatValue(value: number){
    const valueInReais = value / 1 ;
    return valueInReais.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
  }
