import React from 'react'
import List from '../cards/List'
import mockup from "@/assets/images/hero/features-mockup.png"
import mockup2 from "@/assets/images/hero/features-mockup2.png"
import Image from 'next/image'
import { features } from '@/utils/data'

const Features = () => {
    return (
        <div className='w-full h-full px-7 xl:px-[5rem] 2xl:px-0'>
            <div className="h-full w-full mb-10">
                <h1 className='text-3xl font-semibold'>Live Easier With WhipCare</h1>
                <p className='text-sm'>How do we serve you and your car?</p>
            </div>

            <div className='flex flex-col gap-y-20'>
                {/* First section */}
                <div className='w-full flex flex-col xl:flex-row gap-y-7 xl:gap-y-0'>

                    <div className="xl:w-1/2">
                        <div className='flex flex-col gap-y-7'>
                            {
                                features[0].map((feature, index) => (
                                    <List
                                        key={index}
                                        title={feature.title}
                                        list={feature.list}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div className="xl:w-1/2 flex justify-center xl:justify-end">
                        <div className='xl:w-[25rem] xl:h-[45rem]'>
                            <Image src={mockup} alt="mockup" className="w-full h-full" />
                        </div>
                    </div>
                </div>

                {/* Second section */}
                <div className='w-full flex flex-col xl:flex-row-reverse gap-y-7 xl:gap-y-0'>

                    <div className="xl:w-1/2">
                        <div className='flex flex-col gap-y-7'>
                            {
                                features[1].map((feature, index) => (
                                    <List
                                        key={index}
                                        title={feature.title}
                                        list={feature.list}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div className="xl:w-1/2 flex justify-center xl:justify-start">
                        <div className='xl:w-[25rem] xl:h-[45rem]'>
                            <Image src={mockup2} alt="mockup" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features