import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchProductsByCategory } from "./fetchproducts";

function Carousels(props) {
  // Function to handle click on product card
  function handleClickProducts(id) {
    window.location.href = `/product/${id}`; // Redirects to the product page
  }

  const category = props.category;
  const productId = props.productId;
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsByCategory(category); // Fetching product data by category
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data:", error); // Logging error if fetch fails
      }
    };
    fetchData();
  }, [category]); // Dependency array with category parameter, so useEffect runs when category changes

  // Filter products by category and remove the current product from the list
  const filteredData = productData.filter(
    (item) => item.category === category && item.id !== productId
  );

  // Determine the number of slides to show, with a minimum of 1 and a maximum of 3
  const slidesToShow = Math.min(Math.max(filteredData.length, 1), 3);

  const sliderSettings = {
    dots: true,
    infinite: filteredData.length > 1, // Set infinite to false if data length is 1
    speed: 500,
    slidesToShow: slidesToShow, // Show determined number of items at a time
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
    <div className="w-full mx-auto max-w-screen-lg mt-10 pl-12 pr-8 relative">
      {filteredData.length > 0 ? (
        <Slider {...sliderSettings}>
          {filteredData.map((d) => (
            <div
              key={d.id}
              className="bg-white h-full text-black rounded-xl overflow-hidden shadow-md"
            >
              <div className="rounded-t-xl bg-green-700 flex justify-center items-center">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-44 w-44 rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>Rs. {d.price}</p>
                <button
                  className="bg-orange-400 text-white text-lg px-5 py-1 rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickProducts(d.id);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
}

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
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-400 text-white rounded-full p-2"
  >
    <FaArrowRight />
  </button>
);

export default Carousels;