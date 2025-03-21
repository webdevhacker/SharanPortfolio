import { NavLink } from "react-router-dom";
import { useState } from "react";
import { logo } from "../assets/images";
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="border-gray-200 bg-slate-100 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
    <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <Link to='/#aboutme' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              About Me
          </Link>
            <Link to='/#mywork' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Experience
          </Link> 
          <NavLink to='/projects' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Project
          </NavLink>
          <Link to='https://blog.isharankumar.com' target="_blank" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Blog
          </Link>
          <Link to='/#contact' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Contact
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      {/* <nav className="flex text-lg gap-7 font-medium">
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
        <NavLink to='#aboutme' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            About Me
          </NavLink>
          <NavLink to='#experience' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Experience
          </NavLink> 
          <NavLink to='/projects' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Project
          </NavLink>
          <NavLink to='#contact' className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Contact
          </NavLink>
       </div>
     </div> */}





      {/* <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='#aboutme' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About Me
        </NavLink>
        {/* <Link to='#aboutme' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </Link> */}
        {/* <NavLink to='#mywork' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          My Work
        </NavLink> */}
      {/* </nav> */}
    </header>
  );
};

export default Navbar;
