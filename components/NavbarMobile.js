import React, { useState } from 'react'

function NavbarMobile() {
  const [hamburgerActive, sethamburgerActive] = useState(false)

  return (
    <div className='absolute w-full z-50 lg:hidden'>
      <div className=''>
        <div onClick={() => sethamburgerActive(!hamburgerActive)} className={hamburgerActive ? "hamburger-menu open" : "hamburger-menu lg:hidden"}>
          <div className='hamburger-menu-btn'></div>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobile