import CTA from '@/components/Hero/CTA'
import Navbar from '@/components/Hero/Navbar'
import ServiceProviderForm from '@/components/RegisterServiceProvider/Form'
import React from 'react'

const page = () => {
    return (
        <div className='2xl:px-[7rem] bg-gray-100'>
            <Navbar
                textColor='text-gray-900'
                hamburgerColor='text-black'
            />
            <ServiceProviderForm />
            <CTA />
        </div>
    )
}

export default page