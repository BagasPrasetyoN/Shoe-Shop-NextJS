import Link from 'next/link'
import React from 'react'


const ProductCard1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      <Link href="/product/1" className="transform overflow-hidden bg-white rounded-lg shadow-lg duration-200 hover:scale-105 cursor-pointer">
          <img className="w-full" src="/assets/menu1.jpg" alt="Product Image" />

          <div className="px-4 text-black/[0.9]">
              <h2 className="text-lg font-medium">Product Name</h2>
              <div className="flex items-center text-black/[0.5]">
                  <p className="mr-2 text-lg font-semibold">$10.00</p>
                  <p className="text-base font-medium line-through">$15.00</p>
              </div>
          </div>
      </Link>
    </div>
  );
};

export default ProductCard1