import React from 'react'
import Link from 'next/link';
import {BsChevronDown} from "react-icons/bs";

const Menu = ({showCatMenu, setShowCatMenu}) => {
  return (
    <ul className='hidden md:flex gap-8 text-[16px] font-bold mr-96 text-white'>
        <div>
            <a href="/delivery">
                <button className="text-orange-400">Delivery</button>
                <br />
                <button className="text-[32px] font-extrabold">Order</button>
            </a>
        </div>
        <div>
            <a href="/promotions">
                <button className="text-orange-400">Get Fresh</button>
                <br />
                <button className="text-[32px] font-extrabold">Promotions</button>
            </a>
        </div>
        <div>
            <a href="/exclusive">
                <button className="text-orange-400">Exclusive</button>
                <br />
                <button className="text-[32px] font-extrabold">Large Order</button>
            </a>
        </div>
    </ul>
  )
}

export default Menu