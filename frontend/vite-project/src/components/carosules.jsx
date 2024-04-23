import React from 'react';
import Slider from 'react-slick'; // Import Slider component from react-slick library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function carosules() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-1/2 m-auto">
      <div className="mt-20">
        <Slider {...sliderSettings}>
          {data.map((d, index) => (
            <div key={index} className="bg-white h-[330px] text-black rounded-xl">
              <div className="rounded-t-xl bg-green-500 flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.price}</p>
                <button className="bg-orange-400 text-white text-lg px-5 py-1 rounded-xl">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Orange`,
    img: `/images/product_1.png`,
    price: 'Rs.120/kg'
  },
  {
    name: `Grapes`,
    img: `/images/product_3.png`,
    price: 'Rs.150/kg'
  },
  {
    name: `Strawberry`,
    img: `/images/product_4.png`,
    price: 'Rs.200/kg'
  }
];

export default carosules;
