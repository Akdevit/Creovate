import React from 'react'
import TextureImg from "../../Images/texture.avif"

const Hero = () => {
    return (
        <>
            <div className='w-full h-[50vh] bg-gray-200 flex justify-center items-center'
                style={{
                    backgroundImage: `url(${TextureImg})`
                    , objectFit: "cover"
                }}>
                <div className='xl:w-[60%] lg:w-[60%] md:w-[80%] sm:w-[95%] w-[95%] h-auto '>
                    <h1 className='text-4xl font-bold text-center text-white'>Unleash Your Creativity with Our Design Toolkit</h1>
                    <p className='text-center mt-4 text-white'>Explore a comprehensive suite of tools to elevate your design projects. From color palettes to typography, we have everything you need to create stunning visuals.</p>
                </div>
            </div>
        </>
    )
}

export default Hero
