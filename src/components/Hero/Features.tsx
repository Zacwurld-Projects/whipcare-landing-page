"use client"

import React from 'react'
import List from '../cards/List'
import mockup from "@/assets/images/hero/features-mockup.svg"
import mockup2 from "@/assets/images/hero/features-mockup2.svg"
import Image from 'next/image'
import { features } from '@/utils/data'

import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const Features = () => {
    return (
        <div className='w-full h-full px-7 xl:px-[5rem] 2xl:px-0'>
            <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="h-full w-full mb-10">
                <h1 className='text-3xl font-semibold'>Live Easier With Whipcare</h1>
                <p className='text-sm'>How do we serve you and your car?</p>
            </motion.div>

            <div className='flex flex-col gap-y-20'>
                {/* First section */}
                <div className='w-full flex flex-col xl:flex-row gap-y-7 xl:gap-y-0'>

                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="xl:w-1/2">
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
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="xl:w-1/2 flex justify-center xl:justify-end">
                        <div className='xl:w-[25rem] xl:h-[45rem]'>
                            {/* <motion.div
                            className='xl:w-[25rem] xl:h-[45rem]'
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                        </motion.div> */}
                            <Image src={mockup} alt="mockup" className="w-full h-full" />

                        </div>
                    </motion.div>
                </div>

                {/* Second section */}
                <div className='w-full hidden md:flex flex-col xl:flex-row-reverse gap-y-7 xl:gap-y-0'>

                    <motion.div
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="xl:w-1/2">
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
                    </motion.div>

                    <motion.div
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="xl:w-1/2 flex justify-center xl:justify-start">
                        <div className='xl:w-[25rem] xl:h-[45rem]'>
                            {/* <motion.div
                            className='xl:w-[25rem] xl:h-[45rem]'
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        > */}
                            <Image src={mockup2} alt="mockup" className="w-full h-full" />
                            {/* </motion.div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Features