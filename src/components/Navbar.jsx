import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(false);

  return (
    <nav className="fixed w-screen h-16 bg-zinc-200 shadow-lg z-10">
      <div className="container mx-auto h-full flex justify-between items-center">
        <h1 className="text-3xl font-bold sm:text-4xl text-black">BRAND</h1>
        <ul className="hidden md:flex space-x-4 text-gray-700">
          <li className="hover:scale-110 duration-300">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className=" hover:bg-indigo-500 px-4 py-3 hover:text-white rounded-2xl duration-300 font-bold cursor-pointer"
              onClick={handleClose}
            >
              Home
            </Link>
          </li>
          <li className="hover:scale-110 duration-300">
            <Link
              to="about"
              smooth={true}
              offset={-200}
              duration={500}
              className=" hover:bg-indigo-500 px-4 py-3 hover:text-white rounded-2xl duration-300 font-bold cursor-pointer"
              onClick={handleClose}
            >
              About
            </Link>
          </li>
          <li className="hover:scale-110 duration-300">
            <Link
              to="support"
              smooth={true}
              offset={-50}
              duration={500}
              className=" hover:bg-indigo-500 px-4 py-3 hover:text-white rounded-2xl duration-300 font-bold cursor-pointer"
              onClick={handleClose}
            >
              Support
            </Link>
          </li>
          <li className="hover:scale-110 duration-300">
            <Link
              to="platforms"
              smooth={true}
              offset={-100}
              duration={500}
              className=" hover:bg-indigo-500 px-4 py-3 hover:text-white rounded-2xl duration-300 font-bold cursor-pointer"
              onClick={handleClose}
            >
              Platforms
            </Link>
          </li>
          <li className="hover:scale-110 duration-300">
            <Link
              to="pricing"
              smooth={true}
              offset={-50}
              duration={500}
              className=" hover:bg-indigo-500 px-4 py-3 hover:text-white rounded-2xl duration-300 font-bold cursor-pointer"
              onClick={handleClose}
            >
              Pricing
            </Link>
          </li>
        </ul>
        <div className="md:flex space-x-4  items-center">
          <button className="bg-transparent md:flex hidden text-black duration-300 border-none">
            Sign In
          </button>
          <button className="px-6 py-3 bg-indigo-600 md:flex hidden text-white rounded-full hover:bg-indigo-700 hover:text-white duration-300 ">
            Sign Up
          </button>
          <div className="md:hidden">
            <button className="p-3 duration-300" onClick={handleClick}>
              {!nav ? (
                <MenuIcon className="w-6 h-6 text-black" />
              ) : (
                <XIcon className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      <ul
        className={`${
          nav ? "block" : "hidden"
        } absolute inset-x-0 top-16 bg-zinc-200 z-10 duration-300 md:hidden`}
      >
        <li className="border-b-2 border-gray-300">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block py-4 px-6 text-gray-700 hover:text-black"
            onClick={handleClose}
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-gray-300">
          <Link
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
            className="block py-4 px-6 text-gray-700 hover:text-black"
            onClick={handleClose}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-gray-300">
          <Link
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
            className="block py-4 px-6 text-gray-700 hover:text-black"
            onClick={handleClose}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-gray-300">
          <Link
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
            className="block py-4 px-6 text-gray-700 hover:text-black"
            onClick={handleClose}
          >
            Platforms
          </Link>
        </li>
        <li>
          <Link
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
            className="block py-4 px-6 text-gray-700 hover:text-black"
            onClick={handleClose}
          >
            Pricing
          </Link>
        </li>
        <li>
          <button className="block w-full py-4 text-center text-white  duration-300 font-bold hover:text-black">
            Sign In
          </button>
        </li>
        <li>
          <button className="block w-full py-4 text-center text-white  duration-300 font-bold hover:text-black">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
