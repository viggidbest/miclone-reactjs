import React from 'react'
import Corousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

function Banner({banner}) {
  return (
    <div>
         <Corousel>
       {
       
       banner.end.map((item,index)=>(
        <Corousel.Item key={item.image} id="banner" interval={1000} >
            <img id="bannerImage" className="d-block w-100" src={item.image} alt="" />
            <Corousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read More</u>
            </Corousel.Caption>
        </Corousel.Item>
       )

       )
       
       }
       
        
        
    </Corousel>
    </div>
  )
}

export default Banner