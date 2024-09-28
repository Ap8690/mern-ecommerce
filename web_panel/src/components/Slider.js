import React from 'react';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../images/products/spacejoy.jpg';
import slider2 from '../images/products/michael-warf.jpg';
import slider3 from '../images/products/nathan-fertig.jpg';
import slider4 from '../images/products/toa-heftiba.jpg';

// Custom Arrow Components with Tailwind
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-20 text-white p-2 rounded-full cursor-pointer z-10`}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-10 text-white p-2 rounded-full cursor-pointer z-10`}
      onClick={onClick}
    />
  );
};

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <section className="mt-16 ml-[-10px]">
        <div className="">
          <SliderSlick {...settings}>
            <div className="h-[100%]">
              <img src={slider1} alt="Slider 1" className="w-full" />
            </div>
            <div>
              <img src={slider2} alt="Slider 2" className="w-full" />
            </div>
            <div>
              <img src={slider3} alt="Slider 3" className="w-full" />
            </div>
            <div>
              <img src={slider4} alt="Slider 4" className="w-full" />
            </div>
          </SliderSlick>
        </div>
      </section>
    </>
  );
};

export default Slider;
