import React from 'react'
import Image from 'next/image'
import backgroundImage from "@/assets/images/explore/background-image1.png"
import Navbar from '../Hero/Navbar'

import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const Hero = () => {
    return (
        <section className='h-[40dvh] xl:h-[100dvh] mb-5 xl:mb-0'>
            <div className='w-full h-full relative'>
                <div className='w-full h-full absolute'>
                    <Image src={backgroundImage} alt='background image' className='w-full h-full object-cover' />
                </div>
                <div className='relative h-full z-20 xl:px-[5rem]'>
                    <Navbar
                        textColor='text-white'
                        hamburgerColor='text-white'
                    />
                    <div className='h-1/4 w-full flex items-center justify-center'>
                        <motion.h2
                            variants={fadeIn("up", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}
                            className='text-white text-xl xl:text-4xl font-semibold text-center'>Explore <br className='xl:hidden' /> Whipcare</motion.h2>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
