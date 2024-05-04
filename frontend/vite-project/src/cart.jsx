import {useEffect} from "react";
import CartCard from "./components/CartCard.jsx";

function handleShopClick() {
  console.log("Shop clicked");
  window.location.href = "/shop";
}

function fetchTotal() {
  const cart = JSON.parse(localStorage.getItem("productData")) || [];
  let total = 0;
  cart.forEach((product) => {
    //remove /kg from the price
    const price = product.price.replace("/kg", "");
    total += parseInt(price);
  });
  return total;
}

const Cart = () => {
  const total = fetchTotal();
  useEffect(() => {
    // Apply overflow: hidden to the body element when the component mounts
    document.body.style.overflow = "hidden";

    // Remove overflow: hidden from the body element when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <>
    <div className="w-auto ml-10 pt-3 pb-10">
  <div className="lg:mt-0">
    <button className="trending_btn" onClick={handleShopClick}>
      Back
    </button>
  </div>
  <div className="flex items-center justify-center">
    <h1 className="text-2xl font-semibold text-gray-900">My Cart</h1>
  </div>
  <div className="mt-0 md:mt-3 flex flex-row gap-10">
    <div className="bg-white w-full h-[75vh] shadow-2xl rounded-lg ml-0 overflow-y-auto">
          <ul className="-my-2">
            <li className="flex flex-col py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
              <CartCard />
            </li>
          </ul>
    </div>
    <div className="w-[500px] justify-center">
      <div className="flex items-center justify-start flex-row">
        <p className="text-3xl font-medium text-gray-900">Total: </p>
        <p className="ml-2 text-2xl font-semibold text-gray-900">
          <span className="text-s font-bold text-gray-400">$</span>
          {total}
        </p>
      </div>
      <div className="mt-6 text-center">
        <button
          type="button"
          className="group inline-flex w-60 items-center justify-center rounded-md trending_btn px-10 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:trending__btn"
        >
          Checkout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Cart;
