import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import toast from 'react-hot-toast';
import { FaRegCircle } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { RxCross1 } from 'react-icons/rx';

const Shadowgen = () => {
    const [horizontal, setHorizontal] = useState(0);
    const [vertical, setVertical] = useState(4);
    const [blur, setBlur] = useState(20);
    const [spread, setSpread] = useState(0);
    const [opacity, setOpacity] = useState(40);
    const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 0.4 });
    const [inset, setInset] = useState(false);
    const [circle, setCircle] = useState(false);
    const [modal, setModal] = useState(false)
    const handleColorChange = (color) => {
        setColor(color.rgb);
    };

    const boxShadowValue = `
        -webkit-box-shadow: "${inset ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100})";
        -moz-box-shadow: "${inset ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100})";
        box-shadow: "${inset ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100})";
    `;
    const moz = ` -moz-box-shadow: ${inset ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100});`
    const webkit = `-webkit-box-shadow: ${inset ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100});`
    const shadow = ` box-shadow: "${inset ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100})";
`

    const copyToClipboard = () => {
        navigator.clipboard.writeText(boxShadowValue.trim())
            .then(() => {
                toast.success('Box shadow CSS copied to clipboard!');
            })
            .catch((err) => {
                toast.error('box shadow not copid ', err)
            })
    };

    return (
        <>
            {/*  p-20 rounded-full*/}
            <div className='w-full h-[100vh] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 gap-8'>
                {/* box */}
                <div className='xl:w-[70%] lg:w-[70%] md:w-[50%] sm:w-[100%] w-full h-[100vh] bg-[#F6F8FC] flex justify-center items-center p-6'>
                    <div className={`xl:w-[500px] xl:h-[500px] w-[300px] h-[300px] bg-white  p-6 flex flex-col justify-around items-center  ${circle ? 'rounded-full' : 'rounded-md'}`}
                        style={{
                            boxShadow: `${inset ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${color.r}, ${color.g}, ${color.b}, ${opacity / 100})`
                        }}
                    >

                    </div>
                </div>
                {/* controllers */}
                <div className='xl:w-[30%] lg:w-[30%] md:w-[50%] sm:w-[100%] w-full h-[100vh] bg-[#F6F8FC] flex flex-col p-4 gap-4'>
                    {/* Horizontal Length controller */}
                    <div className='w-full flex flex-col'>
                        <p>Horizontal Length</p>
                        <div className='w-full flex gap-4 items-center'>
                            <input
                                min="-100"
                                max="100"
                                className='w-[90%] cursor-pointer appearance-none bg-gray-200 focus:outline-none rounded-md'
                                type='range'
                                value={horizontal}
                                onChange={(e) => setHorizontal(Number(e.target.value))}
                            />
                            <div className='p-2 border border-3 border-blue-800 rounded-md flex justify-center items-center'>{horizontal}px</div>
                        </div>
                    </div>
                    {/* Vertical Length controller */}
                    <div className='w-full flex flex-col'>
                        <p>Vertical Length</p>
                        <div className='w-full flex gap-4 items-center'>
                            <input
                                min="-100"
                                max="100"
                                className='w-[90%] cursor-pointer appearance-none bg-gray-200 focus:outline-none rounded-md'
                                type='range'
                                value={vertical}
                                onChange={(e) => setVertical(Number(e.target.value))}
                            />
                            <div className='p-2 border border-3 border-blue-800 rounded-md flex justify-center items-center'>{vertical}px</div>
                        </div>
                    </div>
                    {/* Blur Radius controller */}
                    <div className='w-full flex flex-col'>
                        <p>Blur Radius</p>
                        <div className='w-full flex gap-4 items-center'>
                            <input
                                min="0"
                                max="100"
                                className='w-[90%] cursor-pointer appearance-none bg-gray-200 focus:outline-none rounded-md'
                                type='range'
                                value={blur}
                                onChange={(e) => setBlur(Number(e.target.value))}
                            />
                            <div className='p-2 border border-3 border-blue-800 rounded-md flex justify-center items-center'>{blur}px</div>
                        </div>
                    </div>
                    {/* Spread Radius controller */}
                    <div className='w-full flex flex-col'>
                        <p>Spread Radius</p>
                        <div className='w-full flex gap-4 items-center'>
                            <input
                                min="0"
                                max="100"
                                className='w-[90%] cursor-pointer appearance-none bg-gray-200 focus:outline-none rounded-md'
                                type='range'
                                value={spread}
                                onChange={(e) => setSpread(Number(e.target.value))}
                            />
                            <div className='p-2 border border-3 border-blue-800 rounded-md flex justify-center items-center'>{spread}px</div>
                        </div>
                    </div>
                    {/* Opacity controller */}
                    <div className='w-full flex flex-col'>
                        <p>Opacity</p>
                        <div className='w-full flex gap-4 items-center'>
                            <input
                                min="0"
                                max="100"
                                className='w-[90%] cursor-pointer appearance-none bg-gray-200 focus:outline-none rounded-md'
                                type='range'
                                value={opacity}
                                onChange={(e) => setOpacity(Number(e.target.value))}
                            />
                            <div className='p-2 border border-3 border-blue-800 rounded-md flex justify-center items-center'>{opacity}%</div>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap gap-2'>
                        <button className={`p-2 rounded-md border ${!inset && 'bg-blue-800 text-white'}`} onClick={() => setInset(false)}>Box Shadow</button>
                        <button className={`p-2 rounded-md border ${inset && 'bg-blue-800 text-white'}`} onClick={() => setInset(true)}>Inset Shadow</button>
                        <button onClick={() => setCircle(!circle)} className={`p-2 rounded-md border bg-blue-800 text-white`} >
                            {
                                circle ? <>
                                    <FaRegSquare className='text-2xl' />
                                </> : <>
                                    <FaRegCircle className='text-2xl' />
                                </>
                            }


                        </button>
                        <button onClick={() => setModal(true)} className={`p-2 rounded-md border bg-blue-800 text-white`} >
                            <FaCode className='text-2xl' />
                        </button>


                    </div>
                    <SketchPicker color={color} onChange={handleColorChange} />

                </div>
            </div>
            {/* modal */}
            {
                modal && (
                    <div className='w-full h-[100%] fixed z-50 top-0 left-0 flex justify-center items-center p-4'>
                        <div className='xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[100%] w-full h-auto bg-white rounded-md shadow-md flex flex-col gap-4 p-6'>
                            <div className='w-fll flex justify-end'>
                                <RxCross1 onClick={() => setModal(false)} className='text-3xl font-semibold cursor-pointer' />
                            </div>
                            <div className=''>
                                <p>{shadow}</p>
                                <p>{webkit}</p>
                                <p>{moz}</p>
                            </div>

                            <button className='w-full bg-blue-500 text-white rounded-md p-2 mt-4' onClick={copyToClipboard}>Copy to Clipboard</button>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default Shadowgen;
