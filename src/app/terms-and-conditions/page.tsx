import React from 'react'

import Navbar from '@/components/Hero/Navbar'
import CTA from '@/components/Hero/CTA'
import TermsAndConditions from '@/components/Global/TermsAndConditions'

const page = () => {
    return (
        <div className='2xl:px-[7rem] '>
            <Navbar
                textColor='text-gray-900'
                hamburgerColor='text-black'
            />
            <TermsAndConditions />
            <CTA />
        </div>
    )
}

export default page