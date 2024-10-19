import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {NavLink} from "react-router-dom"
import logo from "../images/logo.svg"
import {showCart} from "../redux/actions/cartActions"
import {logout} from "../redux/actions/userActions"

const NavBar = () => {
  const dispatch = useDispatch()
  const showCartStatus = useSelector(state => state.cart.showCart)
  const cartItems = useSelector(state => state.cart.cartItems)
  const userInfo = useSelector(state => state.userPanelLogin.userInfo)
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)
  let isLoggedin = false
  let userName = ""

  if (typeof userInfo !== "undefined" && Object.keys(userInfo).length !== 0) {
    userName = userInfo.data[0].name
    isLoggedin = true
  }

  let cartItemsCount = cartItems.reduce((total, item) => {
    return total + item.qty
  }, 0)

  const toggleCart = () => {
    dispatch(showCart(!showCartStatus))
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen)
  }

  const closeSidePanel = () => {
    setIsSidePanelOpen(false)
  }

  const toggleSearchButton = () => {
    setToggleSearch(!toggleSearch)
  }

  useEffect(() => {}, [])

  return (
    <div className="sticky top-0 z-50 bg-white border-b p-4 shadow-md">
      <div className="flex justify-between items-center bg-opacity-50">
        <div className={`lg:block md:hidden ${toggleSearch ? "hidden" : ""}`}>
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-24" />
          </NavLink>
        </div>

        {/* Main navigation - centered */}
        <div className="flex w-1/2 justify-center">
          {!toggleSearch ? (
            <div className="hidden md:flex">
              <ul className="flex space-x-6 gap-6">
                {/* Add NavLink items here */}
                <li>
                  <NavLink
                    to="/products"
                    exact
                    activeClassName="font-bold text-blue-700"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/category?iPhone"
                    activeClassName="font-bold text-blue-700"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    iPhone
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/category?iWatch"
                    activeClassName="font-bold text-blue-700"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    iWatch
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/category?Airpods"
                    activeClassName="font-bold text-blue-700"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    Airpods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/category?Android"
                    activeClassName="font-bold text-blue-700"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    Android
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/category?Accessories"
                    activeClassName="font-bold text-blue-700"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    Accessories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    activeClassName="font-bold text-blue-700"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-1 w-full justify-center">
              <input
                type="text"
                className="bg-white border shadow-md rounded-md p-2 focus:outline-none w-full md:w-1/2"
                name="name"
                placeholder="Search items ..."
                // onChange={handleChange}
                // value={formState.values.name || ""}
              />{" "}
              <div className=" shadow-md border p-2 rounded-md bg-[#a9a8a8] text-white" onClick={toggleSearchButton}>
              <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3 md:space-x-6">
          {!toggleSearch && (
            <div onClick={toggleSearchButton}>
              <i className="fas fa-search"></i>
            </div>
          )}
          {/* Cart and Login/Profile Section */}
          <div>
            {!isLoggedin ? (
              <NavLink to="/login" className="text-gray-700">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
              </NavLink>
            ) : (
              <div className="relative inline-block text-left">
                <button className="text-gray-700 focus:outline-none">
                  {userName}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <NavLink
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    to="#"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={logoutHandler}
                    to="#"
                  >
                    Log Out
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Cart Icon with item count */}
          <div className="relative">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleCart}
            >
              <i className="fas fa-shopping-cart"></i>
            </button>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </div>

          {/* Burger Menu - right side */}
          <div className="md:hidden">
            <button
              onClick={toggleSidePanel}
              className="text-2xl focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Side Panel for mobile */}
      {isSidePanelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed inset-y-0 right-0 w-64 bg-[#f0f0ed] shadow-lg z-50">
            {/* Close button */}
            <div className="flex justify-end px-4">
              <button
                onClick={closeSidePanel}
                className="text-xl focus:outline-none"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-4 border-b-0">
              <div className="mb-4 text-lg">MAIN MENU</div>
              <ul className="space-y-4">
                <li className="border-b pb-1">
                  <NavLink
                    to="/products"
                    className="text-gray-700"
                    onClick={closeSidePanel}
                  >
                    All Products
                  </NavLink>
                </li>
                <li className="border-b pb-1">
                  <NavLink
                    to="/products/category?iPhone"
                    className="text-gray-700"
                    onClick={closeSidePanel}
                  >
                    iPhone
                  </NavLink>
                </li>
                <li className="border-b pb-1">
                  <NavLink
                    to="/products/category?iWatch"
                    className="text-gray-700"
                    onClick={closeSidePanel}
                  >
                    iWatch
                  </NavLink>
                </li>
                <li className="border-b pb-1">
                  <NavLink
                    to="/products/category?Airpods"
                    className="text-gray-700"
                    onClick={closeSidePanel}
                  >
                    Airpods
                  </NavLink>
                </li>
                <li className="border-b pb-1">
                  <NavLink
                    to="/products/category?Android"
                    className="text-gray-700"
                    onClick={closeSidePanel}
                  >
                    Android
                  </NavLink>
                </li>
                <li className="border-b pb-1">
                  <NavLink
                    to="/products/category?Accessories"
                    className="text-gray-700"
                    onClick={closeSidePanel}
                  >
                    Accessories
                  </NavLink>
                </li>
                <li className="border-b pb-1">
                  <NavLink
                    to="/about"
                    className="text-gray-700"
                    onClick={closeSidePanel}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
