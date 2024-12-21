"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import axios from "axios"

import { ArrowRight, Search } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

import { registerPath } from '@/utils/paths'

import backgroundImage from "@/assets/images/hero/cta-bg.png"
import mockup from "@/assets/images/hero/cta-mockup.svg"
import playstoreIcon from "@/assets/icons/playstore.svg"
import appstoreIcon from "@/assets/icons/appstore.svg"

import { fadeIn } from "@/variants"
import { motion } from 'framer-motion'


const CTA = () => {
    const [email, setEmail] = useState('')
    const [loader, setLoader] = useState(false)

    const { toast } = useToast()

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

    const handleRegister = () => {

        setLoader(true)
        axios.post(`${BASE_URL + registerPath}`, {
            email: email
        })
            .then((response) => {
                toast({
                    title: response?.data.message,
                    description: "Your registration was successful",
                })
            })
            .catch((error) => {
                toast({
                    title: error?.response.data.message,
                    description: "An error occured, try again",
                    variant: "destructive"
                })
            })
            .finally(() => {
                setLoader(false)
                setEmail('')
            })

    }

    return (
        <section>
            <div className='w-full h-full my-[5rem] xl:px-[5rem] 2xl:px-0'>
                <div className='w-full xl:h-[25rem] flex items-end'>
                    <div className='w-full xl:h-[20rem] xl:rounded-2xl relative'>
                        <div className='absolute h-full w-full'>
                            <Image src={backgroundImage}
                                className='h-full w-full object-cover xl:object-fill'
                                alt="background image" />
                        </div>
                        <div className='w-full xl:w-1/2 h-full relative z-20 px-7 xl:px-10 py-20'>
                            <div className='w-full h-full flex flex-col md:items-center xl:items-start justify-center gap-y-3'>
                                <div className='flex flex-col gap-y-1'>
                                    <h2 className='text-white font-semibold text-3xl capitalize'>Your car, our priority</h2>
                                    <p className='text-white md:w-2/3 xl:w-full md:text-center xl:text-start'>Sign up with your email and get informed about discounts , Whipcare tips and exciting features coming your way!</p>
                                </div>
                                <div className='w-full flex flex-col gap-y-3'>

                                    <div className='w-full flex justify-center'>
                                        <div className='w-full md:w-2/3 xl:w-full h-[3rem] flex items-center md:justify-between xl:justify-between bg-white rounded-full py-1 pr-1 pl-3 mt-5 xl:mt-0'>
                                            <Search className='mr-2 xl:mr-0' size={16} />

                                            <input
                                                type="email"
                                                value={email}
                                                className='w-[90%] md:w-[70%] xl:w-[70%] 2xl:w-[75%] h-full outline-none'
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder='Enter your email' />

                                            <button
                                                onClick={handleRegister}
                                                className={`${loader ? 'bg-brand-500/20' : 'bg-brand-500'}  h-full text-white text-xs px-7 rounded-full`}
                                                disabled={loader}
                                            >
                                                <span className='hidden md:block'>
                                                    Sign Up
                                                </span>
                                                <ArrowRight className='md:hidden' size={16} />
                                            </button>
                                        </div>
                                    </div>


                                    <div className="flex gap-5 mt-2 justify-center xl:justify-start">
                                        <div className="flex items-center justify-between w-[9rem] bg-black text-white border-[1px] border-gray-500 px-3 py-2 rounded-md">
                                            <div className="w-7 h-7">
                                                <Image src={playstoreIcon} alt="playstore" className="w-full h-full" />
                                            </div>
                                            <div className="flex flex-col ">
                                                <span className="text-xs">Get It On</span>
                                                <span className="text-sm">Google Play</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between w-[9.5rem] bg-black text-white border-[1px] border-gray-500 pl-1 pr-2 py-2 rounded-md">
                                            <div className="w-10 h-10">
                                                <Image src={appstoreIcon} alt="playstore" className="w-full h-full" />
                                            </div>
                                            <div className="flex flex-col ">
                                                <span className="text-xs">Download on the</span>
                                                <span className="text-sm">App Store</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='hidden xl:block absolute h-[25rem] w-[17rem] right-[10rem] 2xl:right-[15rem]'>
                        <Image src={mockup} className='h-full w-full' alt='CTA mockup' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA