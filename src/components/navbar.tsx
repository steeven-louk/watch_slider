import { IoPerson } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";


export default function Navbar() {
  return (
    <nav className='navbar flex justify-between w-full aligns-baseline'>
       <img src={"../assets/watch-logo.png"} className='w-[7rem]' alt="watch-logo" />
       <ul className='capitalize items-baseline flex gap-8 my-auto'>
        <li>home</li>
        <li>about us</li>
        <li>gallery</li>
        <li>e-store</li>
        <li>contact us</li>
        <li><IoPerson/></li>
        <li><IoSearchSharp/></li>
        <li><LiaShoppingBagSolid/></li>
       </ul>
    </nav>
  )
}