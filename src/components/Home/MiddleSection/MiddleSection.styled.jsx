import styled from "styled-components";


export const MainSection=styled.section`
background: linear-gradient(176.58deg, rgba(255, 213, 120, 0.55) 19.4%, rgba(113, 204, 163, 0.800781) 59.99%, #00C5C6 92.24%);
  `
export const Section=styled.section`
height: 100vh;
/* min-height: 100vh; */
min-width: 100%;
position: relative;


 .first-main-div{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 6rem;
    left: 14rem;

    p{
      margin: 0%;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 1rem;

    }
     h2 span{
       display: block;
       font-family: 'Space Mono';
       font-style: normal;
       font-weight: 700;
       font-size: 3rem;
       line-height: 3rem;
       letter-spacing: -0.02em;

     }
 }
.square-box{
 display: flex;
 justify-content: center;
 align-items: center;
 position: absolute;
 background: #5E43F8;
 height: 42vh;
 width: 20vw;
 min-height: 30vh;
 min-width: 20vw;
 /* text-align: center; */
 /* align-items: center; */
 border-radius: 20rem;
 top: 3rem;
 right: 20rem;
 p span{
      color: #FFFFFF;
      /* border: 2px solid red; */
      display: block;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1rem;
 }
}
.square-box-two{
 display: flex;
 justify-content: center;
 align-items: center;
 position: absolute;
 background: #00C5C6;
 height: 42vh;
 width: 20vw;
 min-height: 30vh;
 min-width: 20vw;
 /* text-align: center; */
 /* align-items: center; */
 border-radius: 20rem;
 top: 13rem;
 right: 10rem;
 
 p span{
      color: #000000;
      /* border: 2px solid red; */
      display: block;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1rem;
 }

}
.btn-div{
 position: absolute;
   /* border: 2px solid green; */
   width:16rem ;
  bottom: 0.2rem;
  right: 4rem;
   p{  
       color:#000000 ;
       font-family: 'Poppins';
       font-style: normal;
       font-weight: 600;
       font-size: 1rem;
       /* line-height: 31px; */
   }
   .inner-div{
       display: flex;
       align-items: center;

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
.linktag{
 position: absolute;
       margin-top: 20px;
       display: flex;
       align-items: center;
       bottom: 0.2rem;
       left: 3rem;
      
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
   }
`

export const SecondSection=styled.section`
/* border: 2px solid red; */
position: relative;
height: 100vh;
.second-div{
  top: 6rem;
  left: 8rem;
  position: absolute;
  display: flex;
  flex-direction: column;

  p{
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.1rem;
  }
  h2{
    margin: 0%;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3rem;
/* or 91% */

    letter-spacing: -0.0em;
    .inner-text{
      color: #FFFFFF;
    }
    .snd-inner-div{
      font-size: 2.2rem;
    }
  }
}

.main-div{
   bottom: 1rem;
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
.box-img{
  position: absolute;
  top: 3rem;
  right: 13rem;
  img{
    height: 30vh;
    max-height: 30vh;
    width: auto;
    
  }
}
`

