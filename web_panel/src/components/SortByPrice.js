import React from 'react';

// PriceCard Component (Reusable)
const PriceCard = ({ price, image, bgColor, circleColor }) => {
  return (
    <div
      className={`relative rounded-lg p-6 ${bgColor} flex items-center justify-between h-full text-white overflow-hidden shadow-md`}
      style={{ minHeight: '200px', borderRadius: '20px' }} // Ensure consistent height and rounded corners
    >
      {/* Left Side: Text */}
      <div>
        <p className="text-2xl font-medium">UNDER</p>
        <h2 className="text-4xl font-bold">₹{price}</h2>
        <button className="mt-4 bg-black py-2 px-4 rounded-full text-white">Shop Now</button>
      </div>

      {/* Background Circle - Moved Further Right */}
      <div className={`absolute right-[-160px] bottom-10 ${circleColor} rounded-full w-72 h-72 opacity-50`} />

      {/* Right Side: Image Centered Vertically and Larger */}
      <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2">
        <img src={image} alt={`Phone priced under ₹${price}`} className="w-36 h-36 object-contain" />
      </div>
    </div>
  );
};

// ShopByPrice Section
const ShopByPrice = () => {
  const priceCardsData = [
    {
      price: '9,999',
      image: 'https://opsg-img-cdn-gl.heytapimg.com/epb/202407/25/XR1jPDUegtdkCOl5.png', // Replace with actual image path
      bgColor: 'bg-gradient-to-r from-[#e972bc] to-[#f8b3d7]', // Gradient from bold pink to lighter pink
    },
    {
      price: '15,999',
      image: 'https://opsg-img-cdn-gl.heytapimg.com/epb/202407/25/XR1jPDUegtdkCOl5.png', // Replace with actual image path
      bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300', // Gradient from bold yellow to lighter yellow
    },
    {
      price: '20,999',
      image: 'https://opsg-img-cdn-gl.heytapimg.com/epb/202407/25/XR1jPDUegtdkCOl5.png', // Replace with actual image path
      bgColor: 'bg-gradient-to-r from-orange-500 to-orange-300', // Gradient from bold orange to lighter orange
    },
    {
      price: '24,999',
      image: 'https://opsg-img-cdn-gl.heytapimg.com/epb/202407/25/XR1jPDUegtdkCOl5.png', // Replace with actual image path
      bgColor: 'bg-gradient-to-r from-green-500 to-green-300', // Gradient from bold green to lighter green
    },
    // Add more cards as needed
  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 md:text-3xl text-center">Shop by Price</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {priceCardsData.map((card, index) => (
          <PriceCard
            key={index}
            price={card.price}
            image={card.image}
            bgColor={card.bgColor}
            circleColor={card.circleColor}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopByPrice;
