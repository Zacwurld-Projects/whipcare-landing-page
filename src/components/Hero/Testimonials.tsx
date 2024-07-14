import React from 'react'
import Image from 'next/image'

import TestimonialCard from '../cards/Testimonial'

import { testimonials } from '@/utils/data'
import backgroundImage from "@/assets/images/hero/testimonials-bg.svg"

const Testimonials = () => {
    return (
        <section className='w-full h-full bg-gray-50 py-[4rem] xl:py-[5rem] mb-[5rem]'>
            <div className="w-full h-full flex flex-col gap-y-5">
                <div className='text-center px-7 xl:px-7'>
                    <p className='text-sm text-gray-600'> <span className='text-brand-500'>2,157</span> people have experienced quality service with Whipcare</p>
                    <h2 className='text-3xl text-black font-semibold'>{"Don't"} Just Take Our Word For it</h2>
                    <p className='text-sm text-gray-600'>{"Here's"} what other users say about us</p>
                </div>
                <div className='xl:h-[320px] w-full relative flex justify-center'>
                    <div className='h-full absolute hidden xl:block'>
                        <Image src={backgroundImage} alt="background image" className="h-full w-full" />
                    </div>
                    <div className='h-full relative z-20  flex items-center'>
                        <div className='w-full flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 gap-x-5'>
                            {
                                testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className='h-[16rem] w-[20rem]'
                                    >
                                        <TestimonialCard
                                            name={testimonial.name}
                                            testimonial={testimonial.testimonial}
                                            image={testimonial.image}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='text-center px-7 xl:px-7'>
                    <p className='text-sm text-gray-600'>
                        What are you waiting for? <br />
                        Plug in to our trusted network of reliable car servicemen and experience the ease today!
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Testimonials