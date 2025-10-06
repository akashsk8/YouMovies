import React from 'react'
import Link from 'next/link'
function main() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-md bg-yellow-200 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-black mb-6">Register</h1>
        <form action="/register" method="post" className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="rounded-md bg-black bg-opacity-70 text-white px-3 py-2 outline-none transition duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="rounded-md bg-black bg-opacity-70 text-white px-3 py-2 outline-none  transition duration-200"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="rounded-md bg-black bg-opacity-70 text-white px-3 py-2 outline-none transition duration-200"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="rounded-md bg-black bg-opacity-70 text-white border border-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
          />
          <div className="text-black text-center text-sm">
            Already have an account?{' '}
            <Link href="./Login" className="text-blue-800 hover:underline">
              Login
            </Link>
          </div>
          <input
            type="submit"
            value="Register"
            className="bg-black text-white px-5 py-2 rounded-md cursor-pointer hover:bg-yellow-500 transition duration-300 w-fit mx-auto"
          />
        </form>
      </div>
    </div>
  )
}

export default main
