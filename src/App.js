import React, { Component } from 'react'
import WrapperApp from './WrapperApp'
import {Provider } from 'react-redux'
import {createStore} from 'redux'


const initialState = { countryList: [],countryListName: [],countryListRegion: [],mode: "true",countryClick: [],countryname: ""}

 
function reducer(state,action) {
 
  switch(action.type)
  {
    case 'SET_COUNTRY_LIST': 
    {
      
      return {...state , countryList: action.payload}
    }
    case 'SET_COUNTRY_BY_NAME':{
       const countryname= action.payload
      if (action.payload.length > 0 ){
        const countryListName = state.countryList.filter((country)=>{ return   country.name.toLowerCase().includes(action.payload.toLowerCase())  })
        return{...state, countryListName,countryname }

      }
      
      return {...state, countryListName: [],countryname: ''}
    }
    case 'SET_COUNTRY_BY_REGION':{

        
      if (action.payload !== '...' ){
       const countryListRegion = state.countryList.filter((country)=> country.region.toLowerCase().includes(action.payload.toLowerCase()) )

        return{...state, countryListRegion  }
      }
      return {...state, countryListRegion: []}
    }

    case 'SET_MODE' : {

       return {...state, mode: action.payload}
    }


    case 'SET_COUNTRY_CLICK': {
      if(action.payload.lenght > 0)
      {
         return {...state, countryClick: action.payload}
      }
      return {...state, countryClick: []}
    }



    default: return state
  }
  
  
}

const store = createStore(reducer, initialState);


export default class App extends Component {


  render() {
    return (

       <Provider  store={store}>
          <WrapperApp/>

        
         
      </Provider> 
    )
  }
}








/* import React from 'react';
import styled from 'styled-components'
import CountryList from './components/CountryList'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Search from './components/Search'




const AppStyled = styled.div`
padding-top: 20px;
text-align: center;
`


const initialState = { countryList: [],countryListByName:[],countryListByRegion:[],countryListFilter:[],searchFilter: ''}
function reducer(state,action){
  switch(action.type)
  {
    case 'SET_COUNTRY_LIST':{
       
return {...state,countryList: action.payload}
    }
    case 'SET_COUNTRY_BY_NAME': {
         const searchFilter = action.payload
         if(searchFilter.length > 0){
           const countrylistFilter = state.countryList.filter((country)=>{ return country.name.toLowerCase().includes(searchFilter.toLowerCase()) })
           return {...state,countrylistFilter :[],searchFilter: ''}
         }
         return {...state,countrylistFilter: [],searchFilter: ''}
    }
   
    default: {
      return state
    } 
  
    
  }
  
}



const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
   <AppStyled>
      <Search/> 
    <CountryList/> 
    </AppStyled> 
     </Provider>
  );
}

export default App;
 */