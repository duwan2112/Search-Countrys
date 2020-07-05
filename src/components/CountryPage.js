import React ,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import Country from './country'
import styled from 'styled-components'


const CountryPageStyle = styled.div`
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





export default function CountryPage(props) {
    


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
             
                return <Country 
       key={country.name} 
       flag={country.flag}
       name={country.name}
       population={country.population}
       region={country.region}
       capital={country.capital} />
         }) : <> </> } 
 
        </CountryPageStyle>
    )
}
