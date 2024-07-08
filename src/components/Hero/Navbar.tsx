import React from "react"
import { navLinks } from "@/utils/data"
import logo from "@/assets/logo.svg"
import Image from "next/image"

// Shadcn
// import {
//     Sheet,
//     SheetClose,
//     SheetContent,
//     SheetDescription,
//     SheetFooter,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet"

interface NavbarProps {
    textColor: string
}

const Navbar: React.FC<NavbarProps> = ({ textColor }) => {
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

            <div className="xl:hidden">
                {/* <Sheet>
                    <div className="bg-white">
                        <SheetTrigger asChild>
                            <button>Open</button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when {"you're"} done.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </div>
                </Sheet> */}
            </div>
        </nav >
    )
}

export default Navbar