import React, { useState } from 'react'

function NavbarMobile() {
  const [hamburgerActive, sethamburgerActive] = useState(false)

  return (
    <div className='absolute w-full z-10'>
      <div className='z-50'>
        <div onClick={() => sethamburgerActive(!hamburgerActive)} className={hamburgerActive ? "hamburger-menu open" : "hamburger-menu lg:hidden"}>
          <div className='hamburger-menu-btn'></div>
        </div>
      </div>

      {hamburgerActive && (
        <div className='fixed w-full h-full bg-black -z-10'>

        </div>
      )}
    </div>
  )
}

export default NavbarMobile