import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProduct from '@/components/RelatedProduct'

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
        <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">

                {/* left column start */}
                <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                    <ProductDetailsCarousel>

                    </ProductDetailsCarousel>
                </div>
                {/* left column end */}

                {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* Tittle start */}
                            <div className="text-[34px] font-semibold mb-2">
                                Jordan Retro 6 G
                            </div>
                            {/* Product Subtittle */}
                            <div className="text-lg font-semibold mb-5">
                                Men&apos;s Golf Shoes
                            </div>
                            <div className="text-lg font-semibold">
                                Rp. 1.969.500-, 
                            </div>
                            <div className="text=md font-medium text-black/[0.5]">
                                incl. of taxes
                            </div>
                            <div className="text-md font-medium text-black/[0.5] mb-20">
                                {`(Also includes all applicable duties)`}
                            </div>

                            {/* Product size start */}
                            <div className="mb-10">
                                {/* Heading Start */}
                                <div className="flex justify-between mb-2">
                                    <div className="text-md font-semibold">
                                        Select Size
                                    </div>
                                    <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                        Select Guide
                                    </div>
                                </div>            
                                {/* Heading End */}

                                {/* Size Start */}
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                        UK 6
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        UK 6.5
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        UK 7
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        UK 7.5
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        UK 8
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        UK 8.5
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        UK 9
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        UK 9.5
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        UK 10
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                        UK 10.5
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                        UK 11
                                    </div>
                                </div>
                                {/* Size End */}

                                {/* Error Start */}
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                                {/* Error End */}
                            <div>
                            {/* Product size end */}

                            {/* Add to Cart Button Start  */}
                            <div className="mt-8">
                                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                                    Add to Cart
                                </button>
                            </div>
                            {/* Add to Cart Button End  */}

                            {/* Wishlist Button Start */}
                                <button className="w-full py-4 rounded-full border border-black 
                                text-lg font-medium transition-transform active:scale-95 flex items-center 
                                justify-center gap-2 hover:opacity-75 mb-10">
                                    Wishlist
                                    <IoMdHeartEmpty size={20}/>
                                </button>
                            {/* Wishlist Button End */}

                            <div >
                                <div className="text-lg font-bold mb-5">
                                    Product Details
                                </div>
                                <div className="text-md mb-5">
                                    Feel unbeatable from the tee box to the final
                                    putt in a design ithat's pure earlu MJ: speed, 
                                    class and laden with true early '90s touches 
                                    like visible Air and a translucent rubber sole
                                    that continue to stand the test of time. This
                                    model fuses the strut of 1st MJ's championshop
                                    with some of our best golf technology, helping
                                    you make a statment of confidance whe it comes
                                    time to tame the course.
                                </div>
                                <div className="text-md mb-5">
                                    Feel unbeatable from the tee box to the final
                                    putt in a design ithat's pure earlu MJ: speed, 
                                    class and laden with true early '90s touches 
                                    like visible Air and a translucent rubber sole
                                    that continue to stand the test of time. This
                                    model fuses the strut of 1st MJ's championshop
                                    with some of our best golf technology, helping
                                    you make a statment of confidance whe it comes
                                    time to tame the course.
                                </div>
                            </div>

                        </div>
                        {/* right column end */}
                    </div>
                </div>
            </div>

            <RelatedProduct/>
        </Wrapper>
    </div>
  )
}

export default ProductDetails