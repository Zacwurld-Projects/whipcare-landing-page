"use client"

import { useState } from 'react'

import Image from "next/image"

import axios from "axios"

import { registerPath } from '@/utils/paths'

import { ArrowRight } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// import mockup from "@/assets/images/hero/mockup.svg"
import reviewers from "@/assets/images/hero/reviewers.svg"
import playstoreIcon from "@/assets/icons/playstore.svg"
import appstoreIcon from "@/assets/icons/appstore.svg"
import ratingImage from "@/assets/icons/five-star-rating.svg"
import HeroCarousel from "./Carousel"
import { carouselInfo } from "@/utils/data"

import { fadeIn } from "@/variants"
import { motion } from 'framer-motion'

const Hero = () => {
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
            })

    }

    return (
        <section className="w-full xl:h-[717px]">
            <motion.div
                className="h-full w-full flex flex-col xl:flex-row gap-y-10 xl:gap-y-0 px-7 xl:px-[5rem] 2xl:px-0 my-[2rem] xl:my-0"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
            >
                {/* Text */}
                <div className="xl:w-1/2 flex flex-col justify-center gap-y-7">
                    <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-y-2 xl:gap-x-2 xl:gap-y-0">
                        <Image src={reviewers} alt="reviewers" />
                        <div className="flex flex-col">
                            <Image src={ratingImage} alt="rating" />
                            <span>Join 50,000+ happy users</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-[50px] xl:text-[68px] text-gray-900 font-bold leading-tight">Access Quality  <br /> Car
                            Services <br /> Around You
                        </h1>
                        <p className="text-gray-600 text-md xl:w-2/3">
                            From mechanics to detailers, Get connected to top-rated professionals seamlessly.
                        </p>

                        <div className="flex gap-4">
                            <div className="flex items-center justify-between w-[9rem] bg-black text-white px-3 py-1 rounded-md">
                                <div className="w-7 h-7">
                                    <Image src={playstoreIcon} alt="playstore" className="w-full h-full" />
                                </div>
                                <div className="flex flex-col ">
                                    <span className="text-xs">Get It On</span>
                                    <span className="text-sm">Google Play</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-[9.5rem] bg-black text-white pl-1 pr-2 py-2 rounded-md">
                                <div className="w-10 h-10">
                                    <Image src={appstoreIcon} alt="playstore" className="w-full h-full" />
                                </div>
                                <div className="flex flex-col ">
                                    <span className="text-xs">Download on the</span>
                                    <span className="text-sm">App Store</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 text-md xl:w-2/3">
                            Join our Newsletter and Stay updated with Whipcare!
                        </p>
                    </div>
                    <div className="flex items-center gap-3 xl:gap-5">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#F5F5F5] rounded-full h-[50px] w-[82%] xl:w-[260px] px-5" />

                        <button
                            onClick={handleRegister}
                            className={`${loader ? 'bg-brand-500/20' : 'bg-brand-500'} flex justify-center items-center  text-white rounded-full h-[45px] xl:h-[50px] w-[45px] xl:w-[160px]`}
                            disabled={loader}
                        >
                            <span className='hidden xl:block capitalize'>
                                Sign Up
                            </span>
                            <ArrowRight className='xl:hidden' size={20} />
                        </button>
                    </div>
                </div>

                {/* Mockup */}
                <div className="xl:w-1/2">
                    {/* <Image src={mockup} className="xl:h-[717px] xl:w-[698px]" alt="mockup" /> */}
                    {
                        <div className="h-full">
                            <HeroCarousel
                                items={carouselInfo}
                            />
                        </div>
                    }
                </div>
            </motion.div>
        </section>
    )
}

export default Hero