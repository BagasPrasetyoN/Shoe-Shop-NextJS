import React, {useState, useEffect} from "react";
import Wrapper from './Wrapper';
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import {BsCart} from "react-icons/bs";
import {MdShoppingCart} from "react-icons/md";
import {VscChromeClose} from "react-icons/vsc";
import {AiOutlineMenu} from "react-icons/ai";


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () =>{
        if(window.scrollY > 200){
            if(window.scrollY > lastScrollY && !mobileMenu){
                setShow("-translate-y-[80px]");
            }else{
                setShow("shadow-sm")
            }
        }else{
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(()=> {
        window.addEventListener("scroll", controlNavbar);
        return() => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

return (
    <header 
        className={`w-full md:w-full h-[40px] md:h-[80px] bg-neutral-800 flex items-center
            justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
            >
            <Wrapper classname="h-[26px] flex justify-between item-center">
                {/* Mobile Icon Start */}
                <div  className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center text-white cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose className="text-[16px] mb-2 text-amber-600"
                            onClick={()=> setMobileMenu(false)}
                            />
                            ) : (
                                <AiOutlineMenu className="text-[26px] mb-2 text-amber-600"
                                onClick={()=> setMobileMenu(true)}
                                />
                                )}
                </div>
                    {/* Mobile Icon End */}
                    <Link href="/">
                        <img src="/assets/logo.png" className="w-[40px] lg:w-[80px] md:w-[80px] md:mb-2 items-center" />
                    </Link>
                <Menu 
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    />
                {mobileMenu && (    
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                    />
                    )}

                <div className="flex items-center gap-2 text-white">
                    {/* Icon Start */}
                    <Link href="/login">
                        <div className="w-8 md:w-12 h-10 md:h-12 md:py-1 flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <p className="text-[20px] font-extrabold mr-10">LOGIN</p>
                        </div>
                    </Link>
                    <Link href="/cart">

                            <div className="w-8 md:w-12 h-10 md:h-12 md:py-10 bg-orange-500 flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                                    <MdShoppingCart className="text-[26px] md:text-[40px]"/>
                                    <div className="h-[12px] md:h-[18px] min-w-[12px] md:min-w-[16px] 
                                    rounded-full bg-red-600 absolute md:top-[16px] top-2 left-5 md:left-7 text-white
                                    text-[10px] md:text-[12px] flex justify-center items-center px-[2px] 
                                    md:px-[5px]">5</div>
                            </div>
                    </Link>
                    {/* Icon End */}
                </div>
            </Wrapper>
    </header>
  );
};

export default Header