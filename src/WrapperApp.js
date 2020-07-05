import React from 'react'
import styled from 'styled-components'
import CountryList from './components/CountryList'
import Search from './components/Search'
import Navbar from './components/Navbar'
import CountryPage from './components/CountryPage'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const AppWrapperStyled = styled.div`

box-sizing: border-box;
text-align: center;
min-height: 100vh;
transition: 1s all;
background: ${(props)=> props.mode === "true" ? "#fafafa" : "#161615"    };
@media screen and (max-width: 768px)
{
    transition: 0s all; 
}
`





export default function WrapperApp() {
  const mode = useSelector((state)=> state.mode )  
    return (
        <>
          <Router>  
       <AppWrapperStyled mode={mode}>         
        <Navbar />
          <Switch> 
            
             <Route path="/country/:id" component={CountryPage}/>  
   <Route  path="/"> 
           
           <Search /> 
          <CountryList/>
          </Route>
           </Switch>
      </AppWrapperStyled>
      </Router>  
        </>
    )
}

