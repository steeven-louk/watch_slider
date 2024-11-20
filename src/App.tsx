import './App.scss';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import watchs from './data/watch.json';
import { useState } from 'react';
import Card from './components/card';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [watch] = useState(watchs);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % watch.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + watch.length) % watch.length);
  };

  return (
    <div className="flex container h-full">
      {/* Sidebar */}
      <aside className="flex flex-col bg-white">
        <span className="bg-black p-2">
          <GiHamburgerMenu size={28} className="mx-auto" />
        </span>
        <nav className="vertical-text h-full flex items-center mx-auto">
  <ul className="text-black space-y-4">
    <li className="vertical-text-item">SHOP MENS</li>
    <li className="vertical-text-item">-</li>
    <li className="vertical-text-item">SHOP WOMENS</li>
    <li className="vertical-text-item">-</li>
    <li className="vertical-text-item">GIFT BOXES</li>
    <li className="vertical-text-item">-</li>
    <li className="vertical-text-item">MORE</li>
  </ul>
</nav>
      </aside>

      {/* Main content */}
      <main className="flex flex-col relative w-full">
        <Navbar />

        {/* Slider section */}
        <section className="relative">
          <div
            className="left-bg"
            style={{ backgroundColor: watch[currentIndex]?.bg_color }}
          ></div>

          <article className="article grid place-items-center my-auto justify-center h-full items-center mx-auto">
            <div className="container relative">
              <Card 
                image={watch[currentIndex].image}
                name={watch[currentIndex].name}
                color={watch[currentIndex].color}
                price={parseInt(watch[currentIndex].price)}
                bg_color={watch[currentIndex].bg_color}
                description={watch[currentIndex].description}
              />
              <h2 className="bg-text">CLASSIC SERIES</h2>
            </div>
          </article>
        </section>

        <Footer />

        {/* Slider arrows */}
        <div className="arrow flex flex-col absolute bottom-0 right-0">
          <button
            className="w-[50px] h-[50px] text-center hover:bg-none border-0 outline-none"
            onClick={handleNext}
            style={{ backgroundColor: watch[currentIndex]?.bg_color }}
          >
            <IoIosArrowForward size={26} className="mx-auto font-bold" />
            
          </button>
          <button
            className="w-[50px] h-[50px] bg-black text-center border-0"
            onClick={handlePrev}
          >
            <IoIosArrowBack size={26} className="mx-auto font-bold" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
