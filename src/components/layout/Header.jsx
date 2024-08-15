import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className='w-full h-16 bg-gray-100 flex justify-between items-center px-4'>
                {/* name site */}
                <div className='w-auto h-auto'>
                    <h1 className='font-bold'>Site name icons here</h1>
                </div>
                {/* links */}
                <ul className='flex gap-4'>
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
                        <Link to='/waves'>Waves Genratore</Link>
                    </li>

                    <li>
                        <Link to='/shadow'>Shadow Genratore</Link>
                    </li>
                    <li>
                        <Link to='/glass'>Glass UI</Link>
                    </li>
                    <li>
                        <Link to='/'>Color Picker</Link>
                    </li>


                </ul>
                {/* add buttons profile icons  */}
            </div>
        </>
    )
}

export default Header
