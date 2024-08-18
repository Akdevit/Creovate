import React, { useEffect, useRef, useState } from 'react';
import { MdContentCopy } from "react-icons/md";
import BirdImg from "../../Images/try.jpg";
import { CiPickerHalf } from "react-icons/ci";
import toast from 'react-hot-toast';


const ColorPicker = () => {
    const [colors, setColors] = useState([]);
    const [img, setImg] = useState(null);
    const [url, setUrl] = useState(BirdImg);
    const [pickcolors, setPickcolors] = useState('')
    const imgRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImg(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (url) {
            setImg(url);
        }
    }, [url]);

    const extractColors = (data) => {
        const colorCount = {};
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const alpha = data[i + 3];

            if (alpha > 0) {
                const rgb = `${r},${g},${b}`;
                colorCount[rgb] = (colorCount[rgb] || 0) + 1;
            }
        }

        const sortedColors = Object.keys(colorCount).sort((a, b) => colorCount[b] - colorCount[a]);
        return sortedColors.slice(0, 10);
    };

    const processImage = () => {
        if (!img) return;

        const imgElement = imgRef.current;
        if (imgElement) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imgElement.width;
            canvas.height = imgElement.height;
            ctx.drawImage(imgElement, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const extractedColors = extractColors(imageData.data);
            setColors(extractedColors);
        }
    };

    const pickColor = async () => {
        // Check if EyeDropper API is supported
        if (!window.EyeDropper) {
            alert('EyeDropper API is not supported in this browser.');
            return;
        }

        try {
            const eyeDropper = new window.EyeDropper();
            const result = await eyeDropper.open();
            setPickcolors(result.sRGBHex);
        } catch (err) {
            console.error('Failed to pick a color:', err);
        }
    };
    /* convert hex to rgb */
    const convertHexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r},${g},${b}`;
    };
    /* convert rgb to hex */
    const rgbValuesToHex = (rgb) => {
        const [r, g, b] = rgb.split(',').map(Number);
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    };



    /* copy code hex */
    const copyColorCode = () => {
        const color = `
        ${pickcolors}
        `
        navigator.clipboard.writeText(color)
            .then(() => {
                toast.success('copid !')
            })
            .catch(err => {
                toast.error('error: ' + err)
            })
    }
    /* copy code rgb */
    const copyColorCodergb = () => {
        const color = `
        rgb(${convertHexToRgb(pickcolors)})
        `
        navigator.clipboard.writeText(color)
            .then(() => {
                toast.success('copid !')
            })
            .catch(err => {
                toast.error('error: ' + err)
            })
    }

    return (
        <div className='w-full xl:h-[100vh] h-auto bg-[#f6f8fc] flex justify-center items-center p-4'>
            <div className='w-[80%] xl:h-[80vh] h-auto  bg-gray-200 rounded-md flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col'>
                <div className='xl:w-[50%] w-full h-[100%]  p-4'>
                    {img && <img
                        ref={imgRef}
                        className='w-full h-full object-contain'
                        src={img}
                        alt='color_pic.jpg'
                        onLoad={processImage}
                    />}
                </div>
                <div className='xl:w-[50%] w-full h-[100%]  p-4 flex gap-4 flex-col justify-evenly'>
                    <div className='flex gap-4'>
                        <button
                            type="button"
                            className='w-[150px] h-[40px] bg-blue-900 text-white p-2 rounded-md'
                            onClick={() => document.getElementById('file').click()}
                        >
                            Use Your Image
                        </button>
                        <input type='file' id='file' className='hidden' onChange={handleImageUpload} />
                    </div>
                    {/* <div className='flex gap-2'>
                        <input onChange={(e) => setUrl(e.target.value)} className='w-[95%] h-[40px] p-2 outline-0 rounded-md' type='text' placeholder='Enter Image URL' />
                        <button className='py-2 px-3 bg-blue-900 rounded-md text-white' onClick={() => setImg(url)}>ok</button>
                    </div> */}
                    <div className='flex flex-col gap-4'>
                        {/* hex */}
                        <div className='w-[300px] h-auto flex bg-white justify-between p-2 items-center rounded-md'>
                            <div className='w-[40px] h-[40px] rounded-full bg-red-500' style={{ background: `${pickcolors}` }}></div>
                            {pickcolors ? <><p>{pickcolors}</p></> : <><p>HEX</p></>}
                            <MdContentCopy onClick={copyColorCode} className='text-2xl cursor-pointer' />
                        </div>
                        {/* rgb */}
                        <div className='w-[300px] h-auto flex bg-white justify-between p-2 items-center rounded-md'>
                            <div className='w-[40px] h-[40px] rounded-full bg-red-500' style={{ background: `${pickcolors}` }}></div>
                            {pickcolors ? <><p>rgb({convertHexToRgb(pickcolors)})</p></> : <><p>RGB</p></>}
                            <MdContentCopy onClick={copyColorCodergb} className='text-2xl cursor-pointer' />
                        </div>
                    </div>
                    <button
                        type="button"
                        className='w-[40px] h-[40px] bg-blue-900 text-white p-2 rounded-md'
                        onClick={pickColor}
                    >
                        <CiPickerHalf className='text-2xl' />
                    </button>
                    <div className='w-full h-[40%] flex flex-wrap gap-2'>
                        {colors.map((color, index) => {
                            const hexColor = rgbValuesToHex(color);
                            return (
                                <div key={index}
                                    onClick={() => navigator.clipboard.writeText(hexColor).then(() => { toast.success('copied !') })}
                                    className='w-[100px] h-[100px] cursor-pointer rounded-md flex justify-center items-center '
                                    style={{ backgroundColor: `rgb(${color})` }}>
                                    {hexColor}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;
