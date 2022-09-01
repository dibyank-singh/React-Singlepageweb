import styled from "styled-components"

// Second Main-Section

export const MainSection = styled.section`
background-color:#D9453D;
margin-top: 0%;

`
export const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;

  .main-text{
    position: absolute;
    left: 6rem;
    top: 10rem;
    h2 span {
       
        display: block;
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 3rem;
        line-height: 3rem;
/* or 91% */

       letter-spacing: -0.02em;

       color: #FFD578;

    }
  }
.Second-text{
    position: absolute;
    top: 8rem;
    right: 4rem;

    p span{
        display: block;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1rem;
/* or 155% */

        display: flex;
        align-items: center;
        color: #000000;
        opacity: 0.7;

    }
}
.img-box{
    position: absolute;
    display: flex;
    margin: 0%;
    /* flex-direction: column; */
    top: -13rem;
    left: 19rem;

    img{
        height: 100vh;
        width: auto;
    }
    .para{
        position: absolute;
        top: 8rem;
        right: 0.4rem;
        h2 span {
            display: block;
            font-family: 'Space Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 3rem;
            line-height: 3rem;
/* or 91% */

           letter-spacing: -0.02em;
           color: #000000;     
        }
    }
}

.main-div{
   bottom: 2rem;
    width: 90vw;

    position: absolute;
    /* border: 2px solid red; */
    margin: 0 3rem;
    display: flex;
    justify-content: space-between;
    
    
    .linktag{
        margin-top: 20px;
        display: flex;
        align-items: center;
       
    }
    a{
        color: #000000;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 31px;
        text-decoration-line: underline;
    }
  img{
    margin: 4px 0px 0px 5px;
  }
  .right-div{
    p span{  
        display: block;
        color:#000000 ;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 1.1rem;
        /* line-height: 31px; */
    }
    .inner-div{
        display: flex;
        align-items: center;

        img{
            width: 2.5rem;
        }
       
        button{
            box-shadow: 6px 10px 6px 0px #000000 ;
            padding: 0.5rem 1.5rem  ;
            span{
              font-family: 'Space Mono';
              font-style: normal;
              font-weight: 700;
              font-size: 1.4rem;
              line-height: 1rem;
            }
        }
    }

  }
}
`

export const SecondSection=styled.section`
    
    position: relative;
    height: 100vh;
    width: auto;
    margin-top: 4rem;

    .main-div{
       /* border: 2px solid black; */
        position: absolute;
        display: flex;
        align-items: flex-end;
        right: 0%;
        gap: 15rem;

        .left-div{

            h2 span {
                display: block;
                font-family: 'Space Mono';
                font-style: normal;
                font-weight: 700;
                font-size: 3rem;
                line-height: 3rem;
/* or 91% */

                letter-spacing: -0.02em;
                color: #FFFFFF;


            }
            .inner-second-text{
              color: #FFD578;
            }

            p span {
                color: #FFFFFF;
                font-family: 'Poppins';
                font-style: normal;
                /* font-weight: 400; */
                font-size: 0.8rem;
                line-height: 1rem;
                display: block;
            }
            .para-text{
                font-size: 1rem;
            }
        }
        .right-div{
            img{
            
                height: 80vh;
                width: auto;
            }
        }
    }

    /* @media screen and (max-width: 600px) {
        .main-div{
            display: block;
        }
} */

.circle{
   
    position: absolute;
    height: 82vh;
    width: 40vw;
    background: linear-gradient(125.68deg, #5E43F8 8.68%, #FE0035 92.34%);
    border-radius: 17rem;
    left: 60%;
    transform: translate(-40%,0);

}
`

export const ThirdSection= styled.section`
 position: relative;
 height: 100vh;


 .flex-container{
    position: absolute;
    display: flex;
    /* gap: 2rem; */

    left: 0rem;
    top: 5rem;

    .left-div{
        
        img{
            height: 65vh;
            width: 30vw;
        }
    }

    .right-div{
        h2 span {
            display: block;
            font-family: 'Space Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 3rem;
            line-height: 3rem;
/* or 91% */
           letter-spacing: -0.01em;
           color: #000000;
        }

        p span {
            display: block;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 1rem;
            /* opacity: 0.6; */


            .inner-para{
                    font-size: 3rem;
                    line-height: 2rem;
            }
        }

    }
    
}
.circle{
     /* border: 2px solid red; */
       position: absolute;
       height: 82vh;
       width: 38vw;
       background: #00C5C6;
       border-radius: 17rem;
       left: 2rem;
       /* z-index: -1; */
   /* transform: translate(-2%,0); */
   }

`