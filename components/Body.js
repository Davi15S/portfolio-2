import Head from 'next/head'
import React from 'react'
import Lottie from 'react-lottie';
import computer_animaion from "../lotties/computer-animation.json";
import Domov from './Domov';

function Body() {
    return (
        <div className='bg-[#1e1e1e] w-full max-h-screen overflow-y-scroll'>
            <Domov />
        </div>
    )
}

export default Body