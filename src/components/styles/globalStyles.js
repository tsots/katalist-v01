import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    font-family: 'Montserrat', sans-serif;
}
body{
    background-color: #3A6073; // rgba(147,147,147,.6)
    color: white;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`
export default GlobalStyle;

// #0e1e25 rgb(14,30,37)