import Head from 'next/head'
import Image from 'next/image'
import Body from '../components/Body'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'

export default function Home() {
  return (
    <div>
      <NavbarMobile />

      <section className='flex'>
          {/* Navbar */}
          <Navbar />

          {/* Body */}
          <Body />
      </section>
    </div>
  )
}
