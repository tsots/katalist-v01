import React from 'react';
import { Main } from '../styles/Index';

import {person} from '../data/homeData'


const Home = () => {

console.log(person)
    
    return (
        <Main>
            {/* <p>{fname}</p>
            <p>{lname}</p>
            <img src={img} alt={fname}/> */}
            <h1>Hello from home</h1>
        </Main>
    )
}

export default Home


