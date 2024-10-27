"use client"

import React from 'react'
// import logo from "@/assets/white-logo.svg"
import Image from 'next/image'
import { footerInfo } from '@/utils/data'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import Logo from '../lib/Logo'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <motion.footer
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='bg-gray-900'
        >
            <div
                className='w-full h-full py-10 px-10 xl:px-20'>
                <div className='w-full flex flex-col xl:flex-row gap-y-7 xl:gap-y-0'>
                    <div className='xl:w-1/3 flex flex-col items-center xl:items-start'>
                        {/* <Image src={logo} alt='logo' /> */}
                        <div className='my-2'>
                            <Logo white={true} />
                        </div>
                        <p className='text-sm text-white font-light text-center xl:text-start'>From mechanics to detailers, book top-rated professionals effortlessly. Your {"car's"} perfect partner is just a click away.</p>
                        <button className="bg-white text-black rounded-full h-[40px] w-[150px] mt-8">Get the app</button>
                        <div className='mt-3'>
                            <Link href='/register-service-provider' className='text-white underline'>
                                Register as a service provider
                            </Link>
                        </div>
                    </div>

                    <div className='xl:w-1/3 flex flex-col items-center'>
                        <div className='flex flex-col gap-y-7 text-center xl:text-start'>
                            <h2 className='text-white text-[24px] font-semibold'>Company</h2>
                            <ul className='flex flex-col gap-y-5'>
                                {
                                    footerInfo.company.map((item, index) => (
                                        <li key={index} className='text-[18px] text-white font-normal'><a href={item.link}>{item.title}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='xl:w-1/3 flex flex-col items-center'>
                        <div className='flex flex-col gap-y-7 text-center xl:text-start'>
                            <h2 className='text-white text-[24px] font-semibold'>Address</h2>
                            <div className='flex flex-col gap-y-5'>
                                <div>
                                    <p className='text-white text-sm'>Lagos, Nigeria.</p>
                                    {/* <span className='text-[#A3DC2F] text-sm'>View on Maps</span> */}
                                </div>
                                <div className='flex flex-col gap-y-5'>
                                    <p className='text-[24px] text-white'>Inquiries</p>
                                    {
                                        footerInfo.contact.map((item, index) => (
                                            <p key={index} className='text-white text-sm'>{item.title}</p>
                                        ))
                                    }
                                    <div className='flex flex-wrap gap-x-3 justify-center xl:justify-start'>
                                        {
                                            footerInfo.socials.map((social, index) => (
                                                <Link
                                                    key={index}
                                                    href={social.link}
                                                    target='_blank'
                                                >
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <Image src={social.icon} alt={social.name} className='w-7 h-7 mt-2 md:mt-0' />
                                                    </motion.div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='mt-16 mb-5' />

                <div className='w-full flex flex-col xl:flex-row justify-center gap-y-3 xl:gap-y-0 text-white text-sm text-center xl:text-start'>
                    <p className='border-b-[1px] xl:border-b-0 xl:border-r-[1px] border-white pb-3 xl:pb-0 xl:pr-3'>© {year} Whipcare. All rights reserved.</p>
                    <p className='pl-3'>
                        <Link href="/terms-and-conditions"> Terms and Conditions,</Link>
                        <Link href="/privacy-policy"> Privacy Policy</Link></p>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer