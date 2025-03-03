import React, { useState } from 'react';
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleBellClick = () => {
    alert('No new notifications');
  };

  const handleUserIconClick = () => {
    setShowDropdown(prevState => !prevState);
  };

  return (
    <nav className='bg-[#002147] flex justify-between items-center px-4 py-3 w-full' >
      <div className='text-xl flex items-center'>
        <FaBars className='text-white me-4 cursor-pointer w-full' onClick={() => setShowSidebar(!showSidebar)} />
        <span className='text-white font-semibold'>Home</span>
      </div>
      <div className='flex items-center'>
        <div className='text-white me-4'>
          <FaBell className='w-6 h-6 cursor-pointer' onClick={handleBellClick} />
        </div>
        <div className='relative'>
          <button className='text-white group' onClick={handleUserIconClick}>
            <FaUserCircle className='w-6 h-6 mt-1'/>
          </button>
          {showDropdown && (
            <div className='z-10 absolute bg-white rounded-lg shadow-w-32 top-full right-0 w-32'>
              <ul className='py-2 px-4 text-sm text-gray-950 '>
                <li><a href='' className='hover:text-blue-600'>User login</a></li>
                <li><a href=''className='hover:text-blue-600'>Admin login</a></li>
                <li><a href='' className='hover:text-blue-600'>Log out</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;