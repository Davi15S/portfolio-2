import React from 'react'
import Domov from './Domov';
import O_mne from './O_mne';
import Projekty from './Projekty';

function Body() {
    return (
        <div className='bg-[#1e1e1e] lg:ml-[296px] overflow-hidden scrollbar-hide pr-5 ml-2'>
            <Domov />
            <O_mne />
            <Projekty />
        </div>
    )
}

export default Body