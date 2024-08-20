import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import Icon from "../../Images/icon.jpg"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/color'>Color's Palettes</Link>
                    </li>
                    <li>
                        <Link to='/gradient'>Gradient Generator </Link>
                    </li>
                    <li>
                        <Link to='/blob'>Blob Maker</Link>
                    </li>

                    <li>
                        <Link to='/shadow'>Shadow Generator</Link>
                    </li>
                    <li>
                        <Link to='/glass'>Glass UI</Link>
                    </li>
                    <li>
                        <Link to='/colorpicker'>Color Picker</Link>
                    </li>
                    <li>
                        <Link to='/Qr'>QR Generator</Link>
                    </li>
                    <li>
                        <Link to='/TypographyGenerator'>Typography</Link>
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
            <div className={`fixed top-0 right-0 w-full z-50 h-full bg-gray-100 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className='w-full h-auto flex justify-end p-8'>
                    <RxCross1 className='text-3xl cursor-pointer' onClick={toggleMenu} />
                </div>
                <ul className='flex flex-col items-center gap-4 mt-16'>
                    <li>
                        <Link to='/' onClick={toggleMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to='/color' onClick={toggleMenu}>Color's Palettes</Link>
                    </li>
                    <li>
                        <Link to='/gradient' onClick={toggleMenu}>Gradient Generator</Link>
                    </li>
                    <li>
                        <Link to='/blob' onClick={toggleMenu}>Blob Maker</Link>
                    </li>

                    <li>
                        <Link to='/shadow' onClick={toggleMenu}>Shadow Generator</Link>
                    </li>
                    <li>
                        <Link to='/glass' onClick={toggleMenu}>Glass UI</Link>
                    </li>
                    <li>
                        <Link to='/colorpicker' onClick={toggleMenu}>Color Picker</Link>
                    </li>
                    <li>
                        <Link to='/Qr' onClick={toggleMenu}>QR Generator</Link>
                    </li>
                    <li>
                        <Link to='/TypographyGenerator' onClick={toggleMenu}>Typography</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
