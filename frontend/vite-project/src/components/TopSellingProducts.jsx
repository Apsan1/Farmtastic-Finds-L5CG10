
import ProductCard from "./ProductCard"
const data=[
    { id: 0, img: "/images/product_1.png", name: "Orange", price: "Rs.120/kg"},
    { id: 1, img: "/images/product_2.png", name: "Pomegranate", price: "Rs.180/kg"},
    { id: 2, img: "/images/product_3.png", name: "Grapes", price: "Rs.110/kg"},
    { id: 3, img: "/images/product_4.png", name: "Strawberry", price: "Rs.130/kg"},
]

const Trending_products = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-medium text-2xl">Trending Products</h3>
                <p className="text-gray-600 mt-2">
                    Buy Trending products online at best prices.
                </p>
            </div>
            <div className="space-x-4 mt:8 lg:mt-0">
                <button className="trending_btn">Fruits</button>
                <button className="text-gray-600 hover:text-accent">Vegetables</button>
                <button className="text-gray-600 hover:text-accent">Bread & bakery</button>
                <button className="text-gray-600 hover:text-accent">Fish and Meats</button>
                <button className="text-gray-600 hover:text-accent">Eggs</button>
            </div>
        </div> 
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img className="w-full h-full object-cover" src="/images/j.png" alt="banner"/>
            </div>
            {data.map(el => (
            <ProductCard key={el.id}
            img={el.img}
            name={el.name}
            price={el.price} />
            ))}
        </div>
    </div>
  )
}

export default Trending_products

