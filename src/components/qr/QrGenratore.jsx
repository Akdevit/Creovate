import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaFileArrowDown } from "react-icons/fa6";
import { ThreeDots } from 'react-loader-spinner'; // or any other loading spinner library

const QrGenratore = () => {
    const [qrvalue, setQrvalue] = useState('welcome');
    const [inputvalue, setInputvalue] = useState('');
    const [dlodder, setDlodder] = useState(false)
    const [imload, setImload] = useState(false)
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?&data=${qrvalue}`;

    const generateQR = () => {
        if (!inputvalue) {
            toast.error('please enter text')
        } else {
            setQrvalue(inputvalue);
            setImload(true)
            document.getElementById("input").value = "";
        }
    };

    const handleImageLoad = () => {
        setImload(false)
    }

    const DownloadQr = () => {
        setDlodder(true)
        fetch(qrUrl)
            .then((res) => res.blob())
            .then((qrlinkdata) => {
                let tempURL = URL.createObjectURL(qrlinkdata);
                let aTag = document.createElement("a");
                aTag.href = tempURL;
                aTag.download = "QrCode";
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
                setDlodder(false)
            });
    }



    return (
        <>
            <div className='w-full h-[100vh] flex justify-center items-center'>
                <div className='w-[80%] h-[80%] bg-gray-100 rounded-md'>
                    
                    <div className='w-full h-auto flex p-4 gap-4'>
                        <input
                            onChange={(e) => setInputvalue(e.target.value)}
                            className='w-[90%] px-4 rounded-md outline-0'
                            type='search'
                            placeholder='Enter your Text & URL...'
                            id="input"
                        />
                        <button onClick={generateQR} className='p-2 bg-blue-800 text-white rounded-md cursor-pointer text-xl'>
                            {
                                imload ?
                                    <>
                                        <ThreeDots color="#ffffff" height={20} width={40} />
                                    </>
                                    :
                                    <>
                                        Generate
                                    </>
                            }
                        </button>
                    </div>

                    <div className='w-full h-[80%] flex justify-center items-center'>
                        <div className='flex items-end gap-4 xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col'>
                            {/* {loading ? (
                                <ThreeDots color="#000000" height={80} width={80} />
                            ) : ( */}
                            <>
                                <img
                                    className='w-[100%] h-[100%]'
                                    src={qrUrl}
                                    alt='qr.jpg'
                                    onLoad={handleImageLoad}
                                />
                                <button onClick={DownloadQr} className='w-[40px] h-[40px] bg-blue-900 text-white rounded-md flex justify-center items-center'>
                                    {
                                        dlodder ? <>

                                            <ThreeDots color="#ffffff" height={20} width={20} />

                                        </> : <>

                                            <FaFileArrowDown className='text-xl' />
                                        </>
                                    }
                                </button>
                            </>
                            {/* )} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QrGenratore;
