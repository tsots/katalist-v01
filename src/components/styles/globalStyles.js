import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    font-family: 'Montserrat', sans-serif;
}
body{
    background-color: rgba(147,147,147,.6);
    color: white;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`
export default GlobalStyle;