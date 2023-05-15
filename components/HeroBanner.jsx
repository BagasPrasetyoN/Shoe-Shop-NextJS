import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RiArrowRightSLine } from "react-icons/ri";

const HeroBanner = () => {
    return (
        <div className="relative text-white text-[20px] w-full mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute rounded-full bottom-0 left-[10px] md:left-[10px]  w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white opacity-30 z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <RiArrowRightSLine className="text-sm rotate-180 md:text-[32px] text-orange-500" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute rounded-full right-2 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white opacity-30 z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <RiArrowRightSLine className="text-sm md:text-[32px] text-orange-500" />
                    </div>
                )}
            >
                <div className="mb-0">
                    <img
                        src="/assets/b2.jpg"
                        className="aspect-[16/5] md:aspect-auto object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/assets/b1.jpg"
                        className="aspect-[16/5] md:aspect-auto object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/assets/b3.jpg"
                        className="aspect-[16/5] md:aspect-auto object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/assets/b4.jpg"
                        className="aspect-[16/5] md:aspect-auto object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/assets/b5.jpg"
                        className="aspect-[16/5] md:aspect-auto object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/assets/b6.jpg"
                        className="aspect-[16/5] md:aspect-auto object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/assets/b7.jpg"
                        className="aspect-[16/5] md:aspect-auto object-cover"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;