import React from 'react'
import Hero from '@/components/About/Hero'
import CTA from '@/components/Hero/CTA'
import OurStory from '@/components/About/OurStory'
import OurValues from '@/components/About/OurValues'
import Team from '@/components/About/Team'

const page = () => {
    return (
        <section>
            <Hero />
            <OurStory />
            <OurValues />
            <Team />
            <div className=' 2xl:px-[7rem]'>
                <CTA />
            </div>
        </section>
    )
}

export default page