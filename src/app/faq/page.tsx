import React from 'react'
import Hero from '@/components/FAQ/Hero'
import CTA from "@/components/Hero/CTA"
import Faq from '@/components/FAQ/Faq'

const page = () => {
    return (
        <div>
            <Hero />
            <div className='2xl:px-[7rem]'>
                <CTA />
            </div>
            <Faq />
        </div>
    )
}

export default page