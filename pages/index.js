import Head from 'next/head'
import Image from 'next/image'
import Body from '../components/Body'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <section className='flex'>
          {/* Navbar */}
          <Navbar />

          {/* Body */}
          <Body />
      </section>
    </div>
  )
}
