import React, {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import NavBar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Cart from "../components/Cart"
import {Link} from "react-router-dom"
import {Login} from "../redux/actions/userActions"
import logo from "../images/logo.svg"

const LoginPage = ({history}) => {
  const [submitted, setSubmitted] = useState(false)
  const dispatch = useDispatch()

  const userPanelLogin = useSelector(state => state.userPanelLogin)
  const {userInfo} = userPanelLogin

  const [formState, setFormState] = useState({
    values: {},
  })

  const handleChange = event => {
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    const {email, password} = formState.values
    if (email && password) {
      dispatch(Login(email, password))
    }
  }

  useEffect(() => {
    if (typeof userInfo !== "undefined" && Object.keys(userInfo).length !== 0) {
      history.push("/")
    }
  }, [userInfo, history])

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
          <div className="flex justify-center">
            <img
              src={logo} // Replace with your logo path
              alt="logo"
              className="h-10"
            />
          </div>
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Log in to your account
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={formState.values.email || ""}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    submitted && !formState.values.email ? "border-red-500" : ""
                  }`}
                />
              </div>
              {submitted && !formState.values.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formState.values.password || ""}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    submitted && !formState.values.password
                      ? "border-red-500"
                      : ""
                  }`}
                />
              </div>
              {submitted && !formState.values.password && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-blue-400 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-opacity-90 focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-400 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <Sidebar />
      <Cart />
      {/* <Footer /> */}
    </>
  )
}

export default LoginPage
