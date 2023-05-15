import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import { MdCallEnd } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";

function sendEmail() {
    window.location.href = 'mailto:guestservice@burgerking.co.id';
  }
  function handleFacebookClick() {
    window.location.href = 'https://www.facebook.com/burgerkingindonesia/';
  }
  function handleInstagramClick() {
    window.location.href = 'https://www.instagram.com/burgerking.id/';
  }
  function handleTwitterClick() {
    window.location.href = 'https://twitter.com/burgerking_id';
  }
  function handleYoutubeClick() {
    window.location.href = 'https://www.youtube.com/channel/UC-F_fh9CRDwhJrY_ibHae-g';
  }

const Footer = () => {
    return (
        <footer className="text-white bg-zinc-800 pt-8 pb-12">
            <Wrapper>
                <div className="pb-4 md:pb-2 text-center flex justify-center md:justify-start text-[24px] md:text-[22px] font-extrabold">
                    <h1>BURGER KING© DELIVERY</h1>
                </div>
                        
                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        onClick={() =>
                            window.open("tel:+628123456789", "_blank")
                        }
                        className="w-10 pr-4 h-10 flex md:items-center justify-center text-white cursor-pointer"
                    >
                        <MdCallEnd size={24} />
                    </div>
                    <div
                        onClick={() =>
                            window.open("tel:+628123456789", "_blank")
                        }
                        className="w-10 pl-2 text-[24px] h-10 flex md:items-center font-extrabold justify-center text-white cursor-pointer"
                    >
                        <p>150025</p>
                    </div>
                    
                    <div className="pl-10 flex md:items-center cursor-pointer" onClick={sendEmail}>
                        <AiFillMail size={24} />
                        <p className="pl-2 text-[14px]">guestservice@burgerking.co.id</p>
                    </div>

                    <div className="flex md:items-center cursor-pointer justify-center items-center ">
                        <FaFacebookF size={22} className="mx-0 mb-4 md:mb-1" onClick={handleFacebookClick} />

                        
                    </div>

                    <div className="flex md:items-center cursor-pointer justify-center items-center ">
                        <FaInstagram size={24} className="mx-0 mb-4 md:mb-1"  onClick={handleInstagramClick}/>
                    </div>

                    <div className="flex md:items-center cursor-pointer justify-center items-center ">
                        <FaTwitter size={24} className="mx-0 mb-4 md:mb-1"  onClick={handleTwitterClick}/>
                        
                    </div>

                    <div className=" flex md:items-center cursor-pointer justify-center items-center ">
                        <FaYoutube size={24} className="mx-0 mb-4 md:mb-1"  onClick={handleYoutubeClick}/>
                    </div>

                </div>
                {/* RIGHT END */}
            </Wrapper>

            <Wrapper classname="mb-6 mt-6 md:hidden" >
                <div className="flex justify-between text-center mb-2 flex-col font-bold md:flex-row gap-[10px] md:gap-0">
                    <a href="/">About Us</a>
                </div>    

                <div className="flex justify-between text-center mb-2 flex-col font-bold md:flex-row gap-[10px] md:gap-0">
                    <a href="/">Kebijakan Privasi</a>
                </div>   

                <div className="flex justify-between text-center mb-2 flex-col font-bold md:flex-row gap-[10px] md:gap-0">
                    <a href="/">Syarat dan Ketentuan</a>
                </div>   
            </Wrapper>
            
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] text-center md:text-left">
                    TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.
                </div>
                {/* LEFT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;