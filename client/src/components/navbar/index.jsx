import React from 'react'
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, PlusIcon } from '../../icons/index.js';

export default function Navbar({ isAuth }) {
  
  if (!isAuth) {
    return (
      <nav className="flex md:justify-center md:content-center bg-white h-14 border-b-2 border-gray-200 mt-0 w-full z-10 top-0">
        <div className="flex justify-between md:justify-evenly items-center w-2/3">
          <Link to="/"><h1 className="sm:text-2xl font-Pacifico">Instagram</h1></Link>
          
          
          <div className="actions flex justify-between">
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register">Signup</Link> 
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="flex md:justify-center md:content-center bg-white h-14 border-b-2 border-gray-200 mt-0 w-full z-10 top-0">
      <div className="flex justify-between md:justify-evenly items-center w-100 mx-2 md:w-2/3">
        <Link to="/"><h1 className="text-2xl font-Pacifico">Instagram</h1></Link>
        
        <input className="border hidden md:block border-gray-300 bg-white text-center h-7 px-2 rounded-lg text-sm focus:outline-none" type="text" placeholder="Search" />
        
        <div className="actions flex align-middle justify-between">
          <Link to="/" className="mr-4"><HomeIcon /></Link>
          <Link to="/arsenic" className="mr-4"><UserIcon /></Link> 
          <Link to="/new"><PlusIcon /></Link> 
        </div>
      </div>
    </nav>
  )
}