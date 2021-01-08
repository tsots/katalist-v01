import React from 'react'
import styled from 'styled-components'
import { Main } from '../styles/Index';

const Title = styled.p`
/* line-height: calc(1rem * 1.618); */
margin-top:1.3rem;
margin-bottom:1rem;
`;

const Text = styled.p`
line-height: calc(1rem * 1.618);
margin-bottom:1.5rem;
`;

const Design = ({identity}) => {
    return (
        <Main>
        <h1>This is the Design Page</h1>
        {identity.map((item, index) => <div key={index}>
            <Title>{item.title}</Title>
        {item.contents.map((sub, index) => 
            <Text key={index}>{sub.content}</Text>
            )}
        <img src={item.img} alt={item.title}/>
            </div>
        )}
        </Main>
    )
}

export default Design
