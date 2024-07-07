"use client"

import { faq } from '@/utils/faq.data'
import React, { useState } from 'react'
import FaqCard from '../cards/Faq'

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
        <div className='my-[5rem] 2xl:px-[7rem]'>
            <div>
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
        </div>
    )
}

export default Faq