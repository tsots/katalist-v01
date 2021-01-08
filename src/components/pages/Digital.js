import React from 'react'
import styled from 'styled-components'
import { Main } from '../styles/Index';

const Content = styled.div`
display: grid;
grid-column-gap:30px;
max-width: 768px;
margin: auto;
grid-template: 
"img title" 3rem
"img content" auto / 3fr 9fr;
margin-bottom: 2rem;
box-shadow: 1px 0px 4px #f9f9f9;
border-radius: 7px;

.title{
    grid-area: title;
    margin:0;
}

.text{
    grid-area: content;
}

.image{
grid-area: img;
max-width:100%;
margin:0;
margin: .5rem;
margin-left: 1rem;
border-radius: 7px;
}
`;

const Title = styled.p`
font-size:1.5rem;
/* display: block; */
/* position: relative; */

/* &::after{
    position:absolute;
    content: '';
    width: 20%;
    height: .75rem;
    border-bottom: red dashed .1rem;
    bottom: -13px;
    left:102px;
} */
`;

const Text = styled.p`
line-height: calc(1rem * 1.618);
margin-bottom:.97rem;
`;

const Digital = ({digital}) => {
    return (
        <Main>
        <h1>This is the Digital Page</h1>
        {digital.map((item, index) => <Content key={index}>
            <Title className="title">{item.title}</Title>
        <div className="content">{item.contents.map((sub, index) => 
            <Text className="text" key={index}>{sub.content}</Text>
            )}</div>
        <img className="image" src={item.img} alt={item.title}/>
            </Content>
        )}
        </Main>
    )
}

export default Digital


