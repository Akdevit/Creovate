import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Palettes = () => {
    const [palettes, setPalettes] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`https://colors-palettes.onrender.com/palettes?page=${currentPage}&limit=100`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (Array.isArray(data.results)) {
                    setPalettes(data.results);
                    setPagination(data)
                    setLoading(false)
                } else {
                    console.error('Unexpected data structure:', data?.results);
                }
            })
            .catch(error => console.error('Error fetching palettes:', error));
    }, [currentPage]);

    const handleColorClick = (color) => {
        navigator.clipboard.writeText(color)
            .then(() => {
                toast.success(`copied !`);
            })
            .catch(err => {
                console.error('Failed to copy color code:', err);
            });
    };

    /* pagination  */

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1)
        if (pagination.currentPage === currentPage) {

        }
    }

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1)
    }
    
    return (
        <div className='w-full h-auto '>
            <h1 className='text-2xl font-semibold p-4'>Our Color Palettes</h1>
            <p className='w-[40%] px-4'>Discover over 100,000 curated color palettes to inspire your design projects and find the perfect hues for any creative need.</p>
            {
                loading ? <><h1 className='text-center'>lodding...</h1></> : <>
                    <div className='w-full h-auto  p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {palettes?.map((palette, index) => (
                            <div key={index} className='w-[300px] h-[280px] rounded-md bg-white overflow-hidden'>
                                {palette?.slice(0, 4).map((color, colorIndex) => (
                                    <div
                                        key={colorIndex}
                                        className='relative w-full h-[25%] cursor-pointer'
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleColorClick(color)}
                                    >
                                        <div
                                            className='absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300'
                                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                                        >
                                            {color}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            }

            {/* pagination */}
            <div className='w-full h-[80px]  p-4 flex justify-end '>
                <div className='w-auto h-auto flex  items-center px-6'>
                    {
                        pagination.currentPage > 1 && (
                            <button onClick={handlePrevClick} className='w-[80px] h-[40px] rounded-md hover:bg-[#32A994] hover:text-white duration-150 border flex justify-center items-center'><HiOutlineArrowSmLeft className='text-2xl ' /></button>
                        )
                    }
                    <p className='text-xl px-6'>{pagination.currentPage}/{pagination.totalPages}</p>
                    {
                        pagination.currentPage < pagination.totalPages && (

                            <button onClick={handleNextClick} className='w-[80px] h-[40px] rounded-md hover:bg-[#32A994] hover:text-white duration-150 border flex justify-center items-center'><HiOutlineArrowSmRight className='text-2xl ' /></button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Palettes;
