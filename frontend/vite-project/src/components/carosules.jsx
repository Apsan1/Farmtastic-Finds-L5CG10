import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousels() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full mx-auto max-w-screen-lg mt-10 pl-12 pr-8 relative ">
      <Slider {...sliderSettings}>
        {data.map((d, index) => (
          <div
            key={index}
            className="bg-white h-full text-black rounded-xl overflow-hidden shadow-md"
          >
            <div className="rounded-t-xl bg-green-700 flex justify-center items-center">
              <img
                src={d.img}
                alt={d.name}
                className="h-44 w-44 rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.price}</p>
              <button className="bg-orange-400 text-white text-lg px-5 py-1 rounded-xl">
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    name: `Orange`,
    img: `/images/product_1.png`,
    price: "Rs.120/kg",
  },
  {
    name: `Grapes`,
    img: `/images/product_3.png`,
    price: "Rs.150/kg",
  },
  {
    name: `Strawberry`,
    img: `/images/product_4.png`,
    price: "Rs.200/kg",
  },
];

const CustomPrevArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange-400 text-white rounded-full p-2 z-10"
  >
    <FaArrowLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-400 text-white  rounded-full p-2"
  >
    <FaArrowRight />
  </button>
);

export default Carousels;
