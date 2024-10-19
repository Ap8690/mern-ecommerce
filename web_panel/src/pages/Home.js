import React from "react"
import NavBar from "../components/Navbar"
import HomePage from "../components/Homepage"
import Cart from "../components/Cart"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="bg-[#eeeeee]">
      <NavBar />
      <HomePage />
      <Cart />
      <Footer />
    </div>
  )
}

export default Home
