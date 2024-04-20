const onCategoryClick = (category) => {
    window.location.href = `/category/${category}`;
}

const CategoryCard = ({ img, name, count }) => {
    return (
      <div className="mt-4 border border-gray-300 border-2 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg " onClick={()=>onCategoryClick(name)}>
        <div className="flex justify-between items-center p-6">
          <div className="space-y-4"></div>
          <h3 className="font-medium text-xl">{name}</h3>
          <p className="text-gray-500">{count} {count < 1?'Product': 'Products'}</p>
        </div>
        <img className="w-[100px] ml-20 " src={img} alt={name} />
      </div>
    );
  };
  
  export default CategoryCard;
  