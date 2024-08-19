import React from 'react'
import ShadowImg from "../../Images/shadow.avif"
const ShadowSection = () => {
    return (
        <>
            <div className='w-full h-auto  mt-6 flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center p-4'>
                {/* image */}
                <div className='w-full h-auto  p-4 flex xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center'>
                    <img className='xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[60%] w-[80%] h-[100%] object-cover rounded-md' src={ShadowImg} alt='palettas.avif' />
                </div>
                {/* text */}
                <div className='w-full h-auto  p-4'>
                    <h1 className='text-2xl font-bold'> generate Realistic Shadows</h1>
                    <p className='mt-4 xl:text-xl text-lg'>Generate realistic and customizable shadows for your UI elements. Adjust parameters to achieve the perfect shadow effect for your designs. Our Shadow Generator helps you create depth and realism in your UI elements, such as buttons and cards. Fine-tune the shadow's blur, spread, and color to match your design aesthetic perfectly.</p>
                    <button className=' mt-6 p-2 bg-white text-black rounded-md shadow-xl'>Generate Shadows</button>
                </div>


            </div>
        </>
    )
}

export default ShadowSection
