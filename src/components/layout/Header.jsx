import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import Icon from "../../Images/icon.jpg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => location.pathname === path; // Function to check if the path is active

    return (
        <>
            <div className='w-full h-16 bg-gray-100 flex justify-between items-center px-4'>
                {/* Site name */}
                <Link to='/'>
                    <div className='w-auto h-auto flex gap-4 items-center cursor-pointer'>
                        <img className='w-[50px] h-[50px] rounded-md' src={Icon} alt='icon.jpg' />
                        <h1 className='text-2xl font-semibold'>Creovate</h1>
                    </div>
                </Link>
                {/* Links */}
                <ul className='hidden lg:flex gap-4'>
                    <li>
                        <Link to='/' className={isActive('/') ? 'text-blue-500' : ''}>Home</Link>
                    </li>
                    <li>
                        <Link to='/color' className={isActive('/color') ? 'text-blue-500' : ''}>Color's Palettes</Link>
                    </li>
                    <li>
                        <Link to='/gradient' className={isActive('/gradient') ? 'text-blue-500' : ''}>Gradient Generator</Link>
                    </li>
                    <li>
                        <Link to='/blob' className={isActive('/blob') ? 'text-blue-500' : ''}>Blob Maker</Link>
                    </li>
                    <li>
                        <Link to='/shadow' className={isActive('/shadow') ? 'text-blue-500' : ''}>Shadow Generator</Link>
                    </li>
                    <li>
                        <Link to='/glass' className={isActive('/glass') ? 'text-blue-500' : ''}>Glass UI</Link>
                    </li>
                    <li>
                        <Link to='/colorpicker' className={isActive('/colorpicker') ? 'text-blue-500' : ''}>Color Picker</Link>
                    </li>
                    <li>
                        <Link to='/Qr' className={isActive('/Qr') ? 'text-blue-500' : ''}>QR Generator</Link>
                    </li>
                    <li>
                        <Link to='/TypographyGenerator' className={isActive('/TypographyGenerator') ? 'text-blue-500' : ''}>Typography</Link>
                    </li>
                </ul>
                {/* Hamburger menu */}
                <div className='lg:hidden'>
                    <button onClick={toggleMenu} className='focus:outline-none'>
                        {isOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 bottom-0 w-full z-50 h-full bg-gray-100 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className='w-full h-auto flex justify-end p-8'>
                    <RxCross1 className='text-3xl cursor-pointer' onClick={toggleMenu} />
                </div>
                <ul className='flex flex-col items-center gap-4 '>
                    <li className={`w-[90%] p-2 border-b-2 border-gray-500 ${isActive('/') ? 'text-blue-500' : ''}`}>
                        <Link to='/' onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className={`w-[90%] p-2 border-b-2 border-gray-500 ${isActive('/color') ? 'text-blue-500' : ''}`}>
                        <Link to='/color' onClick={toggleMenu}>Color's Palettes</Link>
                    </li>
                    <li className={`w-[90%] p-2 border-b-2 border-gray-500 ${isActive('/gradient') ? 'text-blue-500' : ''}`}>
                        <Link to='/gradient' onClick={toggleMenu}>Gradient Generator</Link>
                    </li>
                    <li className={`w-[90%] p-2 border-b-2 border-gray-500 ${isActive('/blob') ? 'text-blue-500' : ''}`}>
                        <Link to='/blob' onClick={toggleMenu}>Blob Maker</Link>
                    </li>
                    <li className={`w-[90%] p-2 border-b-2 border-gray-500 ${isActive('/shadow') ? 'text-blue-500' : ''}`}>
                        <Link to='/shadow' onClick={toggleMenu}>Shadow Generator</Link>
                    </li>
                    <li className={`w-[90%] p-2 border-b-2 border-gray-500 ${isActive('/glass') ? 'text-blue-500' : ''}`}>
                        <Link to='/glass' onClick={toggleMenu}>Glass UI</Link>
                    </li>
                    <li className={`w-[90%] p-2 border-b-2 border-gray-500 ${isActive('/colorpicker') ? 'text-blue-500' : ''}`}>
                        <Link to='/colorpicker' onClick={toggleMenu}>Color Picker</Link>
                    </li>
                    <li className={`w-[90%] p-2 border-b-2 border-gray-500 ${isActive('/Qr') ? 'text-blue-500' : ''}`}>
                        <Link to='/Qr' onClick={toggleMenu}>QR Generator</Link>
                    </li>
                    <li className={`w-[90%] p-2 border-b-2 border-gray-500 ${isActive('/TypographyGenerator') ? 'text-blue-500' : ''}`}>
                        <Link to='/TypographyGenerator' onClick={toggleMenu}>Typography</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
