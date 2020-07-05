import React from 'react'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'

const ModeDarkStyled= styled.div`

height: auto; 
button{
    padding: 10px;
    background: transparent;
    border-radius: 50%;
    color: ${(props)=> props.mode !== "true" ? "#fafafa" : "black" };
    border: none;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background: ${(props)=> props.mode === "true" ? "#161515" : "white" };
        color: ${(props)=> props.mode === "true" ? "white" : "black" };
     
    }
    &:active{
        transform: scale(0.9)
    }
    &:focus {
        outline: none;
        
    }
    &::selection{
        background: transparent;
    }

}
`

export default function ModeDark() {
 
 const dispatch = useDispatch()
  const trans = useSelector((state) => {return state.mode});



function transform(){

dispatch({
    type: "SET_MODE",
    payload: (trans === "true" ? "false" : "true")
})
}


    return (
        <ModeDarkStyled mode={trans}>

            {
            
            trans === "true" ?  <button onClick={transform}> <i className="fas fa-moon"></i>  </button> :  <button onClick={transform}><i className="fas fa-sun"></i></button> 
            
            }
     
             
        </ModeDarkStyled>
    )
}
