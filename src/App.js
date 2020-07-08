import React, { useEffect , useState } from 'react';
import './App.css';
import Currencybox from './Currencybox';
import { BsArrowUpDown } from "react-icons/bs";

const url ="https://api.exchangeratesapi.io/latest";

function App() {

  // usestate to list the names in the dropdown
  // it returns an array of options
  // first is the current currency and second is the object or function that allows to set this currency
  const [listcurrency, setlistCurrency] = useState([])
  const [fromCurrency, setfromCurrency] =useState()
  const [toCurrency, settoCurrency] = useState()
  const [amount, setamount] = useState(1)
  const [amountFromCurrency, setamountFromCurrency] = useState(true)
  const [amountToCurrency, setamountToCurrency] = useState(true)
  const [exchangeRate, setexchangeRate] = useState() 


  let toAmount, fromAmount 
  if(amountFromCurrency){
    fromAmount = amount
    toAmount = amount * exchangeRate
  }
  else{
    toAmount =amount
    fromAmount= amount / exchangeRate
  }
   // here the useEffect takes two parameter: first is the function and second
  // it is called the first time when this application is called
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const nextcurrency = Object.keys(data.rates)[0]
        setlistCurrency([data.base, ...Object.keys(data.rates)])
        setfromCurrency(data.base)
        settoCurrency(nextcurrency)
        setexchangeRate(data.rates[nextcurrency])

      })
  } ,[])


  // whenever fromcurrency or tocurrency changes do this

  useEffect(() => {
    if(fromCurrency != null && toCurrency != null){
      fetch(`${url}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setexchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency,toCurrency])

  function fromAmountChange(e){
    setamount(e.target.value)
    setamountFromCurrency(true)
  }

  function toAmountChange(e){
    setamount(e.target.value)
    setamountFromCurrency(false)
  }

  const handleSwap = (e) => {
    e.preventDefault()
    settoCurrency(fromCurrency)
    setfromCurrency(toCurrency)
    setamountFromCurrency(amountToCurrency)
    setamountToCurrency(amountFromCurrency)
  }
  let currentRate = `${parseFloat(fromAmount).toFixed(2)} ${fromCurrency} = ${parseFloat(toAmount).toFixed(2)} ${toCurrency}`
  return (
    //  need Fragment to run the code : <> and </>
    <>
      <div className="container-1"><h1> Currency Converter</h1></div>
      <div className="container-2">
       <div className="text"> <p><h2>Enter the amount to convert</h2></p></div>
    <Currencybox 
    listcurrency = {listcurrency} 
    selectCurrency = {fromCurrency}
    onChangeCurrency = {e => setfromCurrency(e.target.value)}
    
    onChangeAmount = {fromAmountChange}
    amount = {fromAmount}
    />
    {/* <div className="equals"><h2>  = </h2></div> */}
    <div className='w-full my-2 py-2'><BsArrowUpDown onClick={handleSwap} className='equals text-white hover:text-gray-900 rounded-full h-12 w-12 bg-green-600 '/></div>
    <Currencybox
    listcurrency ={listcurrency}
    selectCurrency= {toCurrency}
    onChangeCurrency = {e => settoCurrency(e.target.value)}
    onChangeAmount = {toAmountChange}
    amount ={toAmount}
    />
        <p>{currentRate}</p>
    </div>

    </>

  );
}

export default App;
