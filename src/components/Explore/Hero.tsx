import React from 'react'
import Image from 'next/image'
import backgroundImage from "@/assets/images/explore/background-image1.png"
import Navbar from '../Hero/Navbar'

const Hero = () => {
    return (
        <section className='h-[100dvh] border'>
            <div className='w-full h-full relative'>
                <div className='w-full h-full absolute'>
                    <Image src={backgroundImage} alt='background image' className='w-full h-full object-cover' />
                </div>
                <div className='relative h-full z-20 xl:px-[5rem]'>
                    <Navbar
                        textColor='text-white'
                    />
                    <div className='h-1/3 w-full flex items-center justify-center'>
                        <h2 className='text-white text-4xl font-semibold'>Explore Whipcare</h2>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero