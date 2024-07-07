"use client"

import { useState } from "react"
import Image from "next/image"

import Expand from "../cards/Expand"
import { explore } from "@/utils/data"
import mockup from "@/assets/images/hero/explore-mockup.svg"

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
            className="h-full w-full my-[5rem]"
        >
            <div className='h-full w-full flex bg-black' >
                <div className="w-1/2">
                    <div className="h-[50rem] w-full">

                        <Image src={mockup} alt="mockup" className="w-full h-full" />
                    </div>
                </div>
                <div className="flex flex-col justify-center w-1/2 gap-y-10 pr-20">
                    <div className="text-white text-center">
                        <h2 className="text-4xl font-semibold">Explore Whipcare</h2>
                        <h6 className="font-medium text-sm">Here is a step by step guide on how to use Whipcare.</h6>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col gap-5">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore