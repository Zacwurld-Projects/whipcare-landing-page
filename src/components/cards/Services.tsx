import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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
    return (
        <div className='h-[23rem] w-full mb-[5rem]'>
            <div className='h-full w-full px-10 flex flex-col justify-center gap-5 border-l-4 border-dotted border-gray-200'>
                <div className={`p-2 w-10 h-10 rounded-xl ${backgroundColor} `}>
                    <Image src={icon} alt={`${title} image`} />
                </div>
                <div className='flex flex-col gap-y-10'>
                    <div>
                        <h2 className='text-[#12141D] text-2xl font-semibold'>{title}</h2>
                        <p className='text-gray-700 text-xs'>{description}</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <button className='text-brand-500 text-sm font-medium'>Learn More</button>
                        <ArrowRight
                            className='text-brand-500'
                            size={16}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard