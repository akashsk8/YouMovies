import React from 'react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
function main() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-md bg-yellow-200 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-black mb-6">Login</h1>
        <form action="/login" method="post" className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="rounded-md bg-black bg-opacity-70 text-white px-3 py-2 outline-none transition duration-200"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="rounded-md bg-black bg-opacity-70 text-white px-3 py-2 outline-none transition duration-200"
          />

          <div className="text-black text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="./Register" className="text-blue-800 hover:underline">
              Register
            </Link>
          </div>

          <input
            type="submit"
            value="Login"
            className="bg-black text-white px-5 py-2 rounded-md cursor-pointer hover:bg-yellow-500 transition duration-300 w-fit mx-auto"
          />
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-black"></div>
          <span className="text-black text-sm">or</span>
          <div className="flex-1 h-px bg-black"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200 transition duration-300">
            <FcGoogle size={20} />
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300">
            <FaFacebook size={20} />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

export default main
