"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // for hamburger menu
import Logo from '../../public/Logo.png'
import Carousel from '../Slider/page'
import { Search } from 'lucide-react'
import { useState } from 'react'
function page() {
const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
        <nav className="bg-yellow-200 max-w-7xl m-auto max-h-15 mt-2 rounded-xl shadow-md px-4 z-50">
      {/* Navbar container */}
      <div className="flex max-h-15 justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={150} height={20} priority />
          <sup className="text-black relative right-1">No-Add</sup>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className="font-bold text-black hover:text-gray-700 transition">
            Home
          </Link>

          <select
            name="collection"
            className="text-black px-2 py-1 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-blue-700">
            <option value="collection">Collection</option>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
            <option value="Fox">Fox</option>
            <option value="Pixar">WB</option>
            <option value="StarWars">StarWars</option>
            <option value="NatGeo">NatGeo</option>
          </select>

          <select
            name="Industry"
            className="text-black px-2 py-1 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <option value="Industry">Industry</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Hollywood">Hollywood</option>
            <option value="Tollywood">Tollywood</option>
            <option value="Pollywood">Pollywood</option>
            <option value="Sandalwood">Sandalwood</option>
            <option value="Lollywood">Lollywood</option>
          </select>

          <select
            name="Series"
            className="text-black px-2 py-1 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <option value="Series">Series</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>

          <Link
            href="./Login"
            className="ml-4 bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition">
            Account
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 bg-yellow-100 p-3 rounded-lg shadow z-20">
          <Link href="/" className="font-medium hover:text-gray-700 transition">
            Home
          </Link>
          <select className="text-black px-2 py-1 rounded-md border border-gray-300">
            <option>Collection</option>
            <option>Marvel</option>
            <option>DC</option>
            <option>Fox</option>
            <option>WB</option>
            <option>StarWars</option>
            <option>NatGeo</option>
          </select>
          <select className="text-black px-2 py-1 rounded-md border border-gray-300">
            <option>Industry</option>
            <option>Bollywood</option>
            <option>Hollywood</option>
            <option>Tollywood</option>
            <option>Pollywood</option>
            <option>Sandalwood</option>
            <option>Lollywood</option>
          </select>
          <select className="text-black px-2 py-1 rounded-md border border-gray-300">
            <option>Series</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Action</option>
            <option>Horror</option>
            <option>Romance</option>
            <option>Sci-Fi</option>
          </select>
          <Link
            href="./Login"
            className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Account
          </Link>
        </div>
      )}
    </nav>
    {menuOpen ? '' : <Carousel/>}
    <hr className={`text-white ${menuOpen?'mt-62':'mt-3'}`}/>
    <div className="w-full mt-10 flex justify-center px-4">
      <div className="flex w-full max-w-lg items-center border-2 border-yellow-200 rounded-lg overflow-hidden">
        <input
          type="text"
          name="search"
          className="flex-1 h-12 bg-transparent text-white px-4 outline-none placeholder-gray-300"
          placeholder="Search movies by name/type"
        />
        <button
          type="submit"
          className="h-12 w-12 flex items-center justify-center bg-yellow-200 text-black hover:bg-yellow-300 transition-colors">
          <Search size={20} />
        </button>
      </div>
    </div>
    </div>
  )
}

export default page