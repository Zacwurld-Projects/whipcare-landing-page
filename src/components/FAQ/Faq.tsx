"use client"

import React, { useState } from 'react'
import FaqCard from '../cards/Faq'
import { faq } from '@/utils/faq.data'

import ellipse from "@/assets/images/faq/ellipse.png"
import Image from 'next/image'

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
        <div className='my-[5rem]'>
            <div className='relative flex items-end'>
                <div className='2xl:px-[7rem] relative z-20'>
                    <div className='text-center mb-5 leading-tight'>
                        <h2 className='text-3xl font-semibold'>Frequently asked questions</h2>
                        <p className='text-sm'>We`re happy to answer your questions</p>
                    </div>
                    <div className='mt-5'>
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
                    </div>
                </div>

                <div className='hidden xl:block absolute'>
                    <Image src={ellipse} alt='ellipse' className='w-[25rem]' />
                </div>
            </div>
        </div>
    )
}

export default Faq