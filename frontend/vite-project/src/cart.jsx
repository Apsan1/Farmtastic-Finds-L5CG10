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
    const price = product.price.replace("/kg", "")*product.totalQuantity;
    total += parseInt(price);
  });
  return total;
}
const handleSubmit = () => {
  
  window.location.href = `/checkout`;
};

const Cart = () => {
  const total = fetchTotal();
  useEffect(() => {
    // Apply overflow: hidden to the body element only on desktops
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // Adjust the minimum width as needed for desktops
    if (mediaQuery.matches) {
      document.body.style.overflow = "hidden";
    }

    // Remove overflow: hidden from the body element when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <>
    <div className="xl:w-90 phone:w-full md:ml-10 pt-3 pb-10">
  <div className="lg:mt-0 flex lg:justify-start phone:justify-end phone:mr-2">
    <button className="trending_btn" onClick={handleShopClick}>
      Back
    </button>
  </div>
  <div className="flex items-center justify-center">
    <h1 className="text-2xl font-semibold text-gray-900">My Cart</h1>
  </div>
  <div className="mt-0 md:mt-3 flex md:flex-row phone:flex-col gap-10">
    <div className="bg-white md:h-[75vh] phone:h-[50vh] shadow-2xl rounded-lg ml-0 overflow-y-auto">
          <ul className="-my-2">
            <li className="flex flex-col py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
              <CartCard />
            </li>
          </ul>
    </div>
    <div className="md:w-[500px] phone:w-full items-center justify-center">
      <div className="flex items-center justify-center flex-row">
        <p className="text-3xl font-medium text-gray-900">Total: </p>
        <p className="md:ml-2 text-3xl font-semibold text-gray-900">
          <span className="text-s font-light text-gray-600">Rs. </span>
          {total}
        </p>
      </div>
      <div className="mt-6 text-center flex phone:items-center phone:justify-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="group hover:scale-110 transition-transform flex xl:w-60 items-center justify-center rounded-md trending_btn px-10 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:trending__btn"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Cart;
