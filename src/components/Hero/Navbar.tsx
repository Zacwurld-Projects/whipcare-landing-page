import React from "react"
import { navLinks } from "@/utils/data"
import logo from "@/assets/logo.svg"
import whiteLogo from "@/assets/white-logo.svg"
import Image from "next/image"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface NavbarProps {
    textColor: string;
    hamburgerColor: string
}

const Navbar: React.FC<NavbarProps> = ({ textColor, hamburgerColor }) => {
    return (
        <nav className="w-full">
            <div className="hidden xl:flex justify-between items-center py-4 xl:px-[5rem] 2xl:px-0">
                <div className="w-[122px] h-[77px]">
                    <Image src={logo} alt="Logo" className="h-full w-full" />
                </div>
                <ul className="flex space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className={`${textColor} hover:text-gray-800 text-md`}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <button className="bg-brand-500 text-white w-[160px] h-[50px] rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="xl:hidden px-7 pt-5">
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="w-full flex justify-between items-center">
                            <div className="">
                                <div className="w-[115px] h-[70px]">
                                    {
                                        textColor === 'text-white' ? (
                                            <Image src={whiteLogo} alt="Logo" className="h-full w-full" />
                                        ) : (<Image src={logo} alt="Logo" className="h-full w-full" />)
                                    }

                                </div>
                            </div>
                            <button>
                                <Menu className={hamburgerColor} size={35} />
                            </button>
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader className="w-full">
                            <SheetTitle className="aria-invisible">Menu</SheetTitle>
                            <SheetDescription className="aria-invisible">
                                List of nav links
                            </SheetDescription>
                            <div className="w-full h-full flex justify-center">
                                <div className="w-[115px] h-[70px]">
                                    <Image src={logo} alt="Logo" className="h-full w-full" />
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
                            </ul>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav >
    )
}

export default Navbar