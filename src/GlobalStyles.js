import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    body { 
        font-family: 'Sunflower', sans-serif;
        width:100vw;
        height:100vh;
        display:flex;
        text-align: center;
        font-weight: bold;
    }

    a{
        color:black;
        text-decoration:none;
        cursor: pointer;
    }

`;

export default GlobalStyles;
