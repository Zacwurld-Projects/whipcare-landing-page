import React from 'react'
import Image from 'next/image'

import List from '../cards/List'

import { exploreInfo } from '@/utils/explore.data'

import mockup from "@/assets/images/explore/mockup1.svg"
import mockup2 from "@/assets/images/explore/mockup2.png"
import ellipse from "@/assets/images/explore/ellipse.png"

const HowItWorks = () => {
    return (
        <div className='w-full h-full my-[5rem] relative flex items-center'>
            <div className='flex flex-col gap-y-10 relative z-20 px-7 xl:px-[5rem] 2xl:px-[7rem]'>
                <div>
                    <div className="h-full w-full mb-10 flex flex-col gap-y-2">
                        <h1 className='text-3xl font-semibold'>Use Whipcare as a <br /> car owner</h1>
                        <p className='text-sm'>{"Here's"} a step-by-step guide on how to book and complete your selected service.</p>
                    </div>

                    <div className='flex flex-col gap-y-20'>
                        {/* First section */}
                        <div className='w-full flex flex-col xl:flex-row-reverse gap-y-10 xl:gap-y-0'>

                            <div className="xl:w-1/2">
                                <div className='flex flex-col gap-y-7'>
                                    {
                                        exploreInfo[0].map((info, index) => (
                                            <List
                                                key={index}
                                                title={info.title}
                                                list={info.list}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="xl:w-1/2 flex justify-start">
                                <div className='xl:w-[25rem] xl:h-[45rem]'>
                                    <Image src={mockup} alt="mockup" className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {/* Second section */}
                    <div className="h-full w-full mb-10 flex flex-col gap-y-2">
                        <h1 className='text-3xl font-semibold'>Use Whipcare as a <br /> car service provider</h1>
                        <p className='text-sm'>Here is a guide on how to manage bookings and Earn as a service provider.</p>
                    </div>
                    <div className='w-full flex flex-col xl:flex-row gap-y-10 xl:gap-y-0'>

                        <div className="xl:w-1/2">
                            <div className='flex flex-col gap-y-7'>
                                {
                                    exploreInfo[1].map((info, index) => (
                                        <List
                                            key={index}
                                            title={info.title}
                                            list={info.list}
                                        />
                                    ))
                                }
                            </div>
                        </div>

                        <div className="xl:w-1/2 flex justify-end items-center">
                            <div className='xl:w-[25rem] xl:h-[23rem]'>
                                <Image src={mockup2} alt="mockup" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden xl:block absolute'>
                <Image src={ellipse} alt='ellipse' className='w-[30rem]' />
            </div>

        </div>
    )
}

export default HowItWorks