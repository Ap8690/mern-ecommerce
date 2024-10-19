import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 3,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 1,
    arrows: false,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
    arrows: false,
  },
}

// ReviewCard Component
const ReviewCard = ({image, name, location, rating, review}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 flex flex-col justify-between h-full">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold mb-0">{name}</h4>
          <p className="text-gray-600 mb-0">{location}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-4xl text-teal-500 mb-2">“</div>
        <div className=" bg-gray-100 p-2 rounded-full flex items-center">
          <span className="text-sm font-bold">{rating}</span>
          <span className="ml-1 text-yellow-400">★</span>
        </div>
      </div>
      <p className="text-gray-700">{review}</p>
    </div>
  )
}

// Reviews Component
const Reviews = () => {
  const reviewData = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rahul Sharma",
      location: "Meerut, Uttar Pradesh",
      rating: "4.5",
      review:
        "I've been eyeing a new phone with a top-notch camera for quite some time. Finally, I opted for a ReFit refurbished OnePlus smartphone that fits my budget.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Vivek Singh",
      location: "Bhopal",
      rating: "5",
      review:
        "ReFit Global offers refurbished smartphones backed by a robust 6-month warranty. Rest assured, if your phone experiences any malfunctions, ReFit has you covered.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Kashneet Singh",
      location: "Punjab",
      rating: "4",
      review:
        "iPhone 13: Sleek design, powerful performance, stunning camera. Improved battery life. Worth the investment for its overall excellence.",
    },
    // Add more reviews as needed
  ]

  return (
    <section className="bg-gray-900 py-16 mt-10">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold mb-2 text-center">
            Happy Customers trust us to buy refurbished phones
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Get inspired by other customers
          </p>
        </div>

        <Carousel
          responsive={responsive}
          // autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          showDots={true}
          arrows={true}
          containerClass="carousel-container"
          itemClass="px-2"
        >
          {reviewData.map((review, index) => (
            <ReviewCard
              key={index}
              image={review.image}
              name={review.name}
              location={review.location}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Reviews
