import React, { useState } from 'react'
import { FaCode } from "react-icons/fa";
import BlobsJson from "../utility/json/Blob.json"
import { SwatchesPicker } from 'react-color'
import { RxCross1 } from "react-icons/rx";
import toast from 'react-hot-toast';

const Blob = () => {
    const [blobscolor, setBlobscolor] = useState('#FF6F61')
    const [blob, setBlob] = useState(BlobsJson[5].path)
    const [svgmodal, setSvgmodal] = useState(false)
    const [select, setSelect] = useState(0)
    // console.log(BlobsJson)
    const handleChangeComplete = (color) => {
        setBlobscolor(color.hex)
    }

    const SVG = `
     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="${blobscolor}" d="${blob}" />
    </svg>`

    const copySVG = () => {
        navigator.clipboard.writeText(SVG)
            .then(() => {
                setSvgmodal(false)
                toast.success('copied !')
            })
            .catch(err => {
                toast.error('Failed to copy content: ', err);
            });
    }

    const blobs = (blob, index) => {
        setBlob(blob)
        setSelect(index)
    }
    return (
        <>
            <div className='w-full h-auto  '>

                {/* blob show area */}
                <div className='w-full h-auto flex xl:flex-row flex-col-reverse  items-center justify-center gap-8 p-6 relative'>
                    <div onClick={() => setSvgmodal(true)} className='w-[40px] h-[40px] bg-white rounded-md shadow-md cursor-pointer flex justify-center items-center absolute top-8 right-8'>
                        <FaCode className='text-2xl ' />
                    </div>
                    <div className='xl:w-[30%] w-[100%] h-[30%] '>
                        <SwatchesPicker
                            width='100%' height='100%'
                            color={blobscolor}
                            onChangeComplete={handleChangeComplete}
                        />
                    </div>

                    <svg className="w-[600px] h-[600px] " viewBox="0 0 200 200">
                        <path
                            fill={blobscolor}
                            d={blob}
                            transform="translate(100, 100)"
                        />
                    </svg>


                </div>
                {/* side baar controller */}
                <div className='w-[100%] h-auto px-6 flex '>

                    <div className="w-[100%] h-[100%] p-4 justify-center flex flex-wrap gap-4 ">
                        {
                            BlobsJson.map((blob, index) => (
                                <>
                                    <div key={index} onClick={() => blobs(blob.path, index)} className={`w-[150px] h-[150px] bg-gray-100 cursor-pointer flex items-center justify-center rounded-md ${select === index ? `border border-3 border-blue-900` : ''} `}>
                                        <svg className="w-[100%] h-[100%]" viewBox="0 0 200 200">
                                            <path
                                                fill={blobscolor}
                                                d={blob.path}
                                                transform="translate(100, 100)"
                                            />
                                        </svg>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* modal SVG code copy */}
            {
                svgmodal && (
                    <>
                        <div className='w-full h-[100%] fixed z-50 top-0 left-0 flex justify-center items-center p-4'>
                            <div className='xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[100%] w-full h-auto bg-white rounded-md shadow-md flex flex-col gap-4 p-6'>
                                <div className='w-fll flex justify-end'>
                                    <RxCross1 className='text-3xl font-semibold cursor-pointer' onClick={() => setSvgmodal(false)} />
                                </div>
                                <p className='font-semibold break-words'>
                                    {SVG}
                                </p>
                                <button onClick={copySVG} className='w-full p-3 hover:bg-green-300 border'>Copy To Clipboard</button>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}


export default Blob
