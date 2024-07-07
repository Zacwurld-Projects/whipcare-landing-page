import React from 'react'
import List from '../cards/List'
import mockup from "@/assets/images/explore/mockup1.png"
import mockup2 from "@/assets/images/explore/mockup2.png"
import Image from 'next/image'
import { exploreInfo } from '@/utils/explore.data'

const HowItWorks = () => {
    return (
        <div className='w-full h-full xl:px-[5rem] 2xl:px-[10rem] my-[5rem]'>
            <div>

                <div className="h-full w-full mb-10">
                    <h1 className='text-3xl font-semibold'>Use Whipcare as a <br /> car owner</h1>
                    <p className='text-sm'>{"Here's"} a step-by-step guide on how to book and complete your selected service.</p>
                </div>

                <div className='flex flex-col gap-y-20'>
                    {/* First section */}
                    <div className='w-full flex flex-row-reverse'>

                        <div className="w-1/2">
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

                        <div className="w-1/2 flex justify-start">
                            <div className='w-[25rem] h-[45rem]'>
                                <Image src={mockup} alt="mockup" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* Second section */}
                <div className="h-full w-full mb-10">
                    <h1 className='text-3xl font-semibold'>Use Whipcare as a <br /> car service provider</h1>
                    <p className='text-sm'>Here is a guide on how to manage bookings and Earn as a service provider.</p>
                </div>
                <div className='w-full flex'>

                    <div className="w-1/2">
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

                    <div className="w-1/2 flex justify-end">
                        <div className='w-[25rem] h-[23rem]'>
                            <Image src={mockup2} alt="mockup" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks