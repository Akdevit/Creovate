import React from 'react'
import GredientImg from "../../Images/gredient.jpg"
import { Link } from 'react-router-dom'
const GradientSection = () => {
    return (
        <>
            <div className='w-full h-auto  mt-6 flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center p-4'>
                {/* image */}
                <div className='w-full h-auto  p-4 flex xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center'>
                    <img className='xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[60%] w-[80%] h-[100%] object-cover rounded-md' src={GredientImg} alt='palettas.avif' />
                </div>
                {/* text */}
                <div className='w-full h-auto  p-4'>
                    <h1 className='text-2xl font-bold'> generate Stunning Gradients</h1>
                    <p className='mt-4 xl:text-xl text-lg'>Effortlessly create stunning gradients with our Gradient Generator. Customize colors, angles, and types to perfectly match your design needs. Whether you're looking for linear or radial gradients, our tool offers a wide range of options to help you achieve the perfect look for your project. Experiment with different combinations and directions to add depth and dimension to your designs.</p>
                    <Link to='/gradient'>
                        <button className=' mt-6 p-2 gradient text-white rounded-md'>Generate Gradients</button>
                    </Link>
                </div>


            </div>
        </>
    )
}

export default GradientSection
