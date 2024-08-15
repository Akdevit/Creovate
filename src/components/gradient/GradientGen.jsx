import React, { useState } from 'react';
import { AlphaPicker as OriginalAlphaPicker, ChromePicker, HuePicker } from 'react-color';
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import toast from 'react-hot-toast';
const GradientGen = () => {
    const [colors, setColors] = useState([
        { color: '#1BF4E5', rgb: { r: 27, g: 244, b: 229, a: 1 } },
        { color: '#BE53CB', rgb: { r: 190, g: 83, b: 203, a: 1 } }
    ]);
    const [deg, setDeg] = useState(300);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [chnagebgformate, setChangebgformate] = useState(true)

    const handleChangeComplete = (color) => {
        const updatedColors = colors.map((c, index) =>
            index === selectedColorIndex ? { color: color.hex, rgb: color.rgb } : c
        );
        setColors(updatedColors);
    };

    const handleChange = (e) => {
        setDeg(e.target.value);
    };

    const handleRgbChange = (e, key) => {
        const value = parseInt(e.target.value);
        const updatedColors = colors.map((c, index) =>
            index === selectedColorIndex ? { ...c, rgb: { ...c.rgb, [key]: value } } : c
        );
        setColors(updatedColors);
    };

    const handleAlphaChange = (e) => {
        const value = parseFloat(e.target.value);
        const updatedColors = colors.map((c, index) =>
            index === selectedColorIndex ? { ...c, rgb: { ...c.rgb, a: value } } : c
        );
        setColors(updatedColors);
    };

    const addColor = () => {
        setColors([...colors, { color: '#FFFFFF', rgb: { r: 255, g: 255, b: 255, a: 1 } }]);
        setSelectedColorIndex(colors.length);
    };

    const removeColor = (index) => {
        if (colors.length > 2) {
            setColors(colors.filter((_, i) => i !== index));
            setSelectedColorIndex(Math.max(0, selectedColorIndex - 1));
        }
    };

    const gradientStyle = `${chnagebgformate ? 'linear-gradient' : 'radial-gradient'}(${chnagebgformate ? `${deg}deg` : 'circle'}, ${colors.map(c => `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`).join(', ')})`;

    const moz = ` -moz-${chnagebgformate ? 'linear-gradient' : 'radial-gradient'}(${chnagebgformate ? `${deg}deg` : 'circle'}, ${colors.map(c => `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`).join(', ')});`;
    const webkit = ` -webkit-${chnagebgformate ? 'linear-gradient' : 'radial-gradient'}(${chnagebgformate ? `${deg}deg` : 'circle'}, ${colors.map(c => `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`).join(', ')});`
    const filter = ` progid:DXImageTransform.Microsoft.gradient(startColorstr="${colors[0] ? `rgba(${colors[0].rgb.r},${colors[0].rgb.g},${colors[0].rgb.b},${colors[0].rgb.a})` : '#000000'}", endColorstr="${colors[colors.length - 1] ? `rgba(${colors[colors.length - 1].rgb.r},${colors[colors.length - 1].rgb.g},${colors[colors.length - 1].rgb.b},${colors[colors.length - 1].rgb.a})` : '#ffffff'}", GradientType=${chnagebgformate ? 1 : 0});
`
    const copyToClipboard = () => {
        const content = `
        background :"${colors[selectedColorIndex].color}"
        background :"${gradientStyle}"
        background :"${moz}"
        background : "${webkit}"
        filter : "${filter}"
      `;
        navigator.clipboard.writeText(content)
            .then(() => {
                toast.success('copied !');
            })
            .catch(err => {
                toast.error('Failed to copy content: ', err);
            });
    }

    return (
        <>
            {/* show gradient */}
            <div
                className='w-full h-[50vh] mt-2 '
                style={{ background: gradientStyle }}
            />

            {/* controllers */}
            <div className='w-full h-[50vh]  p-4'>
                <div className='w-full h-[100%] bg-[#F6F8FC] shadow-md rounded-sm flex justify-between'>

                    {/* show color */}
                    <div className='w-[30%] h-auto  flex justify-center items-center'>
                        <ChromePicker
                            color={colors[selectedColorIndex].color}
                            onChangeComplete={handleChangeComplete}
                            disableAlpha={true}
                            width='95%'
                            height='80%'
                        />
                    </div>

                    {/* show color controllers */}
                    <div className='w-[33%] h-[100%]  p-4 flex flex-col gap-4 '>
                        <HuePicker
                            color={colors[selectedColorIndex].color}
                            onChangeComplete={handleChangeComplete}
                            width='100%'
                            height='40px'
                            direction="horizontal"
                        />
                        <OriginalAlphaPicker
                            color={colors[selectedColorIndex].rgb}
                            onChangeComplete={handleChangeComplete}
                            width='100%'
                            height='40px'
                        />
                        <div className='w-full h-auto flex justify-between items-center'>
                            <input
                                type='range'
                                className='w-[90%] h-2 bg-gray-200 rounded-lg appearance-none  focus:outline-none cursor-pointer'
                                min={0}
                                max={360}
                                value={deg}
                                onChange={handleChange}
                            />
                            <div className='w-[45px] h-[40px] rounded-md flex justify-center items-center bg-white border border-gray-500 '>
                                {deg}°
                            </div>
                        </div>
                        <div className='w-full h-auto  flex gap-4'>
                            <div className='w-[20%] h-auto flex flex-col gap-2 justify-center items-center'>
                                <input value={colors[selectedColorIndex].color} type='text' className='w-[100px] h-[40px] rounded-md bg-white border text-center flex justify-center items-center border-3.5 border-blue-900 ' readOnly />
                                <p className='font-bold text-gray-800'>HEX</p>
                            </div>
                            <div className='w-[80%] h-auto flex gap-2 justify-between items-center'>
                                <div className='w-auto h-auto flex flex-col gap-2 justify-center items-center'>
                                    <input value={colors[selectedColorIndex].rgb.r} type='number' className='w-[80px] h-[40px] rounded-md bg-white border text-center flex justify-center items-center border-3 border-blue-900 ' onChange={(e) => handleRgbChange(e, 'r')} />
                                    <p className='font-bold text-gray-800'>R</p>
                                </div>
                                <div className='w-auto h-auto flex flex-col gap-2 justify-center items-center'>
                                    <input value={colors[selectedColorIndex].rgb.g} type='number' className='w-[80px] h-[40px] rounded-md bg-white border text-center flex justify-center items-center border-3 border-blue-900 ' onChange={(e) => handleRgbChange(e, 'g')} />
                                    <p className='font-bold text-gray-800'>G</p>
                                </div>
                                <div className='w-auto h-auto flex flex-col gap-2 justify-center items-center'>
                                    <input value={colors[selectedColorIndex].rgb.b} type='number' className='w-[80px] h-[40px] rounded-md bg-white border text-center flex justify-center items-center border-3 border-blue-900 ' onChange={(e) => handleRgbChange(e, 'b')} />
                                    <p className='font-bold text-gray-800'>B</p>
                                </div>
                                <div className='w-auto h-auto flex flex-col gap-2 justify-center items-center'>
                                    <input value={colors[selectedColorIndex].rgb.a} type='number' step='0.1' min='0' max='1' className='w-[80px] h-[40px] rounded-md bg-white border text-center flex justify-center items-center border-3 border-blue-900 ' onChange={handleAlphaChange} />
                                    <p className='font-bold text-gray-800'>A</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-auto  flex gap-4 items-center'>
                            <button onClick={() => setChangebgformate(true)} className={`w-[100px] h-[40px] rounded-md ${chnagebgformate ? 'bg-blue-800 text-white' : 'border border-3 border-blue-900'} font-bold`}>Linear</button>
                            <button onClick={() => setChangebgformate(false)} className={`w-[100px] h-[40px] rounded-md ${!chnagebgformate ? 'bg-blue-800 text-white' : 'border border-3 border-blue-900'} font-bold`}>Radial</button>
                        </div>
                    </div>
                    <div className='w-[33%] h-[100%] p-4'>
                        <div className='w-full h-full flex items-center flex-col gap-2 overflow-y-auto'>
                            {colors.map((c, index) => (
                                <div key={index} className='w-[60%] rounded-md p-1 h-auto flex gap-2 items-center bg-white border border-3 border-blue-900'>
                                    <div className='w-[40px] h-[40px] rounded-full cursor-pointer' style={{ backgroundColor: c.color }}  onClick={() => setSelectedColorIndex(index)}/>
                                    <button className='w-[70%] bg-white p-2 rounded-md cursor-pointer' onClick={() => setSelectedColorIndex(index)}>
                                         {c.color}
                                    </button>

                                    <button className='p-2 bg-red-500 text-white rounded-md' onClick={() => removeColor(index)}>
                                        <MdDelete />
                                    </button>
                                </div>
                            ))}
                            <button className=' w-[10%] h-[10%] flex justify-center items-center p-2 bg-green-500 text-white  rounded-md' onClick={addColor}>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* provide code  */}


            <div className='w-full h-auto rounded-sm bg-white p-4 shadow-md'>
                <div className='w-full h-auto bg-gray-200 rounded-md p-4 flex flex-col gap-4'>
                    <p className='font-bold'><span className='text-[#0d377f] font-bold'>background</span> : {colors[selectedColorIndex].color}</p>
                    <p className='font-bold'><span className='text-[#0d377f] font-bold'>background</span> : {gradientStyle}</p>
                    <p className='font-bold'><span className='text-[#0d377f] font-bold'>background</span> : {moz}</p>
                    <p className='font-bold'><span className='text-[#0d377f] font-bold'>background</span> : {webkit}</p>
                    <p className='font-bold'><span className='text-[#0d377f] font-bold'>filter</span> : {filter}</p>
                    <button onClick={copyToClipboard} className='mt-4 p-2 bg-[#2BA6C8] text-white rounded'>
                        Copy to Clipboard
                    </button>
                </div>
            </div>
        </>
    );
};

export default GradientGen;



/* background: radial-gradient(circle, rgb(36,42,51,1) 0%, rgb(19,22,27,1) 100%); */
/* background: linear-gradient(198deg, #1BF4E5 0%, #BE53CB 100%) */





