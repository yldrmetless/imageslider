import './App.css'
import { imageData } from './imageData'
import React, { useState } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa6'

function App() {

  const[index, setIndex] = useState(0)


  const prevSlide = () => {
    const firstSlide = index === 0;
    const prevIndex = firstSlide ? imageData.length - 1 : index - 1

    setIndex(prevIndex)
  }

  const nextSlide = () => {
    const lastSlide = index === imageData.length - 1;
    const nextIndex = lastSlide ? 0 : index + 1

    setIndex(nextIndex)
  }

  return (
    <div className='max-w-full w-full h-screen flex justify-center items-center px-16 relative bg-gray-100'>
      <div style={{backgroundImage:`url(${imageData[index].image})`}} className='w-[1280px] h-[768px] rounded-2xl bg-center bg-cover duration-500 shadow-2xl<'></div>

      <div className='absolute top-50% -translate-x-0 translate-y-[-50%] left-40 text-2xl rounded-full p-2 bg-black/30 hover:bg-black/50 transition-all duration-200 text-white cursor-pointer'>
        <FaChevronLeft className='text-3xl' onClick={prevSlide}/>
      </div>

      <div className='absolute top-50% -translate-x-0 translate-y-[-50%] right-40 text-2xl rounded-full p-2 bg-black/30 hover:bg-black/50 transition-all duration-200 text-white cursor-pointer'>
        <FaChevronRight className='text-3xl' onClick={nextSlide}/>
      </div>
    </div>
  )
}

export default App
