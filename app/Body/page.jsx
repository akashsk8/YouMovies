"use client"
import Link from "next/link"
import React, { useRef } from "react"
import Adam65 from "../../public/NewRelease/Adam-Driver.jpeg"
import Havoc from "../../public/NewRelease/Havoc.jpeg"
import Kanguva from "../../public/NewRelease/Kanguva.jpeg"
import Kraven from "../../public/NewRelease/Kraven.jpeg"
import Mahaavatar from "../../public/NewRelease/Mahavatar.jpg"
import Vvan from "../../public/NewRelease/Vvan.jpeg"
import Azaad from '../../public/Action/Azaad.jpg'
import BlackAdam from '../../public/Action/BlackAdam.jpg'
import BraveNewWorld from '../../public/Action/BraveNewWorld.jpg'
import Headshot from '../../public/Action/Headshot.jpg'
import IB71 from '../../public/Action/IB71.jpg'
import Logan from '../../public/Action/Logan.jpg'
import MortalKombat from '../../public/Action/MortalKombat.jpg'
import SkyForce from '../../public/Action/SkyForce.jpg'
import Thunderbolt from '../../public/Action/Thunderbolt.jpg'
import Saiyaara from '../../public/Romance/Saiyaara.jpeg'
import Image from "next/image"
import Footer from '../Footer/page'
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function Page() {
  const sliderRef = useRef(null)

  const Newmovies = [
    { img: Adam65, title: "65 (Adam Driver)", quality: "420p | 720p | 1080p", rating: "7.1" },
    { img: Havoc, title: "Havoc", quality: "720p | 1080p", rating: "6.9" },
    { img: Kanguva, title: "Kanguva", quality: "420p | 720p | 1080p", rating: "8.2" },
    { img: Kraven, title: "Kraven the Hunter", quality: "720p | 1080p", rating: "7.5" },
    { img: Mahaavatar, title: "Mahaavatar", quality: "420p | 720p | 1080p", rating: "7.8" },
    { img: Vvan, title: "Vvan", quality: "720p | 1080p", rating: "7.0" }
  ]

  const ActionMovies = [
    { img: Azaad, title: "Azaad", quality: "420p | 720p | 1080p", rating: "7.1" },
    { img: BlackAdam, title: "Black Adam", quality: "720p | 1080p", rating: "6.9" },
    { img: BraveNewWorld, title: "Captain America Brave New World", quality: "420p | 720p | 1080p", rating: "8.2" },
    { img: Headshot, title: "Headshot", quality: "720p | 1080p", rating: "7.5" },
    { img: IB71, title: "IB71", quality: "420p | 720p | 1080p", rating: "7.8" },
    { img: Logan, title: "Logan", quality: "720p | 1080p", rating: "7.0" },
    { img: MortalKombat, title: "Mortal Kombat", quality: "720p | 1080p", rating: "7.5" },
    { img: SkyForce, title: "Sky Force", quality: "720p | 1080p", rating: "7.1" },
    { img: Thunderbolt, title: "Thunderbolt", quality: "720p | 1080p", rating: "8.0" }
  ]

  const RomanticMovie = [
    {img: Saiyaara, title: "Saiyaara", quality: "420p | 720p | 1080p", rating: "7.1" }
  ]
  // Scroll handlers for mobile
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -250, behavior: "smooth" })
    }
  }
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 250, behavior: "smooth" })
    }
  }

  return (
    <div className="px-4">
      <h2 className="text-black py-2 px-3 text-3xl md:text-4xl font-extrabold bg-yellow-200 mt-10 rounded-br-4xl inline-block w-70">
        Latest added
      </h2>

      {/* Mobile: horizontal slider */}
      <div className="relative mt-6 sm:hidden">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {Newmovies.map((data, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="min-w-[70%] flex-shrink-0 rounded-xl bg-yellow-200 shadow-lg overflow-hidden"
              key={index}
            >
              {/* Poster */}
              <div className="relative w-full aspect-[2/3]">
                <Image
                  src={data.img}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
                {/* Rating badge */}
                <div className="absolute top-2 left-2 bg-black/70 text-yellow-300 px-2 py-1 rounded-md text-xs font-semibold">
                  ⭐ {data.rating}
                </div>
              </div>
              {/* Info */}
              <div className="p-3">
                <div className="text-black text-lg font-semibold truncate">{data.title}</div>
                <div className="text-gray-700 text-sm mb-2">Download in {data.quality}</div>
                <div className="flex gap-2">
                  <Button className="bg-black text-white rounded-lg px-3 py-1 text-sm">
                    Watch
                  </Button>
                  <Button variant="outline" className="rounded-lg px-3 py-1 text-sm text-black">
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Desktop: grid */}
      <div className="hidden sm:flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth mt-6">
        {Newmovies.map((data, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className="group flex-shrink-0 w-60 md:w-72 lg:w-80 relative flex flex-col rounded-xl bg-yellow-200 shadow-lg overflow-hidden"
          >
            {/* Poster */}
            <div className="relative w-full aspect-[2/3]">
              <Image
                src={data.img}
                alt={data.title}
                fill
                className="object-cover group-hover:brightness-75 transition"
              />
              <div className="absolute top-2 left-2 bg-black/70 text-yellow-300 px-2 py-1 rounded-md text-xs font-semibold">
                ⭐ {data.rating}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-3 text-white">
                <div className="text-lg font-bold">{data.title}</div>
                <div className="text-sm">{data.quality}</div>
                <div className="flex gap-2">
                  <Button className="bg-yellow-200 text-black rounded-lg px-3 py-1 text-sm hover:bg-yellow-400">
                    Watch
                  </Button>
                  <Button variant="outline" className="text-black border-white hover:text-blue-800 rounded-lg px-3 py-1 text-sm">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="text-black py-2 px-3 text-3xl md:text-4xl font-extrabold bg-yellow-200 mt-10 rounded-br-4xl inline-block w-70">
        From Action
      </h2>

      {/* Mobile: horizontal slider */}
      <div className="relative mt-6 sm:hidden">
  {/* Left Scroll Button */}
  <button
    onClick={scrollLeft}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
  >
    <ChevronLeft size={20} />
  </button>

  {/* Scrollable Cards Container */}
  <div
    ref={sliderRef}
    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
  >
    {ActionMovies.map((data, index) => (
      <motion.div
  whileHover={{ scale: 1.05 }}
  className="min-w-[70%] flex-shrink-0 rounded-xl bg-yellow-200 shadow-lg overflow-hidden flex flex-col h-[350px]"
  key={index}
>
  {/* Poster */}
  <div className="relative w-full h-[65%]">
    <Image
      src={data.img}
      alt={data.title}
      fill
    />
    {/* Rating badge */}
    <div className="absolute top-2 left-2 bg-black/70 text-yellow-300 px-2 py-0.5 rounded text-xs font-semibold">
      ⭐ {data.rating}
    </div>
  </div>

  {/* Info */}
  <div className="p-3 pt-2 pb-3 flex flex-col justify-between flex-grow">
    {/* Title & Quality */}
    <div className="space-y-1">
      <div className="text-black text-base font-semibold truncate">
        {data.title}
      </div>
      <div className="text-gray-700 text-xs">
        Download in {data.quality}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 pt-2">
      <Button className="bg-black text-white rounded-lg px-3 py-1 text-xs">
        Watch
      </Button>
      <Button variant="outline" className="rounded-lg px-3 py-1 text-xs text-black">
        Download
      </Button>
    </div>
  </div>
</motion.div>
    ))}
  </div>

  {/* Right Scroll Button */}
  <button
    onClick={scrollRight}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
  >
    <ChevronRight size={20} />
  </button>
</div>
      {/* Desktop: grid */}
      <div className="hidden sm:flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth mt-6">
        {ActionMovies.map((data, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className="group flex-shrink-0 w-60 md:w-72 lg:w-80 relative flex flex-col rounded-xl bg-yellow-200 shadow-lg overflow-hidden"
          >
            {/* Poster */}
            <div className="relative w-full aspect-[2/3]">
              <Image
                src={data.img}
                alt={data.title}
                fill
                className="object-cover group-hover:brightness-75 transition"
              />
              <div className="absolute top-2 left-2 bg-black/70 text-yellow-300 px-2 py-1 rounded-md text-xs font-semibold">
                ⭐ {data.rating}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-3 text-white">
                <div className="text-lg font-bold">{data.title}</div>
                <div className="text-sm">{data.quality}</div>
                <div className="flex gap-2">
                  <Button className="bg-yellow-200 text-black rounded-lg px-3 py-1 text-sm hover:bg-yellow-400">
                    Watch
                  </Button>
                  <Button variant="outline" className="text-black border-white hover:text-blue-800 rounded-lg px-3 py-1 text-sm">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>


      <h2 className="text-black py-2 px-3 text-3xl md:text-4xl font-extrabold bg-yellow-200 mt-10 rounded-br-4xl inline-block w-70">
        From Romance
      </h2>

      {/* Mobile: horizontal slider */}
      <div className="relative mt-6 sm:hidden">
  {/* Left Scroll Button */}
  <button
    onClick={scrollLeft}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
  >
    <ChevronLeft size={20} />
  </button>

  {/* Scrollable Cards Container */}
  <div
    ref={sliderRef}
    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
  >
    {RomanticMovie.map((data, index) => (
      <motion.div
  whileHover={{ scale: 1.05 }}
  className="min-w-[70%] flex-shrink-0 rounded-xl bg-yellow-200 shadow-lg overflow-hidden flex flex-col h-[350px]"
  key={index}
>
  {/* Poster */}
  <div className="relative w-full h-[65%]">
    <Image
      src={data.img}
      alt={data.title}
      fill
    />
    {/* Rating badge */}
    <div className="absolute top-2 left-2 bg-black/70 text-yellow-300 px-2 py-0.5 rounded text-xs font-semibold">
      ⭐ {data.rating}
    </div>
  </div>

  {/* Info */}
  <div className="p-3 pt-2 pb-3 flex flex-col justify-between flex-grow">
    {/* Title & Quality */}
    <div className="space-y-1">
      <div className="text-black text-base font-semibold truncate">
        {data.title}
      </div>
      <div className="text-gray-700 text-xs">
        Download in {data.quality}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 pt-2">
      <Button className="bg-black text-white rounded-lg px-3 py-1 text-xs">
        Watch
      </Button>
      <Button variant="outline" className="rounded-lg px-3 py-1 text-xs text-black">
        <Link href="./Download">Download</Link>
      </Button>
    </div>
  </div>
</motion.div>
    ))}
  </div>

  {/* Right Scroll Button */}
  <button
    onClick={scrollRight}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
  >
    <ChevronRight size={20} />
  </button>
</div>
      {/* Desktop: grid */}
      <div className="hidden sm:flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth mt-6">
        {RomanticMovie.map((data, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className="group flex-shrink-0 w-60 md:w-72 lg:w-80 relative flex flex-col rounded-xl bg-yellow-200 shadow-lg overflow-hidden"
          >
            {/* Poster */}
            <div className="relative w-full aspect-[2/3]">
              <Image
                src={data.img}
                alt={data.title}
                fill
                className="object-cover group-hover:brightness-75 transition"
              />
              <div className="absolute top-2 left-2 bg-black/70 text-yellow-300 px-2 py-1 rounded-md text-xs font-semibold">
                ⭐ {data.rating}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-3 text-white">
                <div className="text-lg font-bold">{data.title}</div>
                <div className="text-sm">{data.quality}</div>
                <div className="flex gap-2">
                  <Button className="bg-yellow-200 text-black rounded-lg px-3 py-1 text-sm hover:bg-yellow-400">
                    Watch
                  </Button>
                  <Button variant="outline" className="text-black border-white hover:text-blue-800 rounded-lg px-3 py-1 text-sm">
                    <Link href="./Download">Download</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Page
