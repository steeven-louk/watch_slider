import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar flex justify-between items-center w-full">
      <img
        src={"../assets/watch-logo.png"}
        className="w-[5rem] md:w-[7rem]"
        alt="watch-logo"
      />

      <ul className="hidden md:flex capitalize items-center gap-8 text-sm lg:text-base">
        <li className="hover:text-gray-600 cursor-pointer">home</li>
        <li className="hover:text-gray-600 cursor-pointer">about us</li>
        <li className="hover:text-gray-600 cursor-pointer">gallery</li>
        <li className="hover:text-gray-600 cursor-pointer">e-store</li>
        <li className="hover:text-gray-600 cursor-pointer">contact us</li>
        <li className="hover:text-gray-600 cursor-pointer">
          <IoPerson size={20} />
        </li>
        <li className="hover:text-gray-600 cursor-pointer">
          <IoSearchSharp size={20} />
        </li>
        <li className="hover:text-gray-600 cursor-pointer">
          <LiaShoppingBagSolid size={20} />
        </li>
      </ul>

      <div className="md:hidden flex items-center space-x-4">
        <IoSearchSharp size={20} className="cursor-pointer" />
        <button
          className="hamburger-menu flex flex-col justify-between w-6 h-4"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block w-full h-0.5 bg-black"></span>
          <span className="block w-full h-0.5 bg-black"></span>
          <span className="block w-full h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4">
          <ul className="flex flex-col gap-4 text-sm capitalize">
            <li className="hover:text-gray-600 cursor-pointer">home</li>
            <li className="hover:text-gray-600 cursor-pointer">about us</li>
            <li className="hover:text-gray-600 cursor-pointer">gallery</li>
            <li className="hover:text-gray-600 cursor-pointer">e-store</li>
            <li className="hover:text-gray-600 cursor-pointer">contact us</li>
            <li className="hover:text-gray-600 cursor-pointer">
              <IoPerson size={20} />
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              <IoSearchSharp size={20} />
            </li>
            <li className="hover:text-gray-600 cursor-pointer">
              <LiaShoppingBagSolid size={20} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
