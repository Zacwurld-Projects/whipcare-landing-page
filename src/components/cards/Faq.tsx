import React from 'react'
import plus from "@/assets/icons/plus.svg"
import Image from 'next/image';
import { Plus, X } from 'lucide-react';

interface FaqCardProps {
    item: {
        question: string;
        answer: string
    };
    isOpen: boolean;
    onToggle: (index: any) => void;
    index: any;
    isLastItem: boolean
}

const FaqCard: React.FC<FaqCardProps> = ({
    item,
    isOpen,
    onToggle,
    index,
    isLastItem
}) => {
    return (
        <div
            className={`flex flex-col justify-between gap-3 pt-7 pb-3 px-3 bg-white border-t-[1px] ${isLastItem ? 'border-b-[1px]' : ''} border-gray-500`}
        >
            <div className="w-full flex justify-between items-center">
                <h3 className="text-gray-900 text-[20px] font-semibold">{item.question}?</h3>
                <div onClick={() => onToggle(index)} className={`hover:cursor-pointer w-14 h-14 flex items-center justify-center rounded-full ${isOpen ? 'bg-brand-500' : 'bg-gray-300'}`}>
                    {isOpen ? <X className='text-white' size={19} /> : <Plus className='text-gray-600' size={17} />}
                </div>
            </div>
            <div className={`card-content w-2/3  ${isOpen ? 'open' : ''}`}>
                <p className="text-black text-sm">{item.answer}</p>
            </div>


        </div>
    )
}

export default FaqCard