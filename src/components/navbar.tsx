import React from 'react'


export default function Navbar() {
  return (
    <nav className='flex justify-between p-2 w-full bg-red-500 p-4'>
       <img src={"../assets/watch-logo.png"} alt="watch-logo" />
       <ul className='capitalize flex gap-5'>
        <li>home</li>
        <li>about us</li>
        <li>gallery</li>
        <li>e-store</li>
        <li>contact us</li>
        <li>p</li>
        <li>s</li>
        <li>c</li>
       </ul>
    </nav>
  )
}