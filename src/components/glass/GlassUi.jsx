import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { FaCode } from "react-icons/fa6";
import { RxCross1 } from 'react-icons/rx';
import BackgroundImage from "../../Images/background.jpg";
import toast from 'react-hot-toast';

const GlassUi = () => {
    const [color, setColor] = useState({ r: 255, g: 255, b: 255, a: 0.15 });
    const [blur, setBlur] = useState(10);
    const [opacity, setOpacity] = useState(15);
    const [borderRadius, setBorderRadius] = useState(15);
    const [border, setBorder] = useState(1);
    const [modal, setModal] = useState(false);

    const handleColorChange = (color) => {
        setColor(color.rgb);
    };

    const GlassCode = `
      backdropFilter: "blur(${blur}px)",
      background: "rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100})",
      borderRadius: "${borderRadius} px",
      border: "${border}px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    `
    const CopyGlassCode = () => {
        navigator.clipboard.writeText(GlassCode.trim())
            .then(() => {
                toast.success('Glass code copied to clipboard !')
            })
            .catch((err) => {
                toast.error('Glass code not copied ', err)
            })
    }
    return (
        <>
            <div className='w-full h-[100vh] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col'>
                <div className='xl:w-[70%] lg:w-[70%] md:w-[60%] sm:w-[100%] w-full h-[100vh] bg-[#F6F8FC] flex justify-center items-center p-6'
                    style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className='w-[500px] h-[500px] p-6 flex '
                        style={{
                            backdropFilter: `blur(${blur}px)`,
                            background: `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100})`,
                            borderRadius: `${borderRadius}px`,
                            border: `${border}px solid rgba(255, 255, 255, 0.3)`,
                            boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
                        }}
                    >
                        <h1>Glass UI Card</h1>
                        <p>This is an example of a glassmorphism effect.</p>
                    </div>
                </div>
                <div className='xl:w-[30%] lg:w-[30%] md:w-[40%] sm:w-[100%] w-full h-[100vh] bg-[#F6F8FC] flex flex-col p-4 gap-4'>
                    {/* Blur Length controller */}
                    <div className='w-full flex flex-col'>
                        <p>Blur</p>
                        <div className='w-full flex gap-4 items-center'>
                            <input
                                min="0"
                                max="100"
                                value={blur}
                                onChange={(e) => setBlur(e.target.value)}
                                className='w-[90%] cursor-pointer appearance-none bg-gray-200 focus:outline-none rounded-md'
                                type='range'
                            />
                            <div className='p-2 border border-3 border-blue-800 rounded-md flex justify-center items-center'>{blur}px</div>
                        </div>
                    </div>
                    {/* Transparency Length controller */}
                    <div className='w-full flex flex-col'>
                        <p>Transparency</p>
                        <div className='w-full flex gap-4 items-center'>
                            <input
                                min="0"
                                max="100"
                                value={opacity}
                                onChange={(e) => setOpacity(e.target.value)}
                                className='w-[90%] cursor-pointer appearance-none bg-gray-200 focus:outline-none rounded-md'
                                type='range'
                            />
                            <div className='p-2 border border-3 border-blue-800 rounded-md flex justify-center items-center'>{opacity}%</div>
                        </div>
                    </div>
                    {/* Border Radius controller */}
                    <div className='w-full flex flex-col'>
                        <p>Border Radius</p>
                        <div className='w-full flex gap-4 items-center'>
                            <input
                                min="0"
                                max="100"
                                value={borderRadius}
                                onChange={(e) => setBorderRadius(e.target.value)}
                                className='w-[90%] cursor-pointer appearance-none bg-gray-200 focus:outline-none rounded-md'
                                type='range'
                            />
                            <div className='p-2 border border-3 border-blue-800 rounded-md flex justify-center items-center'>{borderRadius}px</div>
                        </div>
                    </div>
                    {/* Border Width controller */}
                    <div className='w-full flex flex-col'>
                        <p>Border Width</p>
                        <div className='w-full flex gap-4 items-center'>
                            <input
                                min="0"
                                max="10"
                                value={border}
                                onChange={(e) => setBorder(e.target.value)}
                                className='w-[90%] cursor-pointer appearance-none bg-gray-200 focus:outline-none rounded-md'
                                type='range'
                            />
                            <div className='p-2 border border-3 border-blue-800 rounded-md flex justify-center items-center'>{border}px</div>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap gap-2'>
                        <button onClick={() => setModal(true)} className='p-2 rounded-md border bg-blue-800 text-white'>
                            <FaCode className='text-2xl' />
                        </button>
                    </div>
                    <SketchPicker color={color} onChange={handleColorChange} />
                </div>
            </div>
            {/* Modal */}
            {modal && (
                <div className='w-full h-[100%] fixed z-50 top-0 left-0 flex justify-center items-center p-4'>
                    <div className='xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[100%] w-full h-auto bg-white rounded-md shadow-md flex flex-col gap-4 p-6'>
                        <div className='w-full flex justify-end'>
                            <RxCross1 onClick={() => setModal(false)} className='text-3xl font-semibold cursor-pointer' />
                        </div>
                        <div>
                            <p>{`backdrop-filter: blur(${blur}px);`}</p>
                            <p>{`-webkit-backdrop-filter: blur(${blur}px);`}</p>
                            <p>{`background: rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100});`}</p>
                            <p>{`border-radius: ${borderRadius}px;`}</p>
                            <p>{`border: ${border}px solid rgba(255, 255, 255, 0.3);`}</p>
                            <p>{`box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);`}</p>
                        </div>
                        <button onClick={CopyGlassCode} className='w-full bg-blue-500 text-white rounded-md p-2 mt-4'>Copy to Clipboard</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default GlassUi;
