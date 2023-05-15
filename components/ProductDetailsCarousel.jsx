import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
    <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel" 
    >
        <img src=" /assets/menu1.jpg" />
        <img src=" /assets/menu2.jpg" />
        <img src=" /assets/menu3.jpg" />
        <img src=" /assets/menu4.jpg" />
        <img src=" /assets/menu5.jpg" />
        <img src=" /assets/menu6.jpg" />
        <img src=" /assets/menu7.jpg" />
    </Carousel>
  </div>;
};

export default ProductDetailsCarousel