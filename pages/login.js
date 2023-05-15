import React from 'react';
import Wrapper from '@/components/Wrapper';
import CartItem from '@/components/CartItem';

const login = () => {
  return <div className="w-full md:py-20 bg-stone-200 bg-opacity-90">
    <Wrapper>
        {/* Heading Start */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] bg-white rounded-md shadow-lg md:text-[34px] mb-5 font-semibold leading-tight">
                        <div>
                            <h1 className='text-amber-800'>Welcome!</h1>
                            <span className="text-[16px] font-extralight">Enter your mobile number and password to login</span>
                        </div>

                        <div className='mt-10 py-4 text-[28px]'>
                            <div>
                                <input className='border border-b-slate-500 rounded-sm' type='text' placeholder='username'/>
                            </div>

                            <div className='mt-4 text-[28px]'>
                                <input className='border border-b-slate-500 rounded-sm' type='password' placeholder='Password'/>
                            </div>
                        </div>
                        
                    <div>
                        <button className="w-100 px-28 py-3 rounded-lg bg-amber-600 text-white text-lg 
                        font-extrabold transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Login
                        </button>
                    </div>
                </div>

            </div>
        {/* Heading End */}

    </Wrapper>
  </div>
  
}


export default login;