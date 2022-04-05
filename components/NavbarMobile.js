import { BookmarkIcon, ShareIcon } from '@heroicons/react/outline'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import js from "../media/js.svg"
import css from "../media/css.svg"
import react from "../media/react.svg"
import html from "../media/html.svg"
import { Link } from 'react-scroll'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { setNavActive } from "../atoms/setNavActive"

function NavbarMobile() {
  const [hamburgerActive, sethamburgerActive] = useRecoilState(setNavActive)
  const [active, setActive] = useState([true, false, false, false])

  const handleClick = e => {
    const id = e.target.id
    const preActive = [false, false, false, false]
    preActive[id] = true;
    setActive(preActive)
    sethamburgerActive(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 500) {
        setActive([true, false, false, false])
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='absolute w-full z-10'>
      <div className='z-50'>
        <div onClick={() => sethamburgerActive(!hamburgerActive)} className={hamburgerActive ? "hamburger-menu open" : "hamburger-menu lg:hidden"}>
          <div className='hamburger-menu-btn'></div>
        </div>
      </div>

      <AnimatePresence>
        {hamburgerActive && (
          <motion.div
            key="navbarMobile"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", transition: { duration: 0.5 } }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className='fixed w-full h-full -z-40'>
            <div className='h-full flex'>
              <div className='text-[#7c7e7e] bg-[#333333] h-full w-14 space-y-4'>
                <div className='cursor-pointer text-white py-2 navbar-icon relative'>
                  <BookmarkIcon className='h-8 w-full' />
                </div>
                <a href="https://github.com/Davi15S" target="_blank">
                  <ShareIcon className='h-8 mx-auto cursor-pointer hover:text-white my-4' />
                </a>
              </div>
              <div className='bg-[#252526] w-full h-full'>
                <h1 className='text-3xl font-semibold text-center text-white my-4'>Portfolio</h1>
                <div>
                  <Card img={js} text="Domov.js" id={0} style={active[0] && "bg-[#37373d] font-semibold"} handleClick={handleClick} name="domov" offset={-100} />
                  <Card img={css} text="O mně.css" id={1} style={active[1] && "bg-[#37373d] font-semibold"} handleClick={handleClick} textColor="text-[#ffbb4b]" name="omne" />
                  <Card img={react} text="Projekty.jsx" id={2} style={active[2] && "bg-[#37373d] font-semibold"} handleClick={handleClick} textColor="text-green-300" name="projekty" />
                  <Card img={html} text="Kontakt.html" id={3} style={active[3] && "bg-[#37373d] font-semibold"} handleClick={handleClick} textColor="text-[#ffbb4b]" name="kontakt" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Card({ img, text, id, handleClick, style, textColor, name, offset }) {
  return (
    <Link to={name} smooth={true} offset={offset}>
      <div onClick={handleClick} id={id} className={`text-white flex items-center space-x-2 py-1 pl-7 cursor-pointer hover:bg-[#37373d] transition-all duration-150 ease-in ${style} ${textColor}`}>
        <Image id={id} src={img} width={20} height={20} />
        <p id={id} className='text-lg'>{text}</p>
      </div>
    </Link>
  )
}

export default NavbarMobile