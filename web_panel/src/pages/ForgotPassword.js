import React from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Cart from "../components/Cart"

const ForgotPassword = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50 ">
        <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">

          <h2 className="text-center text-2xl font-bold text-gray-900">
            Forgot Password
          </h2>
          <p className="text-center text-sm text-gray-600">
            Enter your email to reset your password
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-opacity-90 focus:outline-none"
              >
                Reset
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-600">
            Remembered?{" "}
            <Link to="/login" className="font-medium text-blue-400 hover:text-indigo-500">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Sidebar />
      <Cart />
    </>
  )
}

export default ForgotPassword
