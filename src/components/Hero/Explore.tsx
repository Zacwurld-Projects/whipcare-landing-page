"use client"

import { useState } from "react"
import Image from "next/image"

import Expand from "../cards/Expand"
import { explore } from "@/utils/data"
import mockup from "@/assets/images/hero/explore-mockup.png"

import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const Explore = () => {
    const [openCardIndex, setOpenCardIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        if (openCardIndex === index) {
            setOpenCardIndex(null); // Close the card if it's already open
        } else {
            setOpenCardIndex(index); // Open the card
        }
    }


    return (
        <section
            className="h-full xl:h-[600px] w-full my-[5rem]"
        >
            <div className='h-full w-full flex flex-col-reverse xl:flex-row bg-black py-[3rem] xl:py-0' >
                <div className="xl:w-1/2">
                    <div className="md:w-[35rem] xl:w-[34rem]">
                        <motion.div
                            animate={{ x: 0 }}
                            initial={{ x: -100 }}
                        >
                            <Image src={mockup} alt="mockup" className="w-full h-full" />
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-col justify-center xl:w-1/2 gap-y-10 px-7 xl:px-0 xl:pr-20">
                    <motion.div
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="flex flex-col gap-y-2 text-white text-center">
                        <h2 className="text-4xl font-semibold">Explore Whipcare</h2>
                        <h6 className="font-medium text-sm">Here is a step by step guide on how to use Whipcare.</h6>
                    </motion.div>
                    <div className="w-full">
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex flex-col gap-5">
                            {
                                explore.map((item, index) => (
                                    <Expand
                                        key={index}
                                        item={item}
                                        isOpen={openCardIndex === index}
                                        onToggle={handleToggle}
                                        index={index}
                                    />
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore