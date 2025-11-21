"use client"; 
import { IoIosMenu } from "react-icons/io";

export default function Header() {

  return (
   <header
      className="container mx-auto px-3 sm:px-5  lg:px-6 py-5 flex justify-between items-center "
    >
      <h1 className="text-2xl font-bold">UVER</h1>
      <button>
        <IoIosMenu  size={32}  className="hidden md:block"/>
      </button>
      <button className=" md: inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
        Get Early Access
      </button>
    </header>   
  )
}
