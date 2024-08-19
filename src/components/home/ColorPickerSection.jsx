import React from 'react'
import ColorPickerImg from "../../Images/colorpicker.avif"
const ColorPickerSection = () => {
    return (
        <>
            <div className='w-full h-auto  mt-6 flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center p-4'>
                {/* image */}
                <div className='w-full h-auto  p-4 flex xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center'>
                    <img className='xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[60%] w-[80%] h-[100%] object-cover rounded-md' src={ColorPickerImg} alt='palettas.avif' />
                </div>
                {/* text */}
                <div className='w-full h-auto  p-4'>
                    <h1 className='text-2xl font-bold'>Precise Color Picking</h1>
                    <p className='mt-4 xl:text-xl text-lg'>Easily pick and customize colors for your design projects. Use our Color Picker to select and refine colors with precision. Whether you need a specific hex code or want to explore different shades, our tool offers a user-friendly interface to help you find the perfect color. Save your favorite colors and create palettes that enhance your designs.</p>
                    <button className=' mt-6 p-2 bg-[#CE805A] text-white rounded-md shadow-xl'>Pick Colors</button>
                </div>


            </div>
        </>
    )
}

export default ColorPickerSection
