import React from 'react'
import TypoImg from "../../Images/typo.avif"
import { Link } from 'react-router-dom'
const TypographySection = () => {
  return (
    <>
      <div className='w-full h-auto  mt-6 flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center p-4'>
        {/* image */}
        <div className='w-full h-auto  p-4 flex xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center'>
          <img className='xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[60%] w-[80%] h-[100%] object-cover rounded-md' src={TypoImg} alt='palettas.avif' />
        </div>
        {/* text */}
        <div className='w-full h-auto  p-4'>
          <h1 className='text-2xl font-bold'>Diverse Typography</h1>
          <p className='mt-4 xl:text-xl text-lg'>Discover a variety of fonts and typographic styles to enhance your text elements. Experiment with different fonts to find the perfect match for your project. Our Typography tool provides a vast selection of fonts and typographic combinations, allowing you to create text that is visually appealing and perfectly suited to your design's tone and style.</p>
          <Link to='/TypographyGenerator'>
            <button className=' mt-6 p-2 bg-[#016737] text-white rounded-md shadow-xl'>Generate Typography</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default TypographySection
