import React from 'react'

import pieChart from "@/assets/icons/pie-chart.svg"
import { Dot } from "lucide-react"
import Image from "next/image"

import { motion } from 'framer-motion'

interface ListProps {
    title: string
    list: string[]
}

const List: React.FC<ListProps> = ({
    title,
    list
}) => {
    const [rotate, setRotate] = React.useState(false)

    return (
        <div className="w-full">
            <div className="w-full flex gap-5">
                <div>
                    <div className="p-2 h-10 w-10 rounded-full bg-[#FBE8FF]">
                        <motion.div
                            animate={{ rotate: rotate ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => setRotate(!rotate)}
                            className='hover:cursor-pointer'
                        >
                            <Image src={pieChart} alt="pie-chart" className="w-[3rem]" />
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <div className="w-full flex flex-col">
                        {
                            list.map((item, index) => (
                                <div key={index} className="w-full flex items-start justify-start">
                                    <div>
                                        <Dot size={22} />
                                    </div>
                                    <h6 className="text-sm">{item}</h6>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List