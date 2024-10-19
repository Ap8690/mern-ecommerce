import React from "react"
import NavBar from "../components/Navbar"
import Products from "../components/Products"
import Sidebar from "../components/Sidebar"
import Cart from "../components/Cart"

const ProductsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-10">
        <Products />
      </div>
      <Sidebar />
      <Cart />
    </div>
  )
}

export default ProductsPage
