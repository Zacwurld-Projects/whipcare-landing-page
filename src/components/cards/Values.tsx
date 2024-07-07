import Image from 'next/image';
import React from 'react'

interface ValuesProps {
    title: string;
    image: string;
    description: string;
}

const Values: React.FC<ValuesProps> = ({
    title,
    image,
    description
}) => {
    return (
        <div className='h-full w-full'>
            <div className='w-full flex gap-x-5 items-center'>
                <div>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full bg-brand-500'>
                        <div className='w-7 h-7'>
                            <Image src={image} alt={title} className='w-full h-full' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h2 className='text-gray-900 text-[25px] font-semibold'>{title}</h2>
                    <p className='text-sm text-gray-500 font-light'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Values