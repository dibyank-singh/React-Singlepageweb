import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
/* body{
    height: 100vh;
    width: 100vw;
    background-color: #D9453D;
} */

html {
    font-size: 10px;
    /* or 62.5% */
    overflow-x:hidden;

}

@media screen and (min-width: 280px) and (max-width:1080px){
    margin: 0rem;
}

h1{
    color:#FFFFFF
    /* font-size:6rem; */
    /* font-weight:900; */
}

a{
 text-decoration: node;

}

li{
list-style:none;

}


`;