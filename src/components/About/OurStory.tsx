"use client"

import React from 'react'
import Image from 'next/image'

import { missionVisionInfo, ourStoryInfo } from '@/utils/about.data'
import { Check } from 'lucide-react'
import mockup from "@/assets/images/about/our-story-mockup.png"
import missionMockup from "@/assets/images/about/mission-mockup.png"
import ellipse from "@/assets/images/about/ellipse.png"

import { motion } from 'framer-motion'
import { fadeIn, fadeInShow } from '@/variants'

const OurStory = () => {
    return (
        <section className='w-full h-full my-[2rem] xl:my-[5rem] px-7'>
            <div className="h-full w-full flex items-end relative">
                <div className='h-full w-full flex flex-col gap-y-16 relative z-10 xl:px-[5rem] 2xl:px-[7rem]'>
                    <div className='flex flex-col gap-y-16'>
                        <motion.div
                            variants={fadeIn("up", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}
                            className='xl:w-1/3'>
                            <h2 className='text-3xl font-semibold'>Our Story</h2>
                            <p className='text-sm'>Whipcare was created to solve the hassle of finding reliable car care services. By bringing top-notch car maintenance directly to your doorstep, we make car care effortless and accessible globally.</p>
                        </motion.div>

                        <div className='w-full flex flex-col xl:flex-row'>
                            <motion.div
                                variants={fadeInShow(0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                                className='xl:w-1/2'>
                                <Image
                                    src={mockup}
                                    alt="mockup"
                                    className="w-full h-full"
                                />
                            </motion.div>

                            {/* <motion.div
                                variants={fadeIn("left", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                                className='xl:w-1/2 xl:pl-20 pr-5 flex flex-col gap-y-2'> */}
                            <div className='xl:w-1/2 xl:pl-20 pr-5 flex flex-col gap-y-2'>

                                <h2 className='text-[#FC4B37] text-[20px] font-medium pl-6 xl:pl-7 pt-3 xl:pt-0'>Whipcare</h2>

                                <div className='flex flex-col gap-y-3'>
                                    {
                                        ourStoryInfo.map((item, index) => (
                                            <div key={index}
                                                className='flex'
                                            >
                                                <div>
                                                    <div className='flex items-center gap-x-2'>
                                                        <Check className='text-[#83B71B]' size={17} />
                                                        <h3 className='text-gray-900 text-[25px] font-semibold'>{item.title}</h3>
                                                    </div>
                                                    <p className='text-sm text-gray-500 font-light pl-7'>{item.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='h-full flex flex-col gap-y-7'>
                        <div className='xl:w-1/3'>
                            <h2 className='text-3xl font-semibold'>Mission and Vision</h2>
                        </div>

                        <div className='w-full h-full flex flex-col xl:flex-row-reverse'>
                            <motion.div
                                variants={fadeInShow(0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                                className='xl:w-1/2'>
                                <Image
                                    src={missionMockup}
                                    alt="mission and vision mockup"
                                    className="w-full h-full"
                                />
                            </motion.div>

                            <div className='xl:w-1/2 h-full xl:pr-20 xl:pl-5 flex flex-col justify-center gap-y-2'>
                                <h2 className='text-[#FC4B37] text-[20px] font-medium pl-6 xl:pl-7 pt-3 xl:pt-0'>Whipcare</h2>
                                <div className='flex flex-col gap-y-7'>
                                    {
                                        missionVisionInfo.map((item, index) => (
                                            <div key={index}
                                                className='flex'
                                            >
                                                <div>
                                                    <div className='flex items-center gap-x-2'>
                                                        <Check className='text-[#83B71B]' size={17} />
                                                        <h3 className='text-gray-900 text-[25px] font-semibold'>{item.title}</h3>
                                                    </div>
                                                    <p className='text-sm text-gray-500 font-light pl-7'>{item.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden xl:block absolute'>
                    <Image src={ellipse} alt='ellipse' className='w-[30rem]' />
                </div>
            </div>
        </section>
    )
}

export default OurStory