import React from 'react'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const CountryStyled = styled.div`
background: ${(props)=> props.mode === "true" ? "transparent" : "rgba(255,255,255,.2)"    };
width: 300px;
margin: 15px;
min-height: 350px;
box-shadow: ${(props)=> props.mode === "true" ? "0px 0px 5px black" : "0px 0px 10px  rgba(255,255,255,.8)"    };
border-radius: 5px;
overflow: hidden;
padding-bottom: 10px;
font-family: 'Nunito Sans', sans-serif;
cursor: pointer;
.details{  
   padding-left: 15px;
  text-align: left;
   p{
      margin: 0;
   } 
}
img{
    padding-top: 5px;
    margin: 5px;
    width: 90%;
    height: 40%;
    border-radius: 10px;
}


`



export default function Country(props) {

    const history = useHistory()
    const dispatch = useDispatch()
 function handleClick()  {
   dispatch({
     type: "SET_COUNTRY_CLICK",
     payload: props

   })
   history.push(`/country/${props.name}`)
 }

  const mode = useSelector((state)=> state.mode)

    return (
        <CountryStyled  onClick={handleClick}  mode={mode} >
            <img loading="lazy" src={props.flag} alt="bandera"/>
            <div className="details"> 
            <h2>{props.name}</h2>
             <p> <strong>Population:</strong>  {props.population} </p>
             <p> <strong>Region:</strong>  {props.region} </p>
             <p> <strong>Capital:</strong>  {props.capital} </p>
             </div>
        </CountryStyled>
    )
}



