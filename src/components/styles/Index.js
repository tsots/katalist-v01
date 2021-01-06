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
    /* background-color: yellow; */
    background-color: rgba(147,147,147,.9);
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
        padding:.97rem;
        /* background-color:green; */
        /* background-color: rgba(147,147,147,.9); */
        align-items: center;
    }

    @media screen and (min-width:769px){
        /* background-color: turquoise; */
    }
`

export const Main = styled.div`
padding:.97rem;
margin-top:60px;
color: white;

& img{
    width: 20%;
}

@media screen and (min-width:1145px){
    width:100%;
    max-width:1140px;
    min-height: calc(100vh - 60px);
    background-color: rgba(147,147,147,.9);
    /* padding:0rem; */
}
`