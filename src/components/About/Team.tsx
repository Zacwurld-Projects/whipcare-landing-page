import React from 'react'
import ellipse from "@/assets/images/about/team-ellipse.png"
import teamMember from "@/assets/images/about/team-member.png"
import Image from 'next/image'



const Team = () => {
    const team = [
        {
            name: "Name",
            image: teamMember,
        },
        {
            name: "Name",
            image: teamMember,
        },
        {
            name: "Name",
            image: teamMember,
        },
        {
            name: "Name",
            image: teamMember,
        },
        {
            name: "Name",
            image: teamMember,
        },
        {
            name: "Name",
            image: teamMember,
        },
        {
            name: "Name",
            image: teamMember,
        },
        {
            name: "Name",
            image: teamMember,
        },
    ]

    return (
        <section>
            <div className='xl:px-[5rem] 2xl:px-[7rem] mt-[5rem]'>
                <div className='text-center xl:text-start'>
                    <h2 className='text-3xl font-semibold xl:pl-[6rem] 2xl:pl-[4.5rem]'>
                        Meet The Team
                    </h2>
                </div>
                <div className='w-full flex flex-wrap justify-center'>
                    {
                        team.map((item, index) => (
                            <div key={index} className='relative w-[20rem] h-[25rem] group'>
                                <div className='absolute w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-20'>
                                    <Image src={item.image} alt={`${item.name} image`} className='h-full w-full' />
                                </div>
                                <div className='relative z-20 flex items-center justify-center w-full h-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:cursor-pointer'>
                                    <h2>{item.name}</h2>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Team