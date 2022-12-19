import React from 'react'
import '../styles/ProductReviewsCard.css'
function ProductReviewsCard({review,name,price,image,index}) {
  return (
    <div className='ProductReviewsCard'>
        <img src={image} alt="" />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>

    </div>
  )
}

export default ProductReviewsCard