import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';

const Palettes = () => {
    const [palettes, setPalettes] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [visiblePageRange, setVisiblePageRange] = useState({ start: 1, end: 5 });

    useEffect(() => {
        const updatePageRange = (newCurrentPage) => {
            const pageRangeSize = 5;
            let start = Math.max(1, newCurrentPage - Math.floor(pageRangeSize / 2));
            let end = Math.min(pagination.totalPages, start + pageRangeSize - 1);

            if (end - start < pageRangeSize - 1) {
                start = Math.max(1, end - pageRangeSize + 1);
            }

            setVisiblePageRange({ start, end });
        };

        setLoading(true);
        fetch(`https://colors-palettes.onrender.com/palettes?page=${currentPage}&limit=50`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data.results)) {
                    setPalettes(data.results);
                    setPagination(data);
                    setLoading(false);
                    updatePageRange(currentPage);  // Update page range whenever data is fetched
                } else {
                    console.error('Unexpected data structure:', data?.results);
                }
            })
            .catch(error => console.error('Error fetching palettes:', error));
    }, [currentPage, pagination.totalPages]);

    const handleColorClick = (color) => {
        navigator.clipboard.writeText(color)
            .then(() => {
                toast.success(`Copied!`);
            })
            .catch(err => {
                console.error('Failed to copy color code:', err);
            });
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < pagination.totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='w-full h-auto'>
            <h1 className='text-2xl font-semibold p-4'>Our Color Palettes</h1>
            <p className='xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[90%] w-[90%] px-4'>Discover over 100,000 curated color palettes to inspire your design projects and find the perfect hues for any creative need.</p>
            {
                loading ? <><h1 className='text-center'>Loading...</h1></> : <>
                    <div className='w-full h-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {palettes?.map((palette, index) => (
                            <div key={index} className='w-[100%] xl:h-[280px] lg:h-[280px] md:h-[280px] sm:h-[280px] h-[220px] rounded-md bg-white shadow-lg overflow-hidden xl:p-3 lg:p-3 md:p-3 sm:p-3 p-2'>
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

            {/* Pagination */}
            <div className='w-full h-[80px] p-4 flex justify-center items-center'>
                <div className='flex items-center space-x-4'>
                    {/* Previous Button */}
                    {
                        currentPage > 1 && (
                            <button
                                onClick={handlePrevClick}
                                className='w-[40px] h-[40px] rounded-full bg-[#32A994] text-white hover:bg-[#28a085] flex items-center justify-center transition-colors duration-300 shadow-md'
                                aria-label='Previous Page'
                            >
                                <HiOutlineArrowSmLeft className='text-xl' />
                            </button>
                        )
                    }

                    {/* Page Numbers */}
                    <div className='flex items-center space-x-2'>
                        {Array.from({ length: visiblePageRange.end - visiblePageRange.start + 1 }, (_, index) => (
                            <button
                                key={visiblePageRange.start + index}
                                onClick={() => setCurrentPage(visiblePageRange.start + index)}
                                className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-sm font-semibold ${visiblePageRange.start + index === currentPage
                                    ? 'bg-[#32A994] text-white'
                                    : 'bg-white text-[#32A994] hover:bg-[#f0f0f0]'
                                    } border border-[#32A994] transition-colors duration-300`}
                            >
                                {visiblePageRange.start + index}
                            </button>
                        ))}
                    </div>



                    {/* Next Button */}
                    {
                        currentPage < pagination.totalPages && (
                            <button
                                onClick={handleNextClick}
                                className='w-[40px] h-[40px] rounded-full bg-[#32A994] text-white hover:bg-[#28a085] flex items-center justify-center transition-colors duration-300 shadow-md'
                                aria-label='Next Page'
                            >
                                <HiOutlineArrowSmRight className='text-xl' />
                            </button>
                        )
                    }

                </div>
            </div>
                {/* totale pages show */}
                <p className='text-center mb-12'>totalPages {pagination.totalPages}</p>
        </div>
    );
};

export default Palettes;
