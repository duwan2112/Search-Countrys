import React from 'react'
import styled from 'styled-components'
import ModeDark from './ModeDark'
import {useSelector} from 'react-redux'
import { Link} from 'react-router-dom'
const NavbarStyled = styled.div`

height: 20%;
transition: 1s all;
background: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;

background: ${(props)=> props.mode === "true" ? "white" : "#161515"    };
box-shadow: ${(props)=> props.mode === "true" ? "0px 0px 5px black" : "0px 0px 5px white"    };
position: relative; 
z-index: 1;
a{
    text-decoration: none;
    color: ${(props)=> props.mode !== "true" ? "#fafafa" : "black"  };
}
h2{
    text-transform: uppercase;
    letter-spacing: -2px;
    text-shadow: 1px 1px 10px   black;
}
@media screen and (max-width: 768px)
{
    transition: 0s all; 
}
`




export default function Navbar() {
   
    const mode = useSelector((state)=> state.mode)
    
    return (
      
        <NavbarStyled mode={mode}>
              <Link to="/"> <h2>Te amo ñovia</h2> </Link> 
           
            <ModeDark/> 
        </NavbarStyled>
    )
}
