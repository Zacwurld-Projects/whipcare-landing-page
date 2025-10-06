import React from 'react';
import Image from 'next/image';

interface DropdownProps {
    items: { name: string; flag: string; state: string }[]
    onSelect?: (country: { name: string; flag: string; state: string }) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect }) => {
    return (
        <div className='w-full bg-transparent shadow-sm shadow-gray-300'>
            {
                items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full flex items-center gap-x-2 px-2 py-3 border-b-[1px] border-gray-300 hover:bg-gray-50 cursor-pointer"
                        onClick={() => onSelect?.(item)}
                    >
                        <div className='w-[20px] h-[20px]'>
                            <Image
                                src={item.flag}
                                alt={`${item.name} flag`}
                                className='w-full h-full'
                            />
                        </div>
                        <span className='text-sm'>{item.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Dropdown;