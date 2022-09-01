import React from 'react'
import ButtonConst from '../../constant/ButtonConst';

import {MainSection,Section,SecondSection,ThirdSection} from "./LowerSection.styled"

const LowerSection = () => {
  return (
    <MainSection>
       <Section>
        <div className="main-text">
            <h2> <span>it will</span> <span>revolutionise</span> <span>hiring in the</span> <span>future.</span> </h2>
        </div>
        <div className="Second-text">
            <p> <span>A real alternative to recruitment app</span> <span>where job seekers and Hiring managers </span> <span>can connect directly with each other.</span>
            <span>A “real alternative” to recruitment agencies</span> <span> and boards, which are very frustrating and</span> <span> expensive to deal with.</span> </p>
            <p> <span>Our unique data driven recruitment</span> <span>app is quick to setup, easy to use and</span> <span> produces amazing results.</span> </p>
        </div>

        <div className="img-box">
            <img src="./Img/Smartphone.png" alt="Smartphone-logo" />
            <div className="para">

            <h2> <span>That's</span> <span>why we</span> <span>created</span>  </h2>
            </div>
        </div>

        <ButtonConst/>
       </Section>

       <SecondSection>
       <div className="circle"></div>
        <div className="main-div">

            <div className="left-div">
              <h2><span className='inner-text'> Bye, bye </span> <span className='inner-text' >frustration... </span>  <span className='inner-second-text'>hello </span> <span className='inner-second-text'>Perspectv </span></h2>
              <p> <span className='para-text'>Looking for the perfect</span> <span className='para-text'>candidate or job role?</span> <span className='para-text'>No problem.</span>  </p>
              <p> <span >Simply define what you’re looking for and</span> <span >Perspectv will find it for you. Our powerful </span> <span>algorithm, uses thousands of matching markers</span> <span> to identify suitable matches!</span></p>
              <p><span>There’s no more sifting through hundreds of CV’s,</span> <span>no more middlemen and no more recruitment</span> <span>fees. Just fast, accurate results!</span> </p>
            </div>
            <div className="right-div">
              <img src="/Img/MobileGroup2.png" alt="Mobile-group" />
            </div>
        </div>         
       </SecondSection>
       <ThirdSection>
        
            
            <div className="circle">
             </div>
            <div className="flex-container">
            <div className="left-div">
                <img src="/Img/Groupaaacopy.png" alt="Perspective-gp-logo" />
            </div>
            <div className="right-div">
               <h2> <span>We see the</span> <span>world differently,</span> <span> it’s time you</span> <span>did too.</span> </h2>
               <p> <span>We’ve combined modern recruitment methodologies 
                and</span> <span> emerging technology to create the most intuitive and 
                efficient</span> <span> data driven recruitment solution in the world.</span></p>
                <p className='inner-para'  > <span>When traditional recruitment is no longer</span> <span>effective, it’s time for a different Perspectv. </span>  </p>
            </div>
            </div>
        
       </ThirdSection>
    </MainSection>
  )
}

export default LowerSection;