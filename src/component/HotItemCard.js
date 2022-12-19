
import React from 'react'
import '../styles/HotItemCard.css'
function HotItemCard({image,index,name,price}) {
  return (
    <div className='HotItemCard'>
            <img src={image} alt="" />
            <p>{name}</p>
            <span>{price}</span>
    </div>
  )
}

export default HotItemCard