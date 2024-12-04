import { NavLink } from "react-router-dom";
import { useState } from "react";
import { logo } from "../assets/images";

// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='header'>
      <nav className="flex text-lg gap-7 font-medium">
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-[130px] h-18 object-contain my-4' />
      </NavLink>
      <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-end mx-32 px-3 py-2 rounded text-black-500 hover:text-black-400"
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
     </div>





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
      </nav>
    </header>
  );
};

export default Navbar;
