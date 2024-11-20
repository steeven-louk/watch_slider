// import { useState } from 'react'

import './App.scss'
import Navbar from './components/navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex container h-full'>
     <aside className='border-r-1 border-white border p-3'>
      dd
     </aside>
     <main className='flex flex-col '>
      <Navbar/>
      <section className='relative'>
        <div className='bg-green-500 left-bg'></div>

        <div className="article grid place-items-center	my-auto justify-center h-full items-center mx-auto">
          <div className="container">
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
                  <div className='font-bold inline-flex ml-auto gap-2'>
                    <span className='starts'>
                     5
                      </span>
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
          </div>
        </div>
      </section>
     </main>
       
    </div>
  )
}

export default App
