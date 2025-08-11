import React, { useState } from 'react';
import { FaHome, FaTasks, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="my-2 mx-3 rounded-md flex justify-between items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-4 px-6 shadow-lg">
      <div className="logo">
        <span className="font-bold text-2xl mx-9 transition-transform transform hover:scale-125 hover:text-yellow-300">iTask</span>
      </div>
      <ul className="flex gap-10 mx-9 items-center">
        <li className='cursor-pointer hover:font-bold transition-all duration-500 flex items-center hover:text-yellow-300'>
          <FaHome className="mr-2" /> Home
        </li>
        <li className='cursor-pointer hover:font-bold transition-all duration-500 flex items-center hover:text-yellow-300'>
          <FaTasks className="mr-2" /> Your Tasks
        </li>
        <li className='relative'>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='cursor-pointer hover:font-bold transition-all duration-500 hover:text-yellow-300'>
            More
          </button>
          {isDropdownOpen && (
            <ul className='absolute bg-white text-black mt-2 p-2 rounded shadow-lg'>
              <li className='hover:bg-gray-200 p-2'>Profile</li>
              <li className='hover:bg-gray-200 p-2'>Settings</li>
              <li className='hover:bg-gray-200 p-2'>Logout</li>
            </ul>
          )}
        </li>
        <li className='flex items-center'>
          <FaSearch className="mr-2" />
          <input type="text" placeholder="Search..." className="bg-gray-800 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
