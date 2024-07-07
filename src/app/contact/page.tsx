import Form from '@/components/Contact/Form'
import CTA from '@/components/Hero/CTA'
import Navbar from '@/components/Hero/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='2xl:px-[7rem] bg-gray-100'>
            {/* <Navbar
                textColor='text-gray-900'
            /> */}
            <Form />
            <CTA />
        </div>
    )
}

export default page