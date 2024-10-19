import React from "react"
import original100 from "../images/100_original.svg"
import { BsPatchCheck } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-12 mt-16 border-t-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Online Shopping */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">
              Online Shopping
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Apple
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Realme
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Xiaomi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  ASUS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Lenovo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  OnePlus
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Policies */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">
              Customer Policies
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  T&C
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Cancellation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Reach Us */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Reach Us</h3>
            <p className="text-gray-600">
              Email:{" "}
              <a
                href="mailto:support@refitglobal.com"
                className="hover:text-gray-900"
              >
                support@refitglobal.com
              </a>
            </p>
            <p className="text-gray-600">
              Phone:{" "}
              <a href="tel:+919355177199" className="hover:text-gray-900">
                +91 9355177199
              </a>
            </p>

            <div className="mt-4">
              <h4 className="text-sm font-bold uppercase mb-2">
                Keep in Touch
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: 100% Original and Quality Check */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center gap-2">
              <img src={original100} className="w-14"/>
              <h3 className="text-sm font-bold uppercase mt-3">
                100% Original
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <BsPatchCheck size={55} color="#6d6d6d"/>
              <h3 className="text-sm font-bold uppercase mt-3">
                47 Quality Check
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
