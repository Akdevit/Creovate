import React from 'react'
import Palattes from "../../Images/palattes.avif"
import { Link } from 'react-router-dom'
const PalettesSection = () => {
    return (
        <>
            <div className='w-full h-auto  mt-6 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-center items-center p-4'>
                {/* text */}
                <div className='w-full h-auto  p-4'>
                    <h1 className='text-2xl font-bold'>Discover Endless Color Palettes</h1>
                    <p className='mt-4 xl:text-xl text-lg'>Explore our extensive collection of over <span className="font-bold bg-green-200">100,000</span> color palettes. Find the perfect color combinations for your design projects, with options for every style and mood. Whether you're looking for vibrant hues, pastel shades, or monochromatic themes, you'll discover endless possibilities to inspire your creativity.</p>
                    <Link to='/color'>
                        <button className=' mt-6 p-2 bg-[#9C3644] text-white rounded-md'>Explore Color Palettes</button>
                    </Link>
                </div>
                {/* image */}
                <div className='w-full h-auto  p-4 flex xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center'>
                    <img className='xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[60%] w-[80%] h-[100%] object-cover rounded-md' src={Palattes} alt='palettas.avif' />
                </div>

            </div>
        </>
    )
}

export default PalettesSection
