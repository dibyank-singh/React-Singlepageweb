import React from 'react'
import styled from 'styled-components';
import Constant from '../../constant/Constant';
import ButtonConst from '../../constant/ButtonConst';

// Css style compnents imports 
import {MainSection,Section,SecondSection,SecondMainSection,ThirdSection} from './MiddleSection.styled'

const MiddleSection = () => {
  return (
    <>
    <MainSection>
      <Section>
      <div className="first-main-div">
        <p>Spend a lot of time and money!</p>
        <h2> <span>Companies</span> <span> have never</span>  <span>hired as</span> <span>as much as they</span>
       <span>do today.</span> </h2>
      </div>
      <div className="square-box">
        <p><span>They’ve never </span> <span>spent as much money</span> <span>doing it.</span> </p>
      </div>
      <div className="square-box-two">
        <p><span>They’ve never </span> <span>spent as much money</span> <span>doing it.</span> </p>
      </div>
      <Constant/>
      <div className="linktag">
          <a href="#">See more</a>
          <img src="./Img/VectorArrow.png" alt="" />
      </div>
      </Section>
      <SecondSection>
        
       <div className="second-div">
        <p>High values and full job boards</p>
         <h2>The problem is that <br /> recruitment agencies <br /> charge up to <span className='inner-text'>25% </span> <br />
         <span className='snd-inner-div'>(sometimes more)</span>  and <br />
          job boards are <br />
          full of rubbish.</h2>
       </div>
       <ButtonConst/>
       <div className="box-img">
        <img src="./Img/Group100.png" alt="Box-img-logo" />
       </div>
      </SecondSection>
    </MainSection>
    </>
  )
}





export default MiddleSection;