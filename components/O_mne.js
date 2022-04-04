import React from 'react'

function O_mne({id}) {
    return (
        <div id={id} className='md:p-4 ml-2 lg:ml-10 mt-20 grid relative'>
            <div className='z-20'>
                <div className='codeStyle'>{"<h2>"}</div>
                <h2 className='text-white font-ubuntu font-semibold text-5xl ml-10'>O mně</h2>
                <div className='codeStyle'>{"<h2>"}</div>
                <div className='codeStyle'>{"<p>"}</div>
                <div className='lg:ml-10 ml-5 text-white max-w-3xl'>Dovolte mi abych se Vám představil. Jmenuji se Nguyen Viet Thanh, kamarádi a známí mi ale říkají David. Momentálně jsem studentem třetího ročníku na Smíchovské střední průmyslové škole a gymnázium. Webami se zabývám už 4 roky a moje motivace se učit dál nové věci je nehynoucí.</div>
                <div className='codeStyle'>{"</p>"}</div>
                <div className='codeStyle'>{"<section>"}</div>
                <div>
                    <ProgressBar text={"React.js"} color={"bg-green-400"} progression="w-[65%]"/>
                    <ProgressBar text={"Node.js"} color={"bg-red-400"} progression="w-[20%]" />
                    <ProgressBar text={"Front-End"} color={"bg-blue-400"} progression="w-[85%]" />
                    <ProgressBar text={"Back-End"} color={"bg-yellow-400"} progression="w-[35%]" />
                </div>
                <div className='codeStyle'>{"</section>"}</div>
            </div>
            <div className='text-[200px] lg:text-[350px] z-10 absolute lg:-top-32 -right-[50px] whitespace-nowrap font-semibold text-[#212122] select-none'>About</div>
        </div>
    )
}

function ProgressBar({ text, color, progression }) {
    return (
        <div className='ml-5 lg:ml-10 space-y-2 py-2'>
            <div className='text-white font-semibold text-lg'>{text}</div>
            <div className=" bg-[#333333] max-w-[600px] h-1 rounded-full relative">
                <div className={`${progression} ${color} h-full rounded-full`}></div>
            </div>
        </div>
    )
}

export default O_mne