import React from 'react'

export default function Currencybox(props) {
const{
  listcurrency,
  selectCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount 
} = props

  return (

    
    <div>
      <input type = "number" className="input" value = {amount} onChange = {onChangeAmount} />
      <div className = "from-1">     
        <select value = {selectCurrency} onChange= {onChangeCurrency}>
        {listcurrency.map(option => (
          <option key = {option}
          value ={option}> {option}
          </option>
        ))}        
        </select>
        </div>
        
    </div>
  )
}
