import React from "react"
import slider1 from "../images/products/spacejoy.jpg"
import slider2 from "../images/products/michael-warf.jpg"
import slider3 from "../images/products/nathan-fertig.jpg"
import slider4 from "../images/products/toa-heftiba.jpg"
import FeaturedProducts from "./FeaturedProducts"
import ShopByPrice from "./SortByPrice"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Reviews from "./Reviews"
import FAQItem from "./Faq"
import CircularOffers from "./CircularCard"

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 1,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 1,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 1,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
  },
}

// Custom Arrow Components with Tailwind
const NextArrow = props => {
  const {className, onClick} = props
  return (
    <div
      className={`${className} absolute top-1/2 right-4 md:right-8 text-white p-2 rounded-full cursor-pointer z-10 hidden sm:block`} // Hidden on mobile
      onClick={onClick}
    />
  )
}

const PrevArrow = props => {
  const {className, onClick} = props
  return (
    <div
      className={`${className} absolute top-1/2 left-4 md:left-8 text-white p-2 rounded-full cursor-pointer z-10 hidden sm:block`} // Hidden on mobile
      onClick={onClick}
    />
  )
}

const HomePage = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   appendDots: dots => (
  //     <div className="mt-0 p-0">
  //       <ul className="m-0 p-0"> {dots} </ul>
  //     </div>
  //   ),
  //   customPaging: i => (
  //     <div className="w-2 h-2 bg-gray-500 rounded-full inline-block" />
  //   ),
  // }

  return (
    <div>
      {/* Responsive container with max width and centered alignment */}
      <section className="mt-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Slick Slider Component */}
          <div>
            <CircularOffers />
          </div>

          <Carousel
            // swipeable={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            showDots={true}
            responsive={responsive}
            slidesToSlide={1}
            totalItems={4}
            rewind={true}
            rewindWithAnimation={true}
          >
            <div className="h-[300px] sm:h-[500px]">
              <img
                src={slider1}
                alt="Slider 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[300px] sm:h-[500px]">
              <img
                src={slider2}
                alt="Slider 2"
                className="w-full h-full object-cover" // Adjust image scaling
              />
            </div>
            <div className="h-[300px] sm:h-[500px]">
              <img
                src={slider3}
                alt="Slider 3"
                className="w-full h-full object-cover" // Adjust image scaling
              />
            </div>
            <div className="h-[300px] sm:h-[500px]">
              <img
                src={slider4}
                alt="Slider 4"
                className="w-full h-full object-cover" // Adjust image scaling
              />
            </div>
          </Carousel>
          <div className="mx-auto max-w-screen-3xl px-4 sm:px-6 lg:px-8">
            <ShopByPrice />
            <FeaturedProducts />
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <img
                src={
                  "https://store.marvansmobile.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmarvans-ecom.appspot.com%2Fassets%252Fmarvans232323191efdbf2aa.webp&w=3840&q=75"
                }
                alt="Product Image 2"
                className="w-full h-auto mix-blend-multiply"
              />
            </div>
            <div>
              <img
                src={
                  "https://store.marvansmobile.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmarvans-ecom.appspot.com%2Fassets%252Fmarvansassets_marvansassets_marvansassets_marvanswatch18f5eb83a0718f75a556e11915ed02faa191efdc3242.webp&w=3840&q=75"
                }
                alt="Product Image 3"
                className="w-full h-auto mix-blend-multiply"
              />
            </div>
            {/* <div>
              <img
                src={
                  "https://store.marvansmobile.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmarvans-ecom.appspot.com%2Fassets%252Fmarvans224433191efdb9baf.webp&w=3840&q=75"
                }
                alt="Product Image 1"
                className="w-full h-auto mix-blend-multiply"
              />
            </div> */}
          </div>
          <Reviews />
          <FAQItem />
        </div>
      </section>
    </div>
  )
}

export default HomePage
