import React ,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'

import { CountryStyledMax} from './country'
import styled from 'styled-components'



const CountryPageStyle = styled.div`
 height: 100%;
 display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
 text-align: center;
 padding: 50px; 
@media screen and (max-width: 768px)
{
   padding: 20px;
}
`





export default function CountryPage(props) {
    

  const mode= useSelector(state => state.mode)
  let countryList = useSelector(state => state.countryList.find(item => item.alpha2Code === props.match.params.id))

  const [country,setCountry] = useState(countryList)
 useEffect(()=>{

     
   if(!country){
       
    fetch(`https://restcountries.eu/rest/v2/name/${props.match.params.id}`)
    .then((response) => response.json())
    .then((data) => {
      setCountry(data)
    })
  
   }
 },[country,props.match.params.id])


    return (
        <CountryPageStyle>
        {country ? country.map((country)=> { 
             
                return <CountryStyledMax key={country.name} mode={mode} >
          <img loading="lazy" src={country.flag} alt="bandera"/>
       <div className="details"> 
       <h2>{country.name}</h2>
        <p> <strong>Population:</strong>  {country.population} </p>
        <p> <strong>Region:</strong>  {country.region} </p>
        <p> <strong>Capital:</strong>  {country.capital} </p>
        <p> <strong>SubRegion:</strong>  {country.subregion} </p>
        </div></CountryStyledMax> 

       
         }) : <> </> } 
 
        </CountryPageStyle>
    )
}
