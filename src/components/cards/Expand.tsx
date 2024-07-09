"use client"

import React, { useState } from "react"
import Image from "next/image"

import plus from "@/assets/icons/plus.svg"
import minus from "@/assets/icons/minus.svg"

interface ExpandableCardProps {
    item: { title: string; description: string }; // Adjust the type according to your actual data structure
    isOpen: boolean;
    onToggle: (index: any) => void;
    index: any
}

const Expand: React.FC<ExpandableCardProps> = ({
    item,
    isOpen,
    onToggle,
    index
}) => {
    return (
        <div
            className={`flex flex-col justify-between gap-3 p-3 rounded-xl ${isOpen ? 'bg-brand-500' : 'bg-gray-900'}`}
        >
            <div className="w-full flex justify-between items-center">
                <h3 className="text-white text-[20px] font-semibold">{item.title}</h3>
                <span onClick={() => onToggle(index)} className="hover:cursor-pointer">
                    {isOpen ? <Image src={minus} alt="minus" /> : <Image src={plus} alt="plus" />}
                </span>
            </div>
            <div className={`expand-card-content ${isOpen ? 'open' : ''}`}>
                <p className="text-white text-sm">{item.description}</p>
            </div>
        </div>
    )
}

export default Expand