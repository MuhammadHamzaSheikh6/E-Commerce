"use client";


import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaUser, FaStar, FaShoppingBag, FaInstagram, FaTwitter, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
  // State to handle mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
/* Rectangle 1047 */


  return (
<header className="fixed h-[70px] top-0 left-0 right-0 z-50 flex justify-between w-full px-8 py-4 items-center bg-white/10 backdrop-blur-lg shadow-lg ">
  {/* logo */}
  <div>
    <Image
      src="/favicon.ico"
      alt="logo"
      width={120}
      height={100}
    />
  </div>

  {/* Mobile Menu Icon */}
  <div className="block lg:hidden">
    <button onClick={toggleMobileMenu}>
      {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
    </button>
  </div>

  {/* Desktop Navbar */}
  <nav className="hidden lg:flex pl-14">
    <ul className="flex gap-2 pt-1 text-lg">
      <li className="text-black hover:text-white hover:bg-orange-500 rounded-lg px-2 transition duration-300"><Link href="">HOME</Link></li>
      <li className="text-black hover:text-white hover:bg-orange-500 rounded-lg px-2 transition duration-300"><Link href="">ABOUT US</Link></li>
      <li className="text-black hover:text-white hover:bg-orange-500 rounded-lg px-2 transition duration-300"><Link href="">SHOP</Link></li>
      <li className="text-black hover:text-white hover:bg-orange-500 rounded-lg px-2 transition duration-300"><Link href="">COLLECTION</Link></li>
      <li className="text-black hover:text-white hover:bg-orange-500 rounded-lg px-2 transition duration-300"><Link href="">PAGE</Link></li>
    </ul>
  </nav>

  {/* search section */}
  <div className="hidden lg:flex gap-10">
    <ul className="flex gap-4 pt-1">
      <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
        <a href="">
          <FaSearch className="text-black text-sm" />
        </a>
      </li>
      <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
        <a href="">
          <FaUser className="text-black text-sm" />
        </a>
      </li>
      <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
        <a href="">
          <FaStar className="text-black text-sm" />
        </a>
      </li>
      <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
        <a href="">
          <FaShoppingBag className="text-black flex ml-[14.8px] text-sm" />
        </a>
        <span className='absulute px-1  rounded-full mb-7 bg-orange-500 text-white text-xs'>2</span>
      </li>
      <li className="">
        <a href="">
          <p>$0.00</p>
        </a>
      </li>
    </ul>
    <ul className="flex gap-4 pt-1">
      <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
        <a href="">
          <FaInstagram className="text-black text-sm" />
        </a>
      </li>
      <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
        <a href="">
          <FaTwitter className="text-black text-sm" />
        </a>
      </li>
      <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
        <a href="">
          <FaYoutube className="text-black text-sm" />
        </a>
      </li>
    </ul>
  </div>

  {/* Mobile Slide-in Menu */}
  <div
    className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform ${
      isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
    } lg:hidden`}
  >
    {/* Close button inside the slide menu */}
    <button
      onClick={toggleMobileMenu}
      className="text-2xl p-4 absolute top-0 right-0"
    >
      <FaTimes />
    </button>

    <ul className="bg-white flex flex-col gap-4 p-8 mt-8">
      <li><Link href="">HOME</Link></li>
      <li><Link href="">ABOUT US</Link></li>
      <li><Link href="">SHOP</Link></li>
      <li><Link href="">COLLECTION</Link></li>
      <li><Link href="">PAGE</Link></li>
    </ul>
    <div className="flex flex-col gap-4 bg-white p-4">
      <ul className="flex gap-4 pt-1">
        <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
          <a href="">
            <FaSearch className="text-black text-sm" />
          </a>
        </li>
        <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
          <a href="">
            <FaUser className="text-black text-sm" />
          </a>
        </li>
        <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
          <a href="">
            <FaStar className="text-black text-sm" />
          </a>
        </li>
        <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
          <a href="">
            <FaShoppingBag className="text-black text-sm" />
          </a>
        </li>
        <li className="">
          <a href="">
            <p>$0.00</p>
          </a>
        </li>
      </ul>
      <ul className="flex gap-4 pt-1">
        <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
          <a href="">
            <FaInstagram className="text-black text-sm" />
          </a>
        </li>
        <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
          <a href="">
            <FaTwitter className="text-black text-sm" />
          </a>
        </li>
        <li className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
          <a href="">
            <FaYoutube className="text-black text-sm" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</header>


  );
}

export default Header;
