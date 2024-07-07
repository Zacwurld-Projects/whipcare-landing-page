import { services } from '@/utils/data'
import React from 'react'
import ServicesCard from '../cards/Services'

const Services = () => {
    return (
        <section className='w-full h-full '>
            <div className="w-full h-full flex flex-col gap-y-20 xl:px-[5rem] 2xl:px-0">
                <div className='flex flex-col gap-y-2 xl:gap-y-0 text-center px-7 xl:px-0'>
                    <h2 className='text-3xl text-black font-semibold'>Explore Our Services</h2>
                    <p className='text-sm text-black'>Discover how WhipCare connects you to a variety of car service providers</p>
                </div>
                <div>
                    <div className='w-full flex flex-col xl:flex-row'>
                        {
                            services.map((service, index) => (
                                <ServicesCard
                                    key={index}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    backgroundColor={service.backgroundColor}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services