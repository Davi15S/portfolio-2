import React, { useEffect, useState } from 'react'
import Image from "next/image"
import amazon from "../media/amazon-clone.png"
import { AnimatePresence, motion } from "framer-motion"
import netflix from "../media/netflix-clone.png"
import qarea from "../media/qarea-clone.png"
import airbnb from "../media/airbnb-clone.png"
import Aos from "aos";
import "aos/dist/aos.css";

function Projekty({id}) {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })
    return (
        <div data-aos="fade-in" id={id} className='ml-2 lg:ml-10 md:p-4 mt-40 relative'>
            <div className='z-20 relative'>
                <div className='codeStyle'>{"<h3>"}</div>
                <h3 className='text-white font-ubuntu font-semibold text-4xl lg:text-5xl lg:ml-10 ml-5'>Projekty <span className='codeStyle text-sm font-light'>{"</h3>"}</span></h3>
                <div className='codeStyle'>{"<p>"}</div>
                <div className='lg:ml-10 ml-5 text-white max-w-3xl'>V projektech toho ještě moc nemám, ale doufám, že se moje kolekce ještě zaplní.</div>
                <div className='codeStyle'>{"</p>"}</div>
                <div className='codeStyle'>{"<section>"}</div>
                <div className='lg:ml-10 ml-5 grid grid-cols-1 m-4 gap-10 md:grid-cols-2 2xl:grid-cols-3 justify-items-center'>
                    <Card img={amazon} text={"Amazon Clone"} link="https://amazon-copy.vercel.app/" />
                    <Card img={netflix} text={"Netflix Clone"} link="https://netflix-copy-f4436.web.app/" />
                    <Card img={qarea} text={"Qarea Clone"} link="https://qarea-clone.vercel.app/" />
                    <Card img={airbnb} text={"Qarea Clone - In Progress"} link="https://airbnb-clone-henna.vercel.app/" />
                </div>
                <div className='codeStyle'>{"</section>"}</div>
            </div>
            <div className='text-[200px] lg:text-[350px] z-10 absolute top-0 lg:-top-20 -right-[200px] whitespace-nowrap font-semibold text-[#212122] select-none'>Projects</div>
        </div>
    )
}

function Card({ img, text, link }) {
    const [toggleHover, setToggleHover] = useState(false)

    return (
        <div className='max-w-[400px] space-y-4'>
            <motion.a
                href={link}
                target="_blank"
                onHoverStart={() => setToggleHover(!toggleHover)}
                onHoverEnd={() => setToggleHover(!toggleHover)}
                className='max-w-[400px] max-h-[230px] overflow-hidden rounded-lg cursor-pointer relative group flex justify-center items-center'>
                <Image src={img} objectFit="cover" className='group-hover:scale-105 transition-all duration-500 group-hover:opacity-30' />
                <AnimatePresence>
                    {toggleHover && (
                        <motion.div
                            key={"projectCardTap"}
                            initial={{ scale: 0 }}
                            animate={{ scale: "100%" }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className='absolute text-white bg-[#4c4c4c] p-4 rounded-full font-semibold w-14 h-14 flex items-center justify-center'>TAP</motion.div>
                    )}
                </AnimatePresence>
            </motion.a>
            <div className='text-white font-semibold font-ubuntu text-2xl'>{text}</div>
        </div>
    )
}

export default Projekty