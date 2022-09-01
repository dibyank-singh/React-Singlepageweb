import React from 'react'
import styled from 'styled-components';

// Components Import
import HeroSection from './HeroSection/HeroSection';
import MiddleSection from './MiddleSection/MiddleSection';
import LowerSection from './LowerSection/LowerSection';

 
// cse part
const Section=styled.section`

`

const Home = () => {
  return (
  
   <Section>
   <HeroSection/>
   <MiddleSection/>
   <LowerSection/>
   </Section>
   
  )
}

export default Home;