'use client'
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import React from 'react';

// const Navbar = () => {
//     const path =usePathname()
//   return (
//     <nav className="bg-gray-900 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//       <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M100 10L130 30L180 50L150 180L50 180L20 50L70 30Z" stroke="black" stroke-width="5" fill="none"/>
//   <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" fill="#4A90E2">
//     MHK
//   </text>
// </svg>

//         <h1 className="text-white text-3xl font-extrabold">My Portfolio</h1>
//         <ul className="flex space-x-4">
//           <li><Link href="/" className={path==="/"?'m-3 font-extrabold text-purple-800':'m-3 font-bold text-purple-500'}>Home</Link></li>
//           <li><Link href="/projects" className={path==="/projects"?'m-3 font-extrabold text-purple-800':'m-3 font-bold text-purple-500'}>Projects</Link></li>
//           <li><Link href="/about" className={path==="/about"?'m-3 font-extrabold text-purple-800':'m-3 font-bold text-purple-500'}>About</Link></li>
//           <li><Link href="/about" className={path==="/contact"?'m-3 font-extrabold text-purple-800':'m-3 font-bold text-purple-500'}>Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React from 'react';
// import Link from 'next/link';

// 
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-none p-4  fixed top-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">MHK</h1>
        <div className="hidden md:flex space-x-4">
          <Link href="#intro" className="text-white hover:text-yellow-300">Home</Link>
          <Link href="#about" className="text-white hover:text-yellow-300">About</Link>
          <Link href="#projects" className="text-white hover:text-yellow-300">Projects</Link>
          <Link href="#contact" className="text-white hover:text-yellow-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            Menu
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-transparent absolute right-0 mt-2">
          <Link href="#intro" className="block text-white px-4 py-2 hover:bg-purple-700">Home</Link>
          <Link href="#about" className="block text-white px-4 py-2 hover:bg-purple-700">About</Link>
          <Link href="#projects" className="block text-white px-4 py-2 hover:bg-purple-700">Projects</Link>
          <Link href="#contact" className="block text-white px-4 py-2 hover:bg-purple-700">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
