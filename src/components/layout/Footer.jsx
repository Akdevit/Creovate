import React from 'react';
import { Link } from 'react-router-dom';
import Icon from "../../Images/icon.jpg"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className='w-full h-auto bg-gray-100 text-black'>
                <div className='max-w-7xl mx-auto px-4 py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                        {/* Company Info */}
                        <div>
                        <img className='w-[130px] h-[130px] rounded-md' src={Icon} alt='icon.jpg'/>

                            {/* <h2 className='text-2xl font-bold mb-4'>Your Company</h2> */}
                            <p className='text-gray-700'>
                            Creovate is committed to delivering innovative solutions that empower businesses and individuals. Our mission is to drive efficiency and growth through cutting-edge technology, with a vision of seamlessly integrating tech into everyday life. We prioritize innovation, integrity, and customer satisfaction in all we do.</p>
                        </div>

                        {/* Tools Links Column 1 */}
                        <div>
                            <h3 className='text-xl font-semibold mb-4'>Tools</h3>
                            <ul>
                                <li className='mb-2'>
                                    <Link to='/' className='hover:text-gray-500 transition-colors duration-300'>Home</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/color' className='hover:text-gray-500 transition-colors duration-300'>Color's Palettes</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/gradient' className='hover:text-gray-500 transition-colors duration-300'>Gradient Generator</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/blob' className='hover:text-gray-500 transition-colors duration-300'>Blob Maker</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Tools Links Column 2 */}
                        <div>
                            <h3 className='text-xl font-semibold mb-4'>More Tools</h3>
                            <ul>
                                <li className='mb-2'>
                                    <Link to='/shadow' className='hover:text-gray-500 transition-colors duration-300'>Shadow Generator</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/glass' className='hover:text-gray-500 transition-colors duration-300'>Glass UI</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/colorpicker' className='hover:text-gray-500 transition-colors duration-300'>Color Picker</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/Qr' className='hover:text-gray-500 transition-colors duration-300'>QR Generator</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/TypographyGenerator' className='hover:text-gray-500 transition-colors duration-300'>Typography</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='mt-8 border-t border-gray-300 pt-4'>
                        <p className='text-center text-gray-700'>
                            &copy; {currentYear} Creovate. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
