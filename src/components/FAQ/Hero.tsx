import React from 'react'
import Image from 'next/image'
import backgroundImage from "@/assets/images/faq/background-image.png"
import Navbar from '../Hero/Navbar'

const Hero = () => {
    return (
        <section className='h-[100dvh] border'>
            <div className='w-full h-full relative'>
                <div className='w-full h-full absolute'>
                    <Image src={backgroundImage} alt='background image' className='w-full h-full' />
                </div>
                <div className='relative h-full z-20 xl:px-[5rem]'>
                    <Navbar
                        textColor='text-white'
                    />
                    <div className='h-1/3 w-full flex items-center justify-center'>
                        <h2 className='text-white text-4xl font-semibold'>FAQ</h2>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero