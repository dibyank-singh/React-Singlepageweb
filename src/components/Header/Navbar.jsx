import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const Navbar = () => {

  // css part
  const Nav = styled.nav`
  .Menu-list {
  
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style-type: none;

    .navbar-link{
      color: #000000;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 31px;
      cursor: pointer;
      text-decoration: none;
      &:hover{
        color:white;
      }
    }
  
    
  }
  `
  return (
    <Nav>
      <div className="MenuIcon">
        <ul className="Menu-list">
          <li><img className='Twt-icon' src="./Img/Vector.png" alt="Twitter-logo" /> </li>
          <li><img className='Youtube-icon' src="./Img/Youtube.png" alt=" Youtube-logo" /> </li>
          <li><img className='Linkedin-icon' src="/Img/Linkedin.png" alt="Linkedin-logo" /> </li>
          <li><img className='Faceboob-icon' src="/Img/facebook.png" alt="Facebook-logo" /> </li>
          <li><img className='Insta-icon' src="/Img/Insta.png" alt="Instagram-logo" /> </li>
          {/* <li><img className='Menu-icon' src="/Img/Rectangle.png" alt="Menu-logo" /> </li> */}

        </ul>
      </div>
    </Nav>
  )
}

export default Navbar;