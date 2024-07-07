import { ourValuesInfo } from '@/utils/about.data'
import React from 'react'
import Values from '../cards/Values'

const OurValues = () => {
    return (
        <section>
            <div className='xl:px-[5rem] 2xl:px-[7rem] flex flex-col gap-y-7'>
                <div className="w-full h-full">
                    <h2 className='text-3xl text-center font-semibold'>Our Values</h2>
                </div>
                <div className='w-full flex flex-wrap gap-y-5'>
                    {
                        ourValuesInfo.map((value, index) => (
                            <div key={index} className='xl:w-1/2 px-7 xl:px-20'>
                                <Values title={value.title} image={value.image} description={value.description} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurValues