// import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import {addToCart} from '../redux/actions/cartActions';

// const Products = (props) => {
// 	const productDetails = props.details.data;
// 	const {_id,price,title, meta: {image},description} = productDetails;
// 	const [itemQty, setItemQty] = useState(1);
// 	const dispatch = useDispatch();
// 	const addToCartHandle = (product) => {
// 		dispatch(addToCart(product,itemQty));
// 	}

// 	const handleItemQty = (e) =>{
// 		setItemQty(e.target.value)
// 	}
// 	return(
// 			<>
// 			    <section className="single-product section">
// 			        <div className="section-center single-product-center">
// 			          <img src={image} className="single-product-img img" alt="" />
// 			          <article className="single-product-info">
// 			            <div>
// 			              <h2 className="single-product-title">{title}</h2>
// 			              <p className="single-product-company text-slanted">by marcos</p>
// 			              <span className="single-product-price">${price}</span>
// 			              <div className="single-product-colors">
// 			                <span className="product-color" />
// 			                <span className="product-color product-color-red" />
// 			              </div>
// 			              <p className="single-product-desc">
// 			                {description}
// 			              </p>
// 			              <p className="item-qty">
// 			              	<select onChange={handleItemQty} defaultValue={itemQty}>
// 							    <option value="1">1</option>
// 							    <option value="2">2</option>
// 							    <option value="3">3</option>
// 							    <option value="4">4</option>
// 							    <option value="5">5</option>
// 							    <option value="6">6</option>
// 							    <option value="7">7</option>
// 							    <option value="8">8</option>
// 							    <option value="9">9</option>
// 							    <option value="10">10</option>
// 							</select>
// 			              </p>
// 			              <button className="addToCartBtn btn" data-id="id" onClick={() => addToCartHandle(productDetails)}>add to cart</button>
// 			            </div>
// 			          </article>
// 			        </div>
// 			      </section>
// 			</>
// 		)
// }

// export default Products;

import React, {useState} from "react"

