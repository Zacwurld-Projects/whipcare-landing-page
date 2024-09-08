"use client"

import React from 'react'
import Image from 'next/image'

import List from '../cards/List'

import { exploreInfo } from '@/utils/explore.data'

import mockup from "@/assets/images/explore/mockup1.svg"
import mockup2 from "@/assets/images/explore/mockup2.png"
import ellipse from "@/assets/images/explore/ellipse.png"

import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const HowItWorks = () => {
    return (
        <div className='w-full h-full my-[0rem] xl:my-[5rem] relative flex items-center'>
            <div className='flex flex-col gap-y-10 relative z-20 px-7 xl:px-[5rem] 2xl:px-[7rem]'>
                <div>
                    <motion.div
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        className="h-full w-full mb-10 flex flex-col gap-y-2">
                        <h1 className='text-3xl font-semibold'>Use Whipcare as a <br /> car owner</h1>
                        <p className='text-sm'>{"Here's"} a step-by-step guide on how to book and complete your selected service.</p>
                    </motion.div>

                    <div className='flex flex-col gap-y-20'>
                        {/* First section */}
                        <div className='w-full flex flex-col xl:flex-row-reverse gap-y-10 xl:gap-y-0'>

                            <div className="xl:w-1/2">
                                <motion.div
                                    variants={fadeIn("left", 0.3)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className='flex flex-col gap-y-7'>
                                    {
                                        exploreInfo[0].map((info, index) => (
                                            <List
                                                key={index}
                                                title={info.title}
                                                list={info.list}
                                            />
                                        ))
                                    }
                                </motion.div>
                            </div>

                            <div className="xl:w-1/2 flex justify-center xl:justify-start">
                                <motion.div
                                    variants={fadeIn("right", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className='xl:w-[25rem] xl:h-[45rem]'>
                                    <Image src={mockup} alt="mockup" className="w-full h-full" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {/* Second section */}
                    <motion.div
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="h-full w-full mb-10 flex flex-col gap-y-2">
                        <h1 className='text-3xl font-semibold'>Use Whipcare as a <br /> car service provider</h1>
                        <p className='text-sm'>Here is a guide on how to manage bookings and Earn as a service provider.</p>
                    </motion.div>
                    <div className='w-full flex flex-col xl:flex-row gap-y-10 xl:gap-y-0'>

                        <div className="xl:w-1/2">
                            <motion.div
                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                                className='flex flex-col gap-y-7'>
                                {
                                    exploreInfo[1].map((info, index) => (
                                        <List
                                            key={index}
                                            title={info.title}
                                            list={info.list}
                                        />
                                    ))
                                }
                            </motion.div>
                        </div>

                        <div className="xl:w-1/2 flex justify-center  xl:justify-end items-center">
                            <motion.div
                                variants={fadeIn("left", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                                className='xl:w-[25rem] xl:h-[23rem]'>
                                <Image src={mockup2} alt="mockup" className="w-full h-full" />
                            </motion.div>
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