import HeroBanner from "@/components/HeroBanner";
import MenuMobile from "@/components/MenuMobile";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <HeroBanner/>
            <Wrapper>
                {/* heading and paragraph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[40px]">
                        <div className="w-full h-[50px] mb-6 rounded-[4px] md:hidden shadow-sm shadow-slate-400 bg-slate-50 flex justify-between items-center">
                            <div className="w-full text-xs font-bold">
                                <p className="mr-14 mb-3 md:text-center">Get exclusive benefits now as a BK Member!</p>
                            </div>
                            <div  className="mr-4 ml-10 h-[45px] w-[110px] rounded-[6px] bg-amber-600">
                                <Link href="/">
                                    <button className="text-white py-2.5 font-bold">Login</button>
                                </Link>
                            </div>
                        </div>
                    <div className="text-md font-extrabold pt-3 text-yellow-800 text-[32px] md:text-[34px] lg:text-[36px]">
                        Our Menus
                    </div>
                </div>
                {/* heading and paragraph end */}

                 {/* grid start*/}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-5 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu1.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] grid grid-cols-1 lg:grid-cols-1 md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>King's Chicken <br/> [ Rasa Baru ]</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu2.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Special Menu</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu3.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Tropical Whopper <br/> [ Limited Time ]</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu4.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Friyay Chicken</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu5.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Bk App Exclusive</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu6.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Cheese Burger Favorit</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu7.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Cheese Whopper <span className="text-[10px] p-px">®</span></h3>
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu8.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Gold Collection</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu9.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Kids Meal</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu10.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Side & Dessert</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu11.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Beverages</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu12.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>King Deals</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-xl duration-200 hover:scale-105 cursor-pointer">
                            <div>
                                <img className="w-full" src="/assets/menu13.jpg" alt="Product Image" />
                            </div>
                            <div className="text-[20px] md:text-[22px] text-center mt-6 mb-6 text-yellow-800 font-extrabold">
                                <h3>Kupon Mei</h3>
                            </div>
                        </Link>
                    </div>


                </div>
                 {/* grid end*/}
            </Wrapper>
        </main>
    );
}
