import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../Banner/slider/banner1.jpg';
import banner2 from '../Banner/slider/banner2.jpg';
import banner3 from '../Banner/slider/banner3.jpg';
const Banner = () => {
    
    return (
        <div>
        <Carousel variant="dark">
  <Carousel.Item>
   <img
     className="d-block w-100"
    
     src={banner1}
     alt="First slide"
   />
   <Carousel.Caption style={{backgroundColor:'#c0b4b4', borderRadius:'10px'}}>
   <h2>HEALTH & MEDICAL CENTER</h2>
     
   </Carousel.Caption>
   </Carousel.Item>
               
  <Carousel.Item>
   <img
     className="d-block w-100"
    
     src={banner2}
     alt="Second slide"
   />
   <Carousel.Caption style={{backgroundColor:'#E2E2E2', borderRadius:'10px'}}>
     <h2>HEALTH & MEDICAL SERVICES</h2>
     
   </Carousel.Caption>
   </Carousel.Item>
               
 <Carousel.Item>
   <img
     className="d-block w-100"
     
     src={banner3}
     alt="Third slide"
   />

   <Carousel.Caption style={{backgroundColor:'#C6E5F3', borderRadius:'10px'}}>
   <h2>HEALTH & MEDICAL TREATMENT</h2>
     
   </Carousel.Caption>
 </Carousel.Item>
   </Carousel>   
       </div>
    );
};

export default Banner;