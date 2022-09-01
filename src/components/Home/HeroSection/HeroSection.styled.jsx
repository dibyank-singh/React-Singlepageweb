import styled from "styled-components"
import Mobilepic from "../../../Assests/Mobilepic.png"



export const MainSection=styled.section`
background: linear-gradient(173.59deg, #D9453D 33.55%, #4344F8 97.93%);
`

export const Section = styled.section`
height: 40vh;
width: 100%;
position: relative;
 

    .first-sec{
       position: absolute;
       left: 40%;
       /* right: 0%; */
       /* transform: translate(-50%,0%); */

    }
    .first-para{
        color: #FFFFFF;
        
       
    }
    .first-heading{
        margin-top: 0rem; 
        font-weight: 700;
        font-size:2.4rem;
        color: #FFFFFF;
        line-height: 38px;
        

   .Inner-heading{
    color:#000000;
    font-family: 'Space Mono', monospace;
   }
}

@media screen and (min-width: 280px) and (max-width:1080px){
    
    height: 20vh;
    .first-sec{
       position: absolute;
    left: 40%;
       /* right: 0%; */
       /* transform: translate(-50%,0%); */

    }
    .first-para{
        
        /* position: absolute; */
        /* border: 2px solid green;  */
        color: #FFFFFF;
        font-size: 0.6rem;
        
       
    }
    .first-heading{
        margin-top: -0.4rem;
        font-style: normal;
        font-weight: 700;
        font-size:1rem;
        line-height:1rem;
        
}
    }

`
 export const SectionTwo = styled.section`
    
    box-sizing: border-box;

    position: relative;
    height: 100vh;
    /* width: 100%; */
    /* border: 2px solid green;  */
    /* position: absolute; */
    margin-top: -2rem;
    .img-text{
        position: relative;
        margin: 0 8rem;
        img{
            display: inline;
           position: absolute;
           height: 100vh;
           width: 100%;
           background-repeat: no-repeat;
           background-size: cover; 
           background-position:center;
        }

}
.text-content{
    position: absolute;
    top: 11rem;
    left: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    p{
     font-family: 'Poppins';
     color: #FFFFFF;
     font-style: normal;
     font-weight: 400;
     font-size: 20px;     
     line-height: 31px;
     margin-bottom: 0%;
    }
    img{
        padding: 5px 0px;

    }
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
}

.right-div{
    position: absolute;
    /* border: 2px solid green; */
    width:16rem ;
    top: 8rem;
    right: 3rem;
    p{  
        color:#000000 ;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
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

@media screen and (min-width: 280px) and (max-width:1080px){
    margin-bottom: 0%;

    .img-text{
        position: relative;
        margin: 0 2rem;
        img{ 
           height: 30vh;
        }
}


.text-content{
    position: absolute;
    top: 1.4rem;
    left: 1rem;
    p{
     font-size: 0.6rem;     
     line-height: 0.4rem;
     margin-bottom: 0.4rem;
    }
    img{
        width: 15vw;
        height: auto;
        padding: 2px 0px;

    }
    .linktag{
        margin-top: 5px;
        width: 3rem;
        display: flex;
        align-items: center;
       
    }
    a{
        font-size: 12px;
        line-height: 15px;   
    }
  img{
    margin: 2px 0px 0px 2px;

  }
}


.right-div{
    position: absolute;
    /* border: 2px solid green; */
    width:13rem ;
    top: 12rem;
    right: 3rem;
    p{  
        color:#000000 ;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 0.8rem;
    
        /* line-height: 31px; */
    }
    .inner-div{
        display: flex;
        align-items: center;

        img{
            width: 2rem;
        }
       
        button{
            box-shadow: 6px 10px 6px 0px #000000 ;
            padding: 0.5rem 0.5rem  ;
            span{
              font-family: 'Space Mono';
              font-style: normal;
              font-weight: 700;
              font-size: 0.8rem;
              line-height: 1rem;
            }
        }
    }


}

}



`

// Third Section
 export const SectionThird = styled.section`
/* border: 2px solid red; */
height: 90vh;
/* min-height: 100vh; */
min-width: 100%;
position: relative;


  
.text-filed{
    position: absolute;
    left: 8rem;

    p{
        padding-top: 0rem;
        color: #FFFFFF;
        /* color: black; */
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.1rem;
    }
    h2 span {
       top: 6rem;
       left: 6rem;
            /* border: 2px solid black;  */
        display: block;
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 3.4rem;
        line-height:3.4rem;
        /* or 91% */
        letter-spacing: -0.02em;
        white-space: nowrap;
        overflow: hidden;
    }
    .text-color{
        color: #FFFFFF;
    }

}

.bgimg{
    /* border: 2px solid black; */
    position: absolute;
    background-image: url(${Mobilepic});
    background-repeat: no-repeat;
        background-size: cover;
        /* background-position:center; */
        /* object-fit: cover; */
        height:75vh;
        min-height: 70vh;
        width:40vw;
        min-width: 42vw;
         /* max-width: 100%; */
    /* right:rem; */
    left: 28rem;
    bottom: 0%;
}


.right-div{
    position: absolute;
    /* border: 2px solid green; */
    width:16rem ;
   bottom: 3rem;
   right: 4rem;
    p{  
        color:#000000 ;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
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
 
@media screen and (min-width: 280px) and (max-width:1080px){

margin-top: -25rem;
.text-filed{
    
    left: 2rem;

    p{
        font-size: 0.6rem;
        line-height: 0.6rem;
    }
    h2 span {
       top: 6rem;
       left: 2rem;
            /* border: 2px solid black;  */
        font-size: 1rem;
        line-height:1rem;
        /* overflow: hidden; */
    }
   

}
.bgimg{
        height:32vh;
        min-height: 32vh;
        width:30vw;
        min-width: 30vw;
        /* right: 10rem; */
        left: 30%;
        /* bottom: 0%; */
        top: 0%;
}
}
 
`