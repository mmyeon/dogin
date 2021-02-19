import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    body { 
        font-family: "Poppins", sans-serif;
        width:100vw;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align: center;
    }

`;

export default GlobalStyles;
