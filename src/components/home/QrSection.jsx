import React from 'react'
import QrImg from "../../Images/qr.avif"
const QrSection = () => {
  return (
    <>
      <div className='w-full h-auto  mt-6 flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-center items-center p-4'>
                {/* text */}
                <div className='w-full h-auto  p-4'>
                    <h1 className='text-2xl font-bold'>generate Custom QR Codes</h1>
                    <p className='mt-4 xl:text-xl text-lg'>Generate custom QR codes for your needs. Encode URLs, text, and other data, and customize the appearance of your QR codes. Our QR Generator allows you to create QR codes with different styles, colors, and embedded data to suit your branding and functional requirements. Easily download and use the generated QR codes in your projects.</p>
                    <button className=' mt-6 p-2 bg-black text-white rounded-md'>Generate QR Codes</button>
                </div>
                {/* image */}
                <div className='w-full h-auto  p-4 flex xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center'>
                    <img className='xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[60%] w-[80%] h-[100%] object-cover rounded-md' src={QrImg} alt='palettas.avif' />
                </div>

            </div>
    </>
  )
}

export default QrSection
