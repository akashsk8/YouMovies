import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-10 mt-10">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-2xl font-bold mb-2">YouMovies</h2>
    <p className="text-gray-400 text-sm mb-6">
      Download the latest movies in HD quality. Fast, secure, and always updated.
      Enjoy cinema at your fingertips.
    </p>
    
    <div className="flex justify-center space-x-6 mb-6">
      <Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link>
      <Link href="#" className="text-gray-400 hover:text-white transition duration-300">About</Link>
      <Link href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</Link>
      <Link href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</Link>
    </div>

    <p className="text-gray-500 text-xs">
      &copy; 2025 YouMovies. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  )
}

export default page