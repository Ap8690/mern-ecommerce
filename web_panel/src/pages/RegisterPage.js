import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Register, RegisterReset } from "../redux/actions/userActions";
import logo from "../images/logo.svg"

const RegisterPage = ({ history }) => {
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { register_status } = userRegister;

  const [formState, setFormState] = useState({
    values: {},
  });

  const handleChange = (event) => {
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const { name, email, password } = formState.values;
    if (name && email && password) {
      dispatch(Register(name, email, password));
    }
  };

  useEffect(() => {
    if (register_status) {
      history.push("/");
      dispatch(RegisterReset());
    }
  }, [dispatch, register_status, history]);

  return (
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
          Create your account
        </h2>
        <p className="text-center text-sm text-gray-600">
          Join us today, it's free!
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formState.values.name || ""}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${submitted && !formState.values.name ? 'border-red-500' : ''}`}
              />
            </div>
            {submitted && !formState.values.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${submitted && !formState.values.email ? 'border-red-500' : ''}`}
              />
            </div>
            {submitted && !formState.values.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${submitted && !formState.values.password ? 'border-red-500' : ''}`}
              />
            </div>
            {submitted && !formState.values.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-opacity-90 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-400 hover:text-indigo-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
