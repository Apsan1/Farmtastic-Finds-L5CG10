import React from 'react'
import  './item'
const items = (props) => {
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`}></Link> <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
      <div className="item-price-new">
        ${props.new_price}
    </div>
    <div className="item-price-old">
        ${props.old_price}
    </div>
    </div>
    </div>
  )
}

export default items
