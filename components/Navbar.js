import React, { useEffect, useState } from 'react'
import { BookmarkIcon, ChevronDownIcon, ShareIcon } from "@heroicons/react/outline"
import js from "../media/js.svg"
import css from "../media/css.svg"
import react from "../media/react.svg"
import html from "../media/html.svg"
import Image from 'next/image'
import { Link, animateScroll as scroll } from "react-scroll"

function Navbar() {
    const [active, setActive] = useState([true, false, false, false])

    const handleClick = e => {
        const id = e.target.id
        const preActive = [false, false, false, false]
        preActive[id] = true;
        setActive(preActive)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 500) {
                setActive([true, false, false, false])
            }
            if (window.scrollY >= 500 && window.scrollY < 1300) {
                setActive([false, true, false, false])
            }
            if (window.scrollY >= 1300 && window.scrollY < 2500) {
                setActive([false, false, true, false])
            }
            if (window.scrollY >= 2500) {
                setActive([false, false, false, true])
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='fixed lg:flex z-50 hidden'>
            <div className='lg:flex'>
                <div className='h-screen w-14 bg-[#333333] text-[#7c7e7e] flex-col space-y-4'>
                    <div className='cursor-pointer text-white py-2 navbar-icon relative'>
                        <BookmarkIcon className='h-8 w-full' />
                    </div>
                    <ShareIcon className='h-8 mx-auto cursor-pointer hover:text-white' />
                </div>

                <div className="h-screen w-60 bg-[#252526]">
                    <div className='flex text-white font-semibold items-center space-x-1 p-2'>
                        <ChevronDownIcon className='h-5' />
                        <p className='text-xl'>Portfolio</p>
                    </div>
                    <Card img={js} text="Domov.js" id={0} style={active[0] && "bg-[#37373d] font-semibold"} handleClick={handleClick} name="domov"/>
                    <Card img={css} text="O mně.css" id={1} style={active[1] && "bg-[#37373d] font-semibold"} handleClick={handleClick} textColor="text-[#ffbb4b]" name="omne"/>
                    <Card img={react} text="Projekty.jsx" id={2} style={active[2] && "bg-[#37373d] font-semibold"} handleClick={handleClick} textColor="text-green-300" name="projekty"/>
                    <Card img={html} text="Kontakt.html" id={3} style={active[3] && "bg-[#37373d] font-semibold"} handleClick={handleClick} textColor="text-[#ffbb4b]" name="kontakt"/>
                </div>
            </div>
        </div>
    )
}

function Card({ img, text, id, handleClick, style, textColor, name }) {
    return (
        <Link to={name} smooth={true}>
            <div onClick={handleClick} id={id} className={`text-white flex items-center space-x-2 py-1 pl-7 cursor-pointer hover:bg-[#37373d] transition-all duration-150 ease-in ${style} ${textColor}`}>
                <Image id={id} src={img} width={20} height={20} />
                <p id={id} className='text-lg'>{text}</p>
            </div>
        </Link>
    )
}

export default Navbar