const Products = () => {
  const [selectedGrade, setSelectedGrade] = useState("Very Good")
  const [selectedSize, setSelectedSize] = useState("8GB|128GB")
  const [price, setPrice] = useState(18199)
  const [selectedPayment, setSelectedPayment] = useState("EMI Available")
  const [selectedImage, setSelectedImage] = useState(
    "https://dummyimage.com/600x400/000/fff&text=Phone+Front"
  )

  const handleGradeChange = (grade, price) => {
    setSelectedGrade(grade)
    setPrice(price)
  }

  const handleSizeChange = size => {
    setSelectedSize(size)
  }

  const handlePaymentChange = payment => {
    setSelectedPayment(payment)
  }

  const handleImageClick = image => {
    setSelectedImage(image)
  }

  return (
    <div className="flex flex-col lg:flex-row p-8">
      {/* Product Images */}
      <div className="w-full lg:w-1/2 p-4">
        <img
          src={selectedImage}
          alt="Selected Phone"
          className="w-full h-auto"
        />
        <div className="flex mt-4 space-x-4">
          <img
            src="https://dummyimage.com/100x100/000/fff&text=Phone+1"
            alt="Phone Thumbnail 1"
            className="w-20 h-20 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "https://dummyimage.com/600x400/000/fff&text=Phone+1"
              )
            }
          />
          <img
            src="https://dummyimage.com/100x100/000/fff&text=Phone+2"
            alt="Phone Thumbnail 2"
            className="w-20 h-20 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "https://dummyimage.com/600x400/000/fff&text=Phone+2"
              )
            }
          />
          <img
            src="https://dummyimage.com/100x100/000/fff&text=Phone+3"
            alt="Phone Thumbnail 3"
            className="w-20 h-20 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "https://dummyimage.com/600x400/000/fff&text=Phone+3"
              )
            }
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">OnePlus 9R Refurbished</h2>

        {/* Product Rating */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-600">(4 reviews)</span>
          <a href="#reviews" className="text-teal-500 underline">
            Read Reviews
          </a>
        </div>

        <p className="text-3xl text-green-600 mt-2">
          ₹{price}
          <span className="ml-2 text-red-500">-55%</span>{" "}
          <del className="text-gray-500">₹39,999</del>
        </p>
        <p className="text-lg mt-2">or Pay ₹855.67 / month</p>
        {/* Color Selector */}
        <div className="mt-6">
          <h4 className="text-lg font-medium">Color</h4>
          <p className="mt-2">Carbon Black</p>
        </div>

        {/* Grade Selector */}
        <div className="mt-6">
          <h4 className="text-lg font-medium">Grade</h4>
          <div className="flex space-x-4 mt-2">
            <button
              className={`${
                selectedGrade === "Very Good"
                  ? "border-green-500"
                  : "border-gray-300"
              } border-2 px-4 py-2 rounded-md`}
              onClick={() => handleGradeChange("Very Good", 18199)}
            >
              Very Good ₹18,199
            </button>
            <button
              className={`${
                selectedGrade === "Good"
                  ? "border-green-500"
                  : "border-gray-300"
              } border-2 px-4 py-2 rounded-md`}
              onClick={() => handleGradeChange("Good", 17499)}
            >
              Good ₹17,499
            </button>
            <button
              className={`${
                selectedGrade === "SuperB"
                  ? "border-green-500"
                  : "border-gray-300"
              } border-2 px-4 py-2 rounded-md`}
              onClick={() => handleGradeChange("SuperB", 19099)}
            >
              SuperB ₹19,099
            </button>
          </div>
        </div>
        {/* Size Selector */}
        <div className="mt-6">
          <h4 className="text-lg font-medium">Size</h4>
          <div className="flex space-x-4 mt-2">
            <button
              className={`${
                selectedSize === "8GB|128GB"
                  ? "border-green-500"
                  : "border-gray-300"
              } border-2 px-4 py-2 rounded-md`}
              onClick={() => handleSizeChange("8GB|128GB")}
            >
              8GB|128GB
            </button>
            <button
              className={`${
                selectedSize === "12GB|256GB"
                  ? "border-green-500"
                  : "border-gray-300"
              } border-2 px-4 py-2 rounded-md`}
              onClick={() => handleSizeChange("12GB|256GB")}
            >
              12GB|256GB
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-medium">Payment Options</h4>
          <div className="flex space-x-4 mt-4">
            {/* EMI Available Option */}
            <div
              className={`cursor-pointer border-2 px-4 py-2 rounded-md ${
                selectedPayment === "EMI Available"
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
              onClick={() => handlePaymentChange("EMI Available")}
            >
              <div className="w-auto">
                <div className="flex">
                  <span>
                    <img alt="credit"></img>
                  </span>
                  <span className="ml-2">EMI Available</span>
                </div>
                <div className="flex justify-between">
                  <div>Price</div>
                  <div>Rs 2500</div>
                </div>
                <div className="flex justify-between">
                  <div>Discount</div>
                  <div>Rs 2500</div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div>Best Price</div>
                  <div>Rs 2500</div>
                </div>
              </div>
            </div>

            {/* UPI/Net Banking Option */}
            <div
              className={`cursor-pointer border-2 px-4 py-2 rounded-md ${
                selectedPayment === "UPI/Net Banking"
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
              onClick={() => handlePaymentChange("UPI/Net Banking")}
            >
              <div className="w-auto">
                <div className="flex">
                  <span>
                    <img alt="credit"></img>
                  </span>
                  <span className="ml-2">UPI Offers</span>
                </div>
                <div className="flex justify-between">
                  <div>Price</div>
                  <div>Rs 2500</div>
                </div>
                <div className="flex justify-between">
                  <div>Discount</div>
                  <div>Rs 2500</div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div>Best Price</div>
                  <div>Rs 2500</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other details (Color, Size, Payment Options) */}
        {/* ... existing code here ... */}

        {/* Product Highlights */}
        <div className="mt-6">
          <h4 className="text-lg font-medium">Product Highlights</h4>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center space-x-2">
              <img
                src="https://dummyimage.com/24x24/000/fff&text=H"
                alt="Highlight Icon"
                className="w-6 h-6"
              />
              <span>High Resolution Display</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="https://dummyimage.com/24x24/000/fff&text=B"
                alt="Battery Icon"
                className="w-6 h-6"
              />
              <span>Long Battery Life</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="https://dummyimage.com/24x24/000/fff&text=C"
                alt="Charging Icon"
                className="w-6 h-6"
              />
              <span>Fast Charging</span>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="https://dummyimage.com/24x24/000/fff&text=W"
                alt="Weight Icon"
                className="w-6 h-6"
              />
              <span>Lightweight Design</span>
            </li>
          </ul>
        </div>

        {/* Review Section */}
        <div id="reviews" className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>

          {/* Individual Review */}
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="font-bold">John Doe</span>
            </div>
            <p className="mt-2">
              "Great product! Works perfectly, and the price is unbeatable."
            </p>
          </div>

          {/* Add more reviews here */}
        </div>

        {/* Actions */}
        <div className="mt-6 flex space-x-4">
          <button className="w-full py-3 bg-gray-200 hover:bg-gray-300 rounded-md">
            Add to Cart
          </button>
          <button className="w-full py-3 bg-green-500 text-white hover:bg-green-600 rounded-md">
            Buy It Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
