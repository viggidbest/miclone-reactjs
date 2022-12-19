import React from 'react'
import Corousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'


function Slider({start}) {
    
  return (
    <Corousel>
       {
       
       start.map((item,index)=>(
        <Corousel.Item>
            <img className="d-block w-100" src={item} alt="" />
        </Corousel.Item>
       )

       )
       
       }
       
        
        
    </Corousel>
  )
}

export default Slider