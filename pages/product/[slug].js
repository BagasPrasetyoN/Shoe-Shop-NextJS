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
                            King's Chicken <br/> 
                            </div>
                            {/* Product Subtittle */}
                            <div className="text-lg font-semibold mb-5">
                            [ Rasa Baru ]
                            </div>
                            <div className="text-lg font-semibold">
                                Rp. 150.000-, 
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
                                        Add Extras
                                    </div>
                                    <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                        Select Guide
                                    </div>
                                </div>            
                                {/* Heading End */}

                                {/* Size Start */}
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="border rounded-md py-4 text-center font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                        Vanilla Sundae
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        Chocolate Sundae
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        Add Jalapeno Cheese
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        Float Mocha
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        Fusion Kitkat®
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        Air Mineral
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        Large Fries
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        1 Pc Ayam
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                        Milo Dinosaur
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                        Kopi Gula Aren
                                    </div>
                                    <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                        King fusion Cookies and Cream
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


                            <div >
                                <div className="text-[28px] mt-6 text-amber-600 font-bold mb-5">
                                    Paket Crispy 1
                                </div>
                                <div className="text-md mb-5 text-justify">
                                1 pc Ayam Crispy + Nasi + Jasmine Tea Medium <br/>
                                [ Rasa Baru, Enaknya sampe gigitan terakhir ! ] 
                                
                                𝘗𝘰𝘵𝘰𝘯𝘨𝘢𝘯 𝘢𝘺𝘢𝘮 𝘺𝘢𝘯𝘨 𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢 𝘵𝘦𝘳𝘨𝘢𝘯𝘵𝘶𝘯𝘨 𝘬𝘦𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢𝘢𝘯 𝘥𝘪 𝘵𝘰𝘬𝘰 𝘱𝘢𝘥𝘢 𝘴𝘢𝘢𝘵 𝘱𝘦𝘮𝘦𝘴𝘢𝘯𝘢𝘯/𝘱𝘦𝘯𝘨𝘪𝘳𝘪𝘮𝘢𝘯
                                </div>
                            </div>
                            {/* Add to Cart Button Start  */}
                            <div className="mt-8">
                                <button className="w-full py-4 rounded-full bg-amber-600 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
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