// import { useState } from 'react'

import './App.scss'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex container h-full'>
     <aside className='flex flex-col bg-white'>
      <span className='bg-black p-2'><GiHamburgerMenu size={28} className='mx-auto'/></span>
      <nav className='vertical-text h-full'>
      <ul className='text-black'>
      <li>SHIOP MENS</li>
      <li>-</li>
      <li>SHOP WOMENS</li>
      <li>-</li>
      <li>GIFT BOXES</li>
      <li>-</li>
      <li>MORE</li>      
      </ul>
      </nav>
     </aside>
     <main className='flex flex-col relative '>
      <Navbar/>
      <section className='relative'>
        <div className='bg-green-500 left-bg'></div>

        <article className="article grid place-items-center	my-auto justify-center h-full items-center mx-auto">
          <div className="container relative">
            <div className="card flex w-[60rem]">
              <div className="left">
              <img src="./assets/watch/watch-1.png" className='w-[80rem]' alt="watch" />
              </div>
              <div className="right my-auto">
              <div className="card-head">
                <div className="card-title ">
                  <p className="uppercase font-bold text-md mb-3">classic series-45mm</p>
                  <h1 className='font-bold text-2xl'>BLACK/WHITE</h1>
                </div>
              </div>
              <div className="card-content my-5">
                <div className='my-4 flex items-baseline'>
                  <h1 className='text-2xl font-bold'>${Math.round(100).toFixed(2)} <span className='uppercase text-sm'>usd</span></h1>
                  <div className='font-bold items-center inline-flex ml-auto gap-2'>
                    <div className='starts inline-flex gap-2'>
                    <FaStar className='text-red-500'/>
                    <FaStar className='text-red-500'/>
                    <FaStar className='text-red-500'/>
                    <FaStar className='text-red-500'/>
                    <FaStar className='text-red-500'/>
                      </div>
                    +1K reviews
                  </div>
                </div>
                <div className="card-description text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit omnis nemo sapiente voluptate nostrum dolorum cumque autem, obcaecati voluptates.
                </div>
              </div>
              <div className="card-footer  flex gap-4">
                <button className='border p-2 uppercase'>details</button>
                <button className='bg-red-500 p-2 uppercase'>add to cart</button>
              </div>
              </div>
            </div>
            <h2 className='bg-text'>CLASSIC SERIES</h2>
          </div>
        </article>
      </section>
      <Footer/>
      <div className="arrow flex flex-col absolute bottom-0 right-0">
        <button className='w-[50px] h-[50px] bg-red-500 text-center '><IoIosArrowBack size={26} className='mx-auto justify-center font-bold'/></button>
        <button className='w-[50px] h-[50px] bg-black'><IoIosArrowForward size={26} className='mx-auto justify-center font-bold'/></button>
      </div>
     </main>
       
    </div>
  )
}

export default App
