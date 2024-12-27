"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { ChevronDown, Menu } from "lucide-react"

import {
    Sheet,
    // SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { linkTree, navLinks } from "@/utils/data"
// import logo from "@/assets/logo.svg"
// import whiteLogo from "@/assets/white-logo.svg"
import nigerianFlag from "@/assets/icons/nigerian-flag.svg"
import chevronDownIcon from "@/assets/icons/chevron-down.svg"
import { ChevronUp } from "lucide-react"
import Dropdown from "../Global/Dropdown"
import Logo from "../lib/Logo"

interface NavbarProps {
    textColor: string;
    hamburgerColor: string
}

const languages = [
    {
        name: "English"
    },
    {
        name: "French"
    }
]

const Navbar: React.FC<NavbarProps> = ({ textColor, hamburgerColor }) => {
    const [showLanguages, setShowLanguages] = useState(false)

    const logoWhite = textColor === 'text-white' ? true : false

    return (
        <nav className="w-full">
            <div className="hidden xl:flex justify-between items-center py-4 xl:px-[5rem] 2xl:px-0">
                <div className="">
                    <Logo white={logoWhite} />
                </div>
                <ul className="flex items-center space-x-10">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className={`${textColor} hover:text-gray-800 text-md`}>
                                {link.name}
                            </a>

                        </li>
                    ))}

                    {/* Language */}
                    <div className="relative z-20">
                        {/* onClick={() => setShowLanguages(!showLanguages)} */}
                        <div
                            className="w-full flex items-center gap-x-2 hover:cursor-pointer"
                        >
                            <div className="w-[20px] h-[20px]">
                                <Image src={nigerianFlag} alt="flag" className="w-full h-full" />
                            </div>
                            <span className={`${textColor} hover:text-gray-800 text-md`}>EN</span>
                            <div>
                                {
                                    showLanguages ?
                                        <ChevronUp size={15} /> :
                                        <ChevronDown size={15} />
                                }
                                {/* <Image src={chevronDownIcon} alt="chevron" className="w-6 h-6" /> */}
                            </div>
                        </div>

                        {/* Languages Dropdown */}
                        <div className="w-[10rem] absolute bg-white">
                            {showLanguages &&
                                <Dropdown
                                    items={languages}
                                />
                            }
                        </div>
                    </div>
                </ul>
                <div>
                    <Link
                        href={linkTree}
                        target="_blank"
                        className="w-[160px] h-[45px] flex justify-center items-center bg-brand-500 text-white  rounded-full">
                        Get the App
                    </Link>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="xl:hidden pr-7 pt-5">
                <Sheet>
                    <div className="w-full flex justify-between items-center">
                        <div className="">
                            <div className="w-[115px] h-[70px]">
                                <Link href="/">
                                    {/* {
                                        textColor === 'text-white' ? (
                                            <Image src={whiteLogo} alt="Logo" className="h-full w-full" />
                                        ) : (<Image src={logo} alt="Logo" className="h-full w-full" />)
                                    } */}
                                    <div className="">
                                        <Logo white={logoWhite} />
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <SheetTrigger asChild>
                            <button>
                                <Menu className={hamburgerColor} size={35} />
                            </button>
                        </SheetTrigger>
                    </div>
                    <SheetContent>
                        <SheetHeader className="w-full">
                            <SheetTitle className="aria-invisible">Menu</SheetTitle>
                            <SheetDescription className="aria-invisible">
                                List of nav links
                            </SheetDescription>
                            <div className="w-full h-full flex justify-center">
                                <div className="w-[115px] h-[70px]">
                                    <Link href="/">
                                        {/* <Image src={logo} alt="Logo" className="h-full w-full" /> */}
                                        <div className="">
                                            <Logo white={false} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </SheetHeader>
                        <div className="flex py-4">
                            <ul className="flex flex-col gap-y-4">
                                {navLinks.map((link, index) => (
                                    <li key={index} className="text-start">
                                        <a href={link.url} className={`text-black hover:text-gray-800 text-md`}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}

                                {/* Language */}
                                <div className="flex items-center gap-x-2 hover:cursor-pointer">
                                    <div className="w-[20px] h-[20px]">
                                        <Image src={nigerianFlag} alt="flag" className="w-full h-full" />
                                    </div>
                                    <span className="text-black hover:text-gray-800 text-md">EN</span>
                                    <div>
                                        <Image src={chevronDownIcon} alt="chevron" className="w-6 h-6" />
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <SheetFooter>
                            <div>
                                <Link
                                    href={linkTree}
                                    target="_blank"
                                    className="w-[160px] h-[45px] flex justify-center items-center bg-brand-500 text-white  rounded-full">
                                    Get the App
                                </Link>
                            </div>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </nav >
    )
}

export default Navbar