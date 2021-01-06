import React from 'react';
import { Main } from '../styles/Index';

// import {person} from '../data/homeData'

// const fname = person.fname
// const lname = person.lname
// const image = person.img

const Home = ({fname, lname, img}) => {

    console.log(fname)
    console.log(lname)
    console.log(img)
    
    return (
        <Main>
            <p>{fname}</p>
            <p>{lname}</p>
            <img src={img} alt={fname}/>
            <h1>Hello from home</h1>
        </Main>
    )
}

export default Home


