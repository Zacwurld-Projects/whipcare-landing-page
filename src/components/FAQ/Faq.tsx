"use client"

import React, { useState } from 'react'
import FaqCard from '../cards/Faq'
import { faq } from '@/utils/faq.data'

import ellipse from "@/assets/images/faq/ellipse.png"
import Image from 'next/image'

import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const Faq = () => {
    const [openCardIndex, setOpenCardIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        if (openCardIndex === index) {
            setOpenCardIndex(null); // Close the card if it's already open
        } else {
            setOpenCardIndex(index); // Open the card
        }
    }
    return (
        <div className='my-[2rem] xl:my-[5rem]'>
            <div className='w-full relative flex items-end'>
                <div className='w-full 2xl:px-[7rem] relative z-20'>
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-center mb-5 leading-tight'>
                        <h2 className='text-3xl font-semibold'>Frequently asked questions</h2>
                        <p className='text-sm'>We`re happy to answer your questions</p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className='mt-5'>
                        {
                            faq.map((item, index) => (
                                <FaqCard
                                    key={index}
                                    item={item}
                                    isOpen={openCardIndex === index}
                                    onToggle={handleToggle}
                                    index={index}
                                    isLastItem={index === faq.length - 1}
                                />
                            ))
                        }
                    </motion.div>
                </div>

                <div className='hidden xl:block absolute'>
                    <Image src={ellipse} alt='ellipse' className='w-[25rem]' />
                </div>
            </div>
        </div>
    )
}

export default Faq