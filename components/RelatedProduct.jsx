import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';
import Link from "next/link";

const RelatedProduct = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1023, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        },      
    };

    return (
        <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
            <div className="text-2xl font-bold mb-5">
                You Might Also Like
            </div>
            <Carousel responsive={responsive} containerClass="-mx-[10px]" itemClass="px-[10px]">
              <Link href="/">
                <div>
                  <img className="w-full" src="/assets/menu1.jpg" alt="Product Image" />
                </div>
                <div className="text-[20px] grid grid-cols-1 lg:grid-cols-1 md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                  <h3>King's Chicken <br/> [ Rasa Baru ]</h3>
                </div>
              </Link>

              <Link href="/">
                <div>
                  <img className="w-full" src="/assets/menu2.jpg" alt="Product Image" />
                </div>
                <div className="text-[20px] grid grid-cols-1 lg:grid-cols-1 md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                  <h3>Special Menu</h3>
                </div>
              </Link>

              <Link href="/">
                <div>
                  <img className="w-full" src="/assets/menu3.jpg" alt="Product Image" />
                </div>
                <div className="text-[20px] grid grid-cols-1 lg:grid-cols-1 md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                  <h3>Tropical Whopper <br/> [ Limited Time ]</h3>
                </div>
              </Link>

              <Link href="/">
                <div>
                  <img className="w-full" src="/assets/menu4.jpg" alt="Product Image" />
                </div>
                <div className="text-[20px] grid grid-cols-1 lg:grid-cols-1 md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                  <h3>Friyay Chicken</h3>
                </div>
              </Link>

              <Link href="/">
                <div>
                  <img className="w-full" src="/assets/menu5.jpg" alt="Product Image" />
                </div>
                <div className="text-[20px] grid grid-cols-1 lg:grid-cols-1 md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                  <h3>Bk App Exclusive</h3>
                </div>
              </Link>

            </Carousel>
        </div>
    );
};

export default RelatedProduct;