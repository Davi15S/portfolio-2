import React from 'react'
import Lottie from 'react-lottie';
import computer_animaion from "../lotties/computer-animation.json";
import Head from 'next/head'

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
                    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
                </style>
            </Head>
            <div className='h-[800px] p-4'>
                <div className="codeStyle">{"<html>"}</div>
                <div className='grid lg:grid-cols-2 h-full items-center grid-cols-1'>
                    {/* Domov */}
                    <div className=''>
                        <div className='ml-10'>
                            <div className='space-y-1'>
                                <div className="codeStyle">{"<h1>"}</div>
                                <div className='text-[#f3f3f3] font-nunito-sans font-semibold space-y-2 lg:space-y-5 ml-10'>
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
                    <div className="mx-auto">
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Domov