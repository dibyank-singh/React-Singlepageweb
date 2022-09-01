import React from 'react'
import styled from 'styled-components';



const ButtonConst = () => {
  return (
  <>
    <div className="main-div">
         <div className="linktag">
                        <a href="#">See more</a>
                        <img src="./Img/VectorArrow.png" alt="" />
         </div>
         <div className="right-div">
                    <p> <span>Discover how we use AI to shape</span>  <span> the future of recruitment and turn</span> <span> problems into possibilities.</span></p>
                    <div className="inner-div">
                        {/* <img src="./Img/WhiteArrow.png" alt="Arrow" /> */}
                        <button> <span>Get Started</span> </button>
                    </div>
         </div>
    </div>
    </>
  )
}

export default ButtonConst;