import React from 'react'
import WhiteLogo from "@/assets/whip-white.png"
import OrangeLogo from "@/assets/whip.png"
import Image from 'next/image'

interface IProps {
    white: boolean
}

const Logo = (props: IProps) => {
    const { white } = props

    const logoSrc = white ? WhiteLogo : OrangeLogo

    return (
        <div className='flex flex-col items-center'>
            <Image src={logoSrc} className='w-12' alt="Whipcare logo" />
            <p>
                <span className={`${!white ? 'text-orange-800' : 'text-orange-100'} font-semibold`}>Whip</span>
                <span className={`${!white ? 'text-gray-500' : 'text-gray-300'} font-medium`}>care</span>
            </p>
        </div>
    )
}

export default Logo