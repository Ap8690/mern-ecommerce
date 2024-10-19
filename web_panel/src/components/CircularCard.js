import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const CircularOffers = () => {
  const offers = [
    { id: 1, imgSrc: 'https://via.placeholder.com/150', label: 'Refurbished Mobiles', link: '/refurbished-mobiles' },
    { id: 2, imgSrc: 'https://via.placeholder.com/150', label: 'Top Offers', link: '/top-offers' },
    { id: 3, imgSrc: 'https://via.placeholder.com/150', label: 'Deal of the Day', link: '/deal-of-the-day' },
    { id: 4, imgSrc: 'https://via.placeholder.com/150', label: 'Limited Time Deal', link: '/limited-time-deal' },
    { id: 5, imgSrc: 'https://via.placeholder.com/150', label: 'Apple', link: '/apple' },
    { id: 6, imgSrc: 'https://via.placeholder.com/150', label: 'Oneplus', link: '/oneplus' },
    { id: 7, imgSrc: 'https://via.placeholder.com/150', label: 'Vivo', link: '/vivo' },
    { id: 8, imgSrc: 'https://via.placeholder.com/150', label: 'Realme', link: '/realme' },
    { id: 9, imgSrc: 'https://via.placeholder.com/150', label: 'Xiaomi', link: '/xiaomi' },
    { id: 10, imgSrc: 'https://via.placeholder.com/150', label: 'Samsung', link: '/samsung' },
  ];

  return (
    <div className="flex justify-around items-center flex-wrap gap-4 p-6 hover:cursor-pointer">
      {offers.map((offer) => (
        <Link to={offer.link} key={offer.id} className="flex flex-col items-center">
          <img
            src={offer.imgSrc}
            alt={offer.label}
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover"
          />
          <p className="mt-2 text-center text-sm font-medium">{offer.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default CircularOffers;
