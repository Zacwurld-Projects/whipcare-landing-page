"use client"
import React from 'react'

import Navbar from '@/components/Hero/Navbar'
import CTA from '@/components/Hero/CTA'
import PrivacyPolicy from '@/components/Global/PrivacyPolicy'

const page = () => {
    return (
        <div className='2xl:px-[7rem]'>
            <Navbar
                textColor='text-gray-900'
                hamburgerColor='text-black'
            />
            <CTA />
            {/* <PrivacyPolicy /> */}
        </div>
    )
}

export default page