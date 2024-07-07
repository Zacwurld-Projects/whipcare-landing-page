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
        <div>
            <div>
                {
                    faq.map((item, index) => (
                        <FaqCard
                            key={index}
                            item={item}
                            isOpen={openCardIndex === index}
                            onToggle={handleToggle}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Faq