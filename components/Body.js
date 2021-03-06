import React from 'react'
import { useRecoilState } from 'recoil';
import Domov from './Domov';
import Form from './Form';
import O_mne from './O_mne';
import Projekty from './Projekty';
import {setNavActive} from "../atoms/setNavActive"

function Body() {
    const [navbarActive, setNavbarActive] = useRecoilState(setNavActive)
    return (
        <div className={`bg-[#1e1e1e] lg:ml-[296px] overflow-hidden scrollbar-hide pr-5 ${navbarActive && "h-screen"}`}>
            <div className="codeStyle pl-1">{"<html>"}</div>
            <Domov/>
            <O_mne id={"omne"}/>
            <Projekty id={"projekty"}/>
            <Form id={"kontakt"}/>
            <div className="codeStyle pl-1">{"</html>"}</div>
        </div>
    )
}

export default Body