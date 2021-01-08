import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    /* background-color: purple; */
    display: flex;
    align-items: center;
    color: black;

    @media screen and (min-width:769px){
        max-width:1140px;
        margin: auto;
    }
`

export const Nav = styled.div`
    width: 100%;
    height: 60px;
    background: #16222A;  /* fallback for old browsers */

    display: flex;
    align-items: center;
    color: black;
    position: fixed;
    left:0;
    top:0;
    z-index:10;
    /* margin-top:60px; */

    & .container{
        width:100%;
        height:100%;
        max-width:1140px;
        margin: auto;
        display: flex;
        justify-content:space-between;
        padding:.97rem;
        /* background-color:green; */
        /* background-color: rgba(147,147,147,.9); */
        align-items: center;
        color: white;
    }

    @media screen and (min-width:769px){
        /* background-color: turquoise; */
    }
`

export const Main = styled.div`
padding:.97rem;
margin-top:60px;
color: white;
background: #16222A;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #16222A, #3A6073);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #16222A, #3A6073); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


& img{
    width: 100%;
}

@media screen and (min-width:1145px){
    width:100%;
    max-width:1140px;
    margin: 60px auto 1rem;
    min-height: calc(100vh - 60px);
    /* background-color: rgba(147,147,147,.9); */
    /* padding:0rem; */
}
`