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

  useEffect(() => {}, [])

  return (
    <div className="sticky top-0 z-50 bg-white border p-2 shadow-sm">
      <div className="flex justify-between">
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="w-1/2 mx-3 mt-2">
          <ul className="flex justify-around">
            <li>
              <NavLink
                to="/products"
                exact
                activeClassName="font-bold text-blue-700"
                className="text-black"
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/category?iPhone"
                activeClassName="font-bold text-blue-700"
                className="text-black"
              >
                iPhone
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/category?iWatch"
                activeClassName="font-bold text-blue-700"
                className="text-black"
              >
                iWatch
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/category?Airpods"
                activeClassName="font-bold text-blue-700"
                className="text-black"
              >
                Airpods
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/category?Android"
                activeClassName="font-bold text-blue-700"
                className="text-black"
              >
                Android
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/category?Accessories"
                activeClassName="font-bold text-blue-700"
                className="text-black"
              >
                Accessories
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                activeClassName="font-bold text-blue-700"
                className="text-black"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            {!isLoggedin ? (
              <NavLink to="/login">Login</NavLink>
            ) : (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {userName}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink className="dropdown-item" to="#">
                      Profile
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      onClick={logoutHandler}
                      to="#"
                    >
                      Log Out
                    </NavLink>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="toggle-container">
            <button className="toggle-cart" onClick={toggleCart}>
              <i className="fas fa-shopping-cart" />
            </button>
            <span className="cart-item-count">{cartItemsCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
