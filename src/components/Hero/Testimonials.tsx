"use client"

import React from 'react'
import Image from 'next/image'

import TestimonialCard from '../cards/Testimonial'

import { testimonials } from '@/utils/data'
import backgroundImage from "@/assets/images/hero/testimonials-bg.svg"

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const Testimonials = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.8,
    });

    const testimonialCount: number = 2157

    return (
        <section
            className='w-full h-full bg-gray-50 py-[4rem] xl:py-[5rem] mb-[5rem] overflow-hidden'
            ref={ref}
        >
            <div className="w-full h-full flex flex-col gap-y-5">
                <motion.div
                    variants={fadeIn("down", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-center px-7 xl:px-7'>
                    <p className='text-sm text-gray-600'> <span className='text-brand-500'>
                        {
                            inView ? <CountUp start={0} end={testimonialCount} duration={2.5} /> : 0
                        }
                    </span> people have experienced quality service with Whipcare</p>
                    <h2 className='text-3xl text-black font-semibold'>{"Don't"} Just Take Our Word For it</h2>
                    <p className='text-sm text-gray-600'>{"Here's"} what other users say about us</p>
                </motion.div>

                <div className='xl:h-[320px] w-full relative flex justify-center'>
                    <div className='h-full absolute hidden xl:block'>
                        <Image src={backgroundImage} alt="background image" className="h-full w-full" />
                    </div>
                    <div
                        className='h-full relative z-20  flex items-center'>
                        {/* <div className='w-full flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 gap-x-5 card-carousel'> */}
                        <div className='w-full flex justify-center'>
                            <div className='xl:w-1/2 flex flex-row xl:flex-row gap-y-5 xl:gap-y-0 gap-x-5 card-carousel'>
                                {
                                    testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className='h-[16rem] scroll-container'
                                        >
                                            <TestimonialCard
                                                name={testimonial.name}
                                                testimonial={testimonial.testimonial}
                                                image={testimonial.image}
                                            />
                                        </div>
                                    ))
                                }
                                {/* Second one */}
                                {
                                    testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className='h-[16rem] w-[20rem] scroll-container'
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
                </div>
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-center px-7 xl:px-7'>
                    <p className='text-sm text-gray-600'>
                        What are you waiting for? <br />
                        Plug in to our trusted network of reliable car servicemen and experience the ease today!
                    </p>

                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials