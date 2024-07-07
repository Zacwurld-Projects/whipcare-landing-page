import React from 'react'
import backgroundImage from "@/assets/images/hero/statistics-bg.svg"
import Image from 'next/image'
import { statistics } from '@/utils/data'

const Statistics = () => {
    return (
        <section
            className='w-full h-[224px] bg-gray-100 flex justify-center items-center my-[5rem]'
        >
            <div className='w-full h-full relative bg-brand-500'>
                <div className='absolute h-full w-full'>
                    <Image src={backgroundImage} alt="background" className='opacity-20' />
                </div>
                <div className='relative z-10 w-full h-full flex gap-x-16 items-center justify-center px-20'>
                    <div>
                        <h2 className='text-3xl text-white'>What {"we're"} doing</h2>
                        <p className='text-sm text-white'>Providing access to premium car services <span className='font-semibold'>Globally</span></p>
                    </div>
                    <div>
                        <div className="flex gap-x-10">
                            {
                                statistics.map((item, index) => (
                                    <div
                                        key={index}
                                        className=''>
                                        <h2 className='text-2xl text-white'>{item.title}+</h2>
                                        <p className='text-xs text-white'>{item.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics