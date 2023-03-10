import React from 'react'
import '../styles/NavCard.css'



function NavCard({name,price,image}) {

  return (
    <div className='NavCard'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard