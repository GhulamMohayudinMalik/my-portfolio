import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='container flex justify-around'>
      <div>
        <Image
        src={"/name-logo-3.png"}
        width={70}
        height={70}
        alt='Logo'
        />
      </div>

      <ul className='flex gap-6 items-center justify-center'>
        <li>Home</li>
        <li>About</li>
        <li>Tools</li>
        <li>Certifications</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
