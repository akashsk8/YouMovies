"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import OIP from '../../public/OIP.jpeg'
import movie2 from '../../public/movie2.jpg'
// import story from '../../public/story.avif'

const images = [
  OIP,
  movie2
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-2 sm:mt-4 overflow-hidden rounded-2xl shadow-lg">
  <div className="relative h-[200px] sm:h-[300px] mt-0 md:h-[400px] w-full">
    <AnimatePresence initial={false}>
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src={images[index]}
          alt={`Slide ${index + 1}`}
          fill
          className="object-cover"
        />
      </motion.div>
    </AnimatePresence>
  </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
