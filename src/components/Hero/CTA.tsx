import React from 'react'
import Image from 'next/image'

import { Search } from 'lucide-react'
import backgroundImage from "@/assets/images/hero/cta-bg.png"
import mockup from "@/assets/images/hero/cta-mockup.png"

const CTA = () => {
    return (
        <section>
            <div className='w-full h-full my-[5rem] xl:px-[5rem] 2xl:px-0'>
                <div className='w-full xl:h-[25rem] flex items-end'>
                    <div className='w-full xl:h-[20rem] xl:rounded-2xl relative'>
                        <div className='absolute h-full w-full'>
                            <Image src={backgroundImage}
                                className='h-full w-full object-cover xl:object-fill'
                                alt="background image" />
                        </div>
                        <div className='xl:w-1/2 h-full relative z-20 px-7 xl:px-10 py-20'>
                            <div className='w-full h-full flex flex-col justify-center gap-y-3'>
                                <h2 className='text-white font-semibold text-3xl'>Your Whip, Our Care</h2>
                                <p className='text-white'>Sign up with your email and get informed about discounts , Whipcare tips and exciting features coming your way!</p>
                                <div className='flex flex-col gap-y-3'>

                                    <div>
                                        <div className='w-full h-[3rem] flex items-center xl:justify-between bg-white rounded-full py-1 pr-1 pl-3 mt-5 xl:mt-0'>
                                            <Search className='mr-2 xl:mr-0' size={16} />
                                            <input type="email" className='w-[90%] xl:w-[67%] h-full outline-none' placeholder='Enter your email' />
                                            <button className='hidden xl:block bg-brand-500 h-full text-white text-xs px-4 rounded-full'>Stay Updated</button>
                                        </div>
                                        <div className='flex justify-end'>
                                            <button className='xl:hidden bg-brand-500 h-[2.5rem] text-white text-xs px-4 rounded-full mt-2'>Stay Updated</button>
                                        </div>
                                    </div>


                                    <div className="flex gap-5 mt-2 justify-center xl:justify-start">
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


                    <div className='hidden xl:block absolute h-[25rem] w-[17rem] right-[10rem] 2xl:right-[15rem]'>
                        <Image src={mockup} className='h-full w-full' alt='CTA mockup' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA