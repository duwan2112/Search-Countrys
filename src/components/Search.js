import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styled from 'styled-components'

const SearchStyled = styled.div`
padding-top: 30px;
width: 100%;
height: 20%;
position: relative;
z-index: 0;
transition: 1s all;
input{
    background: ${(props)=> props.mode === "true" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.1)"    };
    color: ${(props)=> props.mode === "true" ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.3)"    };
    width: 60vw;
    height: 40px;
    box-shadow: inset 0px 0px 5px  black;
    border-radius: 5px;
    border: none;
    overflow: hidden;
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 15px;
    &:focus{
        outline: 0px;
    }
}
select {
    background: ${(props)=> props.mode === "true" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.1)"    };
   
   padding: 0px 10px;
   color: ${(props)=> props.mode === "true" ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.3)"    };
    width: 50vw;
    height: 30px;
    border: none;
    box-shadow: inset 0px 0px 5px  black;
    
    border-radius: 5px;
    &:focus{
        background: ${(props)=> props.mode === "true" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.1)"    };
        color: black;
        outline: none;
    }
}
@media screen and (max-width: 768px)
{
    transition: 0s all; 
}

`

export default function Search() {


    const mode = useSelector((state)=> state.mode)
 const dispatch = useDispatch()

var obtenerRef= React.createRef();
function active (){
    dispatch({
        type: 'SET_COUNTRY_BY_NAME',
        payload: obtenerRef.current.value
    
    })
 
}
function activation(event){
    dispatch({
        type: 'SET_COUNTRY_BY_REGION',
        payload: event.target.value
    
    })

 }
    return (
        <SearchStyled mode={mode}>
            <input onKeyUp={active} ref={obtenerRef} type="text"  placeholder="Busca un pais..."/> 
            <br/> 
            <select onChange={activation} name="region"> 
            <option value="Elige"> Elige una opcion</option>
            <option value="America"> America </option> 
            <option value="Asia">  Asia</option> 
            <option value="Europe"> Europe </option>
             <option value="Africa"> Africa </option>
             <option value="Oceania"> Oceania </option> 
            </select> 
           
        </SearchStyled>
    )
}



