import React from 'react'
import BgPeople from "../../../Assests/BgPeopleff.png"

// Css Styled components import
import {MainSection,Section,SectionTwo,SectionThird} from './HeroSection.styled'


const HeroSection = () => {
    return (
        <>
            <MainSection> 
            <Section>
               
                    <div className="first-sec">
                        <p className='first-para'>Welcome!</p>
                        
                        <h3 className='first-heading'>The smart <br /> new way<br /><span className='Inner-heading'> to hire and <br /> get hired.</span></h3>
                    </div>
               
            </Section>
            <SectionTwo>

                <div className="img-text">
                    <img src={BgPeople} alt="bgimage"  />
                </div>
                <div className="text-content">
                    <p>Let’s go app:</p>
                    <img src="./Img/Group 94.png" alt="App Store" />
                    <img src="./Img/Group 95.png" alt="Google Store" />
                    <div className="linktag">
                        <a href="#">See more</a>
                        <img src="./Img/VectorArrow.png" alt="" />
                    </div>
                </div>
                <div className="right-div">
                    <p>Discover how we use AI to shape the future of recruitment and turn problems into possibilities.</p>
                    <div className="inner-div">
                        <img src="./Img/WhiteArrow.png" alt="Arrow" />
                        <button> <span>Get Started</span> </button>
                    </div>
                </div>
            </SectionTwo>

            <SectionThird>
              
                <div className="bgimg">
 
                </div>
               
                <div className="text-filed">
                <p>It's not easy to find a great professional</p> 
                <h2><span>It takes a </span><span>tremendous</span> <span className='text-color'>amount of time,</span> 
                <span> energy and money</span> <span>to find & hire</span> <span> good people.</span> </h2>
                </div>
                
                <div className="right-div">
                    <p>Discover how we use AI to shape the future of recruitment and turn problems into possibilities.</p>
                    <div className="inner-div">
                        <button> <span> Get Started</span></button>
                    </div>
                </div>
            </SectionThird>
            </MainSection>

        </>
    )
}

export default HeroSection;