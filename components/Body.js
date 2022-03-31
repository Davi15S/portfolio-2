import React from 'react'
import Domov from './Domov';
import O_mne from './O_mne';

function Body() {
    return (
        <div className='bg-[#1e1e1e] w-full h-screen overflow-y-scroll overflow-x-hidden z-0'>
            <Domov />
            <O_mne />
        </div>
    )
}

export default Body