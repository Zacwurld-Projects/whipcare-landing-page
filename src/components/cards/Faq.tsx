import React from 'react'
import plus from "@/assets/icons/plus.svg"
import Image from 'next/image';

interface FaqCardProps {
    item: {
        question: string;
        answer: string
    };
    isOpen: boolean;
    onToggle: (index: any) => void;
    index: any
}

const FaqCard: React.FC<FaqCardProps> = ({
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
                <h3 className="text-white text-[20px] font-semibold">{item.question}?</h3>
                <span onClick={() => onToggle(index)} className="hover:cursor-pointer">
                    {isOpen ? <span>X</span> : <Image src={plus} alt="plus" />}
                </span>
            </div>
            <div className={`card-content ${isOpen ? 'open' : ''}`}>
                <p className="text-white text-sm">{item.answer}</p>
            </div>
        </div>
    )
}

export default FaqCard