import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';
import CartItem from '@/components/CartItem';

const Cart = () => {
  return <div className="w-full md:py-20">
    <Wrapper>
        {/* Heading Start */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Shopping Cart
                </div>
            </div>
        {/* Heading End */}

        {/* Cart Content Start */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
                {/* Cart Item Start */}
                    <div className="flex-[2]">
                        <div className="text-lg font-bold">Cart Items</div>
                        <CartItem/>
                    </div>
                {/* Cart Item End */}

                {/* Summary Start */}
                    <div className="flex-[1]">
                        <div className="text-lg font-bold">Summary</div>

                        <div className="py-5 my-5 bg-black/[0.05] rounded-xl">
                            <div className="flex justify-between">
                                <div className="uppercase text-md md:text-lg ml-2 font-medium text-black">Subtotal</div>
                                <div className="text-md md:text-lg mr-2 font-medium text-black"> Rp. 150.000-,</div>
                            </div>

                            <div className="text-sm text-justify font-bold ml-2 mr-2 md:text-md py-5 border-t mt-5">
                            1 pc Ayam Crispy + Nasi + Jasmine Tea Medium 
                            [ Rasa Baru, Enaknya sampe gigitan terakhir ! ] 
                            <br/>
                            </div>
                            𝘗𝘰𝘵𝘰𝘯𝘨𝘢𝘯 𝘢𝘺𝘢𝘮 𝘺𝘢𝘯𝘨 𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢 𝘵𝘦𝘳𝘨𝘢𝘯𝘵𝘶𝘯𝘨 𝘬𝘦𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢𝘢𝘯 𝘥𝘪 𝘵𝘰𝘬𝘰 𝘱𝘢𝘥𝘢 𝘴𝘢𝘢𝘵 𝘱𝘦𝘮𝘦𝘴𝘢𝘯𝘢𝘯/𝘱𝘦𝘯𝘨𝘪𝘳𝘪𝘮𝘢𝘯.
                        </div>

                        {/* Button Start */}
                        <button className="w-full py-4 rounded-full bg-black text-white text-lg 
                        font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Checkout
                        </button>
                        {/* Button End */}
                    </div>
                {/* Summary End */}
            </div>
        {/* Cart Content End */}

        <div className="mt-8"></div>

        {/* This is empty screen */}
        {/* {CartItem.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your cart is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
        )} */}
    </Wrapper>
  </div>
  
}

export default Cart;