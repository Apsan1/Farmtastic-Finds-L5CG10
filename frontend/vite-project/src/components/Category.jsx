
import CategoryCard from "./CategoryCard"
import { fetchCategories } from "./fetchproducts"
fetchCategories().then(data => console.log(data));
const data=[
    {
    id: 0,
    name: "Fresh Fruits",
    count:"9 Products",
    img:"/images/category__1.webp"
    },
    {
    id: 1,
    name: "Green Veggies",
    count:"7 Products",
    img:"/images/category__2.webp"
    },
        {
    id: 2,
    name: "Fish and meats",
    count:"9 Products",
    img:"/images/category__5.webp"
    },
        {
    id: 3,
    name: "Breakfast and Breads",
    count:"9 Products",
    img:"/images/category__4.webp"
    },
        {
    id: 4,
    name: "Fish and Meats",
    count:"9 Products",
    img:"/images/category__5.webp"
    },
        {
    id: 5,
    name: "Eggs",
    count:"9 Products",
    img:"/images/category__6.webp"
    },
        {
    id: 6,
    name: "Greens",
    count:"9 Products",
    img:"/images/category__2.webp"
    }, 
        {
    id: 7,
    name: "Fresh Fruits",
    count:"9 Products",
    img:"/images/category__1.webp"
    },
]
const Category = () => {
  return( <div className="container ">
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.map((el) => (
    <CategoryCard 
    key={el.id}
    img={el.img}
    name={el.name}
    count={el.count}
    />
))}
  </div>
  </div>
  )
}

export default Category