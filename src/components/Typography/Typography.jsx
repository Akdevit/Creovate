import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCode } from "react-icons/fa6";
import { RxCross1 } from 'react-icons/rx';

const Typography = () => {
    const [fontFamily, setFontFamily] = useState('Arial');
    const [fontSize, setFontSize] = useState(16);
    const [fontWeight, setFontWeight] = useState(400);
    const [fontStyle, setFontStyle] = useState('normal');
    const [textDecoration, setTextDecoration] = useState('none');
    const [color, setColor] = useState('#000000');
    const [textShadowColor, setTextShadowColor] = useState('#000000');
    const [textShadowOffsetX, setTextShadowOffsetX] = useState(0);
    const [textShadowOffsetY, setTextShadowOffsetY] = useState(0);
    const [textShadowBlur, setTextShadowBlur] = useState(0);
    const [text, setText] = useState('The quick brown fox jumps over the lazy dog.');
    const [modal, setModal] = useState(false)

    const fontFamilies = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Impact', 'Comic Sans MS', 'Lucida Console', 'Palatino Linotype', 'Lucida Sans Unicode', 'Menlo', 'Monaco', 'Consolas', 'Segoe UI', 'Calibri', 'Optima', 'Gill Sans', 'Arial Black', 'Charcoal', 'Chicago', 'Geneva', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Oswald', 'Raleway', 'PT Sans', 'Merriweather', 'Nunito', 'Playfair Display', 'Roboto Condensed', 'Source Sans Pro', 'Ubuntu', 'Noto Sans', 'Work Sans', 'Poppins', 'Lobster', 'Pacifico', 'Quicksand'];

    const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    const fontStyles = ['normal', 'italic', 'oblique'];
    const textDecorations = ['none', 'underline', 'overline', 'line-through'];


    const code = `
    {
    font-family: "${fontFamily}";
    font-size: "${fontSize}px"; 
    font-weight:" ${fontWeight}";
    font-style: "${fontStyle}";
    text-decoration: "${textDecoration}";
    color: "${color}"; 
    text-shadow:" ${textShadowOffsetX}px ${textShadowOffsetY}px ${textShadowBlur}px ${textShadowColor}";
    }
 `


    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
            .then(() => {
                toast.success('Copid !')
            })
            .catch((err) => {
                toast.error('error', err)
            })
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Typography Generator</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* priview section */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-blck mb-4">Preview</h2>
                        <div
                            style={{
                                fontFamily,
                                fontSize: `${fontSize}px`,
                                fontWeight,
                                fontStyle,
                                textDecoration,
                                color,
                                textShadow: `${textShadowOffsetX}px ${textShadowOffsetY}px ${textShadowBlur}px ${textShadowColor}`,
                            }}
                            className="p-4 bg-gray-200 rounded-lg break-words"
                        >
                            {text}
                        </div>
                    </div>

                    {/* controllers */}

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className='w-full h-auto flex gap-4'>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Customize Typography</h2>
                            <button onClick={() => setModal(true)} className='w-[30px] h-[30px] bg-blue-900 text-white rounded-md flex justify-center items-center'><FaCode /></button>
                        </div>
                        {/*  */}

                        <div className='w-full flex gap-4'>
                            <div className='w-full flex-col'>
                                <label className="block mb-2 text-gray-700">Font Family</label>
                                <select
                                    className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                                    value={fontFamily}
                                    onChange={(e) => setFontFamily(e.target.value)}
                                >
                                    {fontFamilies.map((family) => (
                                        <option key={family} value={family} style={{ fontFamily: `${family}` }}>{family}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='w-full flex-col'>
                                <label className="block mb-2 text-gray-700">Font Size (px)</label>
                                <input
                                    type="number"
                                    className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                                    value={fontSize}
                                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                                />


                            </div>
                        </div>


                        <div className='w-full flex gap-4'>
                            <div className='w-full flex-col'>
                                <label className="block mb-2 text-gray-700">Font Weight</label>
                                <select
                                    className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                                    value={fontWeight}
                                    onChange={(e) => setFontWeight(parseInt(e.target.value))}
                                >
                                    {fontWeights.map((weight) => (
                                        <option key={weight} value={weight}>{weight}</option>
                                    ))}
                                </select>

                            </div>


                            <div className='w-full flex-col'>
                                <label className="block mb-2 text-gray-700">Font Style</label>
                                <select
                                    className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                                    value={fontStyle}
                                    onChange={(e) => setFontStyle(e.target.value)}
                                >
                                    {fontStyles.map((style) => (
                                        <option key={style} value={style}>{style}</option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        <div className='w-full flex-col'>
                            <label className="block mb-2 text-gray-700">Text Decoration</label>
                            <select
                                className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                                value={textDecoration}
                                onChange={(e) => setTextDecoration(e.target.value)}
                            >
                                {textDecorations.map((decoration) => (
                                    <option key={decoration} value={decoration}>{decoration}</option>
                                ))}
                            </select>
                        </div>


                        <div className='w-full flex gap-4'>
                            <div className='w-full flex-col'>
                                <label className="block mb-2 text-gray-700">Text Color</label>
                                <input
                                    type="color"
                                    className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                                    style={{backgroundColor:`${color}`}}
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>

                            <div className='w-full flex-col'>
                                <label className="block mb-2 text-gray-700">Shadow Color</label>
                                <input
                                    type="color"
                                    className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                                    style={{backgroundColor:`${textShadowColor}`}}
                                    value={textShadowColor}
                                    onChange={(e) => setTextShadowColor(e.target.value)}
                                />
                            </div>
                        </div>


                        <div className='w-full flex gap-4'>
                            <div className='w-full flex-col'>
                                <label className="block mb-2 text-gray-700">Text Shadow Offset X (px)</label>
                                <input
                                    type="number"
                                    className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                                    value={textShadowOffsetX}
                                    onChange={(e) => setTextShadowOffsetX(parseInt(e.target.value))}
                                />
                            </div>


                            <div className='w-full flex-col'>
                                <label className="block mb-2 text-gray-700">Text Shadow Offset Y (px)</label>
                                <input
                                    type="number"
                                    className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                                    value={textShadowOffsetY}
                                    onChange={(e) => setTextShadowOffsetY(parseInt(e.target.value))}
                                />
                            </div>


                        </div>

                        <label className="block mb-2 text-gray-700">Text Shadow Blur (px)</label>
                        <input
                            type="number"
                            className="block w-full px-4 py-2 mb-4 rounded border-gray-300  outline-0 border "
                            value={textShadowBlur}
                            onChange={(e) => setTextShadowBlur(parseInt(e.target.value))}
                        />

                        <label className="block mb-2 text-gray-700">Sample Text</label>
                        <textarea
                            className="block w-full px-4 py-2 mb-4 rounded border-gray-300 outline-0 border resize-none"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>


                </div>
            </div>


            {  /* modal code */}
            {
                modal && (
                    <>
                        <div className='w-full h-[100%] fixed z-50 top-0 left-0 flex justify-center items-center p-4'>
                            <div className='xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[100%] w-full h-auto bg-white rounded-md shadow-md flex flex-col gap-4 p-6'>
                                <div className='w-fll flex justify-end'>
                                    <RxCross1 onClick={() => setModal(false)} className='text-3xl font-semibold cursor-pointer' />
                                </div>
                                <div className=''>
                                    <p>{code}</p>
                                </div>

                                <button className='w-full bg-blue-500 text-white rounded-md p-2 mt-4' onClick={copyToClipboard}>Copy to Clipboard</button>
                            </div>
                        </div>

                    </>
                )
            }
        </>




    );
};

export default Typography;



/*  
    {
    font-family: "Times New Roman";
    font-size: "300px"; 
    font-weight:" 800";
    font-style: "normal";
    text-decoration: "none";
    color: "#1d7d95"; 
    text-shadow:" 12px 12px 3px #a8e7f0";
    }
  */