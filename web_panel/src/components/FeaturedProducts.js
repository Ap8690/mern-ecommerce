import React, {useEffect} from "react"
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {getProducts} from "../redux/actions/productActions"
import Product from "./Product"
import Loading from "../components/Loading"

const FeaturedProducts = () => {
  const products = useSelector(state => state.allProducts.products)
  const featuredProduct = products.slice(0, 6)
  const renderList = featuredProduct.map(product => {
    return <Product detail={product} key={product._id} />
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(0, 6, "", "", ""))
  }, [])

  return (
    <>
      <section className="featured py-4 mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl text-center">
          Featured Products
        </h2>
        <div>
          {Object.keys(products).length === 0 ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {renderList}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default FeaturedProducts
