import React from 'react'
import BlobImg from "../../Images/blob.jpg"
import { Link } from 'react-router-dom'
const BlobSection = () => {
    return (
        <>
            <div className='w-full h-auto  mt-6 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-center items-center p-4'>
                {/* text */}
                <div className='w-full h-auto  p-4'>
                    <h1 className='text-2xl font-bold'>Explore Unique Blobs</h1>
                    <p className='mt-4 xl:text-xl text-lg'>Create unique and abstract blob shapes for your designs. Customize colors, sizes, and shapes to add a playful touch to your projects. Our Blob Maker allows you to easily generate visually appealing blobs that can be used in various design contexts. Adjust the parameters to create blobs that suit your style and add an element of fun to your designs.</p>
                    <Link to='/blob'>
                        <button className=' mt-6 p-2 bg-[#59C0C7] text-white rounded-md'>Explore Blobs</button>
                    </Link>
                </div>
                {/* image */}
                <div className='w-full h-auto  p-4 flex xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center'>
                    <img className='xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[60%] w-[80%] h-[100%] object-cover rounded-md' src={BlobImg} alt='palettas.avif' />
                </div>

            </div>
        </>
    )
}

export default BlobSection
