import React ,{ useEffect } from 'react'
import Country from './country'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'


const CountryListStyled = styled.div`
 height: 100%;
 display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
 text-align: center;
 padding: 100px; 
@media screen and (max-width: 768px)
{
   padding: 20px;
}
`







export default function CountryList() {
const dispatch = useDispatch()
const state = useSelector((state) => {
  if( state.countryListName.length >0){
    return state.countryListName
  }
  else if (state.countryListRegion.length > 0){
    return state.countryListRegion
  }
  return state.countryList
} )





useEffect(() => {

  fetch("https://restcountries.eu/rest/v2/all")
  .then(respuesta => respuesta.json())
  .then(resultado => dispatch({
    type: "SET_COUNTRY_LIST",
    payload: resultado
  }))
},[dispatch]);


  return (
   
    <CountryListStyled >
      { state.map((state) => {return <Country 
       key={state.name} 
       flag={state.flag}
       name={state.name}
       population={state.population}
       region={state.region}
       capital={state.capital} />}) }
    </CountryListStyled>
  )
}










