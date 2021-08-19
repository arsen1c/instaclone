import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex md:justify-center md:content-center h-14 border-b-2 border-gray-200">
      <div className="flex justify-between md:justify-evenly items-center w-2/3">
        <h1 className="sm:text-2xl font-Pacifico">Instagram</h1>
        
        <input className="border hidden md:block border-gray-300 bg-white text-center h-7 px-2 rounded-lg text-sm focus:outline-none" type="text" placeholder="Search" />
        
        <div className="actions flex justify-between">
          <Link to="/"><i className="opacity-80 cursor-pointer fas fa-home text-2xl mr-5"></i></Link>
          <Link to="inbox"><i className="opacity-80 cursor-pointer fab fa-facebook-messenger text-2xl mr-5"></i></Link>
          <Link to="arsenic"><i className="opacity-80 cursor-pointer far fa-user-circle text-2xl"></i></Link> 
        </div>
      </div>
    </nav>
  )
}