import React from 'react'
import Lottie from 'react-lottie';
import computer_animaion from "../lotties/computer-animation.json";
import Head from 'next/head'
import { ArrowDownIcon } from '@heroicons/react/outline';

function Domov() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: computer_animaion,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,200&display=swap');
                </style>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
                </style>
            </Head>
            <div className='h-screen p-1 md:p-4'>
                <div className="codeStyle">{"<html>"}</div>
                <div className='grid lg:grid-cols-2 h-[90%] items-center grid-cols-1'>
                    {/* Domov */}
                    <div>
                        <div className='ml-2 lg:ml-10'>
                            <div className='space-y-1'>
                                <div className="codeStyle">{"<h1>"}</div>
                                <div className='text-[#f3f3f3] font-ubuntu font-semibold space-y-2 lg:space-y-5 ml-10'>
                                    <h1 className='font-semibold text-4xl md:text-6xl'>
                                        Ahoj, <span class="wave">👋</span>
                                    </h1>
                                    <h2 className='text-4xl md:text-6xl'>
                                        jmenuji se David
                                    </h2>
                                </div>
                                <div className="codeStyle">{"</h1>"}</div>
                            </div>
                            <div className='text-white text-opacity-60'>
                                <div className="codeStyle">{"<p>"}</div>
                                <div className='ml-10 text-xl'>Front-End | Back-End - Developer</div>
                                <div className="codeStyle">{"</p>"}</div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex hidden pointer-events-none">
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
                <div className='bottom-6 lg:bottom-0 relative ml-2'>
                    <ArrowDownIcon className='h-10 bg-[#595959] p-2 rounded-full animate-bounce text-gray-800 shadow-lg border border-gray-300' />
                </div>
            </div>
        </div>
    )
}

export default Domov