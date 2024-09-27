"use client"

import { ourValuesInfo } from '@/utils/about.data'
import React from 'react'
import Values from '../cards/Values'

import { motion } from 'framer-motion'
import { fadeIn, fadeInShow } from '@/variants'

const OurValues = () => {
    return (
        <section>
            <div className='xl:px-[5rem] 2xl:px-[7rem] flex flex-col gap-y-7'>
                <div className="w-full h-full">
                    <motion.h2
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-3xl text-center font-semibold'>Our Values</motion.h2>
                </div>
                <motion.div
                    variants={fadeInShow(0.9)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className='w-full flex flex-wrap gap-y-5'>
                    {
                        ourValuesInfo.map((value, index) => (
                            <div key={index} className='xl:w-1/2 px-7 xl:px-20'>
                                <Values title={value.title} image={value.image} description={value.description} />
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default OurValues