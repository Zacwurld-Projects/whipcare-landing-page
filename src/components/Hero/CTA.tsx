import React from 'react'
import Image from 'next/image'

import { Search } from 'lucide-react'
import backgroundImage from "@/assets/images/hero/cta-bg.png"
import mockup from "@/assets/images/hero/cta-mockup.png"

const CTA = () => {
    return (
        <section>
            <div className='w-full h-full my-[5rem] xl:px-[5rem] 2xl:px-0'>
                <div className='w-full h-[25rem] flex items-end'>
                    <div className='w-full h-[20rem] rounded-2xl relative'>
                        <div className='absolute h-full w-full'>
                            <Image src={backgroundImage}
                                className='h-full w-full'
                                alt="background image" />
                        </div>
                        <div className='w-1/2 h-full relative z-20 p-10'>
                            <div className='w-full h-full flex flex-col justify-center gap-y-3'>
                                <h2 className='text-white font-semibold text-3xl'>Your Whip, Our Care</h2>
                                <p className='text-white'>Sign up with your email and get informed about discounts , Whipcare tips and exciting features coming your way!</p>
                                <div className='flex flex-col gap-y-3'>

                                    <div className='w-full h-[3rem] flex items-center justify-between bg-white rounded-full py-1 pr-1 pl-3'>
                                        <Search className='' size={16} />
                                        <input type="email" className='w-[67%] h-full outline-none' placeholder='Enter your email' />
                                        <button className='bg-brand-500 h-full text-white text-xs px-4 rounded-full'>Stay Updated</button>
                                    </div>

                                    <div className="flex gap-5 mt-2">
                                        <div className="w-[8rem] bg-black text-white border-[1px] border-gray-500 px-3 py-2 rounded-md">
                                            <div className="flex flex-col ">
                                                <span className="text-xs">Get It On</span>
                                                <span className="text-sm">Google Play</span>
                                            </div>
                                        </div>
                                        <div className="w-[8rem] bg-black text-white border-[1px] border-gray-500 px-3 py-2 rounded-md">
                                            <div className="flex flex-col ">
                                                <span className="text-xs">Download on the</span>
                                                <span className="text-sm">App Store</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='absolute h-[25rem] w-[17rem] right-[10rem] 2xl:right-[15rem]'>
                        <Image src={mockup} className='h-full w-full' alt='CTA mockup' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA