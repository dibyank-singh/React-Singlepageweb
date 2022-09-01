import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'


// Css part
const MainHeader = styled.header`
/* width: 100vw; */
padding: 0 4.8rem;
height:6rem;
background-color:#D9453D;
/* background-color: #F5F5F5;; */
display:flex;
justify-content: space-between;
align-items: center;

`;
const Leftnavbar=styled.div`
display:flex;
align-items: center;
.logo{
  height:30px;
  width:30px;
  /* height:auto;
  max-width:30% */
}
.PersText{
  color: #000000;
  font-size: 20px;
  font-weight:800;
  margin-left: 5px;
}

`

const Header = () => {
  return (
  
    <MainHeader>
    <Leftnavbar>
    <NavLink to="/"><img src="./Img/logo.png" alt="logo" className='logo' /></NavLink>
     <span className='PersText'> Perspectv </span> 
    </Leftnavbar>
     <Navbar/>
    </MainHeader>
    
  )
}

export default Header