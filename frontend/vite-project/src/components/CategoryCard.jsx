const onCategoryClick = (category) => {
    window.location.href = `/category/${category}`;
}

const CategoryCard = ({ img, name, count }) => {
    return (
      <div className="mt-4 border border-gray-300 shadow-3xl hover:border-gray-300 hover:scale-105 transition-transform rounded-lg " onClick={()=>onCategoryClick(name)}>
        <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center px-4 py-6 ">
          <h3 className="font-medium text-xl">{name}</h3>
          <p className="text-gray-500 text-[0.9rem] text-center">{count} {count === 1 ? 'Product' : 'Products'}</p>
        </div>

        <div className="flex w-100 h-50 justify-center items-center p-5">
          <img className="object-cover w-[250px] h-[150px] max-w-full max-h-full rounded-lg" src={img} alt={name} />
        </div>
        </div>
      </div>

    );
  };
  
  export default CategoryCard;
  