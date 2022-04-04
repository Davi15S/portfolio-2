import React, { useState } from 'react'
import emailjs from "emailjs-com"

function Form({ id }) {
    const [sentEmail, setSentEmail] = useState(false)
    const sendEmail = (e) => {

        if (!sentEmail) {
            e.preventDefault();

            emailjs.sendForm('service_6wc3i04', 'template_wr5pvd4', e.target, 'wdPmASd-pJ466PxTc')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }

        setSentEmail(true);
    }
    return (
        <div id={id} className='ml-2 lg:ml-10 md:p-4 my-40 grid grid-cols-1 xl:grid-cols-2 gap-x-10'>
            <div>
                <div className='codeStyle'>{"<h4>"}</div>
                <div className='text-white font-ubuntu font-semibold text-5xl ml-10'>Kontaktujte mě</div>
                <div className='codeStyle'>{"</h4>"}</div>
                <div className='codeStyle'>{"<p>"}</div>
                <p className='lg:ml-10 ml-5 text-white max-w-3xl'>Jakékoliv připomínky mi prosím napište pomocí tohoto formuláře. Jsem otevřený všem nápadům a Váš komentář s radostí přivítám.</p>
                <div className='codeStyle'>{"</p>"}</div>
                <div className='codeStyle'>{"<form>"}</div>
                <form onSubmit={sendEmail} className='lg:ml-10 ml-5 text-white text-opacity-60 space-y-4 m-4'>
                    <div className='flex flex-col 2xl:flex-row gap-y-4 gap-x-4'>
                        <input name="name" type="text" placeholder='Jméno' required className="outline-none bg-[#333333] p-3 flex-grow" />
                        <input name="email" type="email" placeholder='Email' required className="outline-none bg-[#333333] p-3 flex-grow" />
                    </div>
                    <div className='flex'>
                        <textarea name='message' placeholder='Zpráva' type="text" required className='flex-grow bg-[#333333] h-40 outline-none p-3 resize-none scrollbar-hide' />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button disabled={sentEmail} className='bg-[#333333] py-3 px-16 font-semibold border-2 border-[#333333] transition-all duration-300 cursor-pointer hover:bg-opacity-0 hover:border-white text-white'>Submit</button>
                        {sentEmail && (
                            <div className='text-white'>Zpráva byla úspěšně odeslána!</div>
                        )}
                    </div>
                </form>
                <div className='codeStyle'>{"</form>"}</div>
            </div>
        </div>
    )
}

export default Form