import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const Products = (props) => {
  const { _id, price, title, image } = props.detail;

  const dispatch = useDispatch();

  const addToCartHandle = (product) => {
    dispatch(addToCart(product, 1));
  };

  return (
    <article className="relative bg-white border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-h-[430px]">
      <div className="absolute top-0 left-0 bg-orange-500 text-white rounded-br-full w-14 h-14 flex items-center justify-center">
        <span className="text-lg font-semibold mr-2">-76%</span>
      </div>

      <Link to={`/product/${_id}`} title="View" className="block p-6 md:mx-2 mt-2">
        <div className="flex flex-col items-center">
          <img
            src={image}
            className="w-auto h-72 mb-4 object-contain"
            alt={title}
          />
        </div>
      </Link>

      <div className="flex justify-around mb-4">
        <footer className="ml-2 flex flex-col">
          <h5 className="text-base font-bold mb-[-2px]">{title}</h5>
          <div className="flex gap-3">
            <span className="text-sm font-medium text-gray-700">₹{price}</span>
            <span className="text-sm font-medium text-gray-400 line-through">
              ₹17000
            </span>
          </div>
        </footer>
        <button
          className="text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition duration-200"
          title="Add to Cart"
          onClick={() => addToCartHandle(props.detail)}
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </article>
  );
};

export default Products;
