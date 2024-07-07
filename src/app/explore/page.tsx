import Hero from '@/components/Explore/Hero'
import HowItWorks from '@/components/Explore/HowItWorks'
import CTA from '@/components/Hero/CTA'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <HowItWorks />
            <div className='2xl:px-[7rem]'>
                <CTA />
            </div>
        </div>
    )
}

export default page