import React from 'react'
import styled from 'styled-components'
import { Main } from '../styles/Index';

const Content = styled.div`
display: grid;
margin: 1rem 0 4rem;
padding: 1rem 0 1rem;
grid-template-columns: 2fr 8fr;
/* grid-template-rows: 30px auto auto; */
grid-auto-rows: 30px min-content;
/* background-color: beige; */
height: 240px;
border-bottom: .05rem solid rgba(255,255,255,.1);

&:nth-of-type(even){
    height: 250px;
}

p:nth-of-type(1){
    grid-column: 2/ -1;
    order:2;
    display: flex;
    align-items:center;
}
p:nth-of-type(2){
    /* color: red; */
    grid-column: 2/ -1;
    order:3;
    height:auto;
}
p:nth-of-type(3){
/* color: yellow; */
order:4;
grid-column: 2/ -1;
}

img{
    grid-column: 1/ 2;
    order:1;
    object-fit: cover;
}
`;

const Title = styled.p`
/* line-height: calc(1rem * 1.618); */
/* margin-top:1.3rem; */
margin-bottom:1.5rem;
padding-left: 100px;
padding-right: 100px;
font-size:1.75rem;
/* display: block; */
position: relative;

&::after{
    position:absolute;
    content: '';
    width: 20%;
    height: .75rem;
    border-bottom: red dashed .1rem;
    bottom: -13px;
    left:102px;
}
`;

const Text = styled.p`
line-height: calc(1rem * 1.618);
margin-bottom:.97rem;
padding-left: 100px;
padding-right: 100px;
`;

const Digital = ({digital}) => {
    return (
        <Main>
        <h1>This is the Digital Page</h1>
        {digital.map((item, index) => <Content key={index}>
            <Title className="title">{item.title}</Title>
        {item.contents.map((sub, index) => 
            <Text className="text" key={index}>{sub.content}</Text>
            )}
        <img className="image" src={item.img} alt={item.title}/>
            </Content>
        )}
        </Main>
    )
}

export default Digital
