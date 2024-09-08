import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'

interface ServicesProps {
    title: string
    icon: any
    description: string
    backgroundColor: string
}

const ServicesCard: React.FC<ServicesProps> = ({
    title,
    icon,
    description,
    backgroundColor
}) => {
    const [rotate, setRotate] = React.useState(false)

    return (
        <div className='h-[22rem] xl:h-[23rem] w-full xl:mb-[5rem]'>
            <div className='h-full w-full px-10 flex flex-col justify-center gap-5 border-t-4 xl:border-t-0 xl:border-l-4 border-dotted border-gray-200'>
                <div>
                    <div className={`p-2 w-12 h-12 rounded-xl ${backgroundColor} `}>
                        <motion.div
                            animate={{ rotate: rotate ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => setRotate(!rotate)}
                            className='hover:cursor-pointer'
                        >
                            <Image src={icon} alt={`${title} image`} />
                        </motion.div>
                        {/* <Image src={icon} alt={`${title} image`} /> */}
                    </div>

                </div>
                <div className='flex flex-col gap-y-10'>
                    <div>
                        <h2 className='text-[#12141D] text-2xl font-semibold'>{title}</h2>
                        <p className='text-gray-700 text-sm'>{description}</p>
                    </div>
                    {/* <div className='flex items-center gap-x-3'>
                        <button className='text-brand-500 text-sm font-medium'>Learn More</button>
                        <ArrowRight
                            className='text-brand-500'
                            size={16}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ServicesCard