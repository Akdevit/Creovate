import React from 'react'
import GlassImg from "../../Images/glass.avif"
import { Link } from 'react-router-dom'
const GlassSection = () => {
    return (
        <>
            <div className='w-full h-auto  mt-6 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-center items-center p-4'>
                {/* text */}
                <div className='w-full h-auto  p-4'>
                    <h1 className='text-2xl font-bold'>generate Elegant Glass UI</h1>
                    <p className='mt-4 xl:text-xl text-lg'>Explore the elegant and modern Glass UI elements. Apply frosted glass effects to your designs for a sleek and sophisticated look. Our Glass UI tool lets you create beautiful glassmorphism effects that bring a touch of elegance and modernity to your projects. Customize the transparency, blur, and background to achieve the desired glass effect.</p>
                    <Link to='/glass'>
                        <button className=' mt-6 p-2 bg-[#3B8DDB] text-white rounded-md'>Generate Glass UI</button>
                    </Link>
                </div>
                {/* image */}
                <div className='w-full h-auto  p-4 flex xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center'>
                    <img className='xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[60%] w-[80%] h-[100%] object-cover rounded-md' src={GlassImg} alt='palettas.avif' />
                </div>

            </div>
        </>
    )
}

export default GlassSection
