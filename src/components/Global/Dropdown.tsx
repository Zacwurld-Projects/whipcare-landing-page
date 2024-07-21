import React from 'react'



interface DropdownProps {
    items: { name: string }[]
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
    return (
        <div className='w-full bg-transparent shadow-sm shadow-gray-300'>
            {
                items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full flex justify-center px-2 py-3 border-b-[1px] border-gray-300">
                        <span className='text-sm'>{item.name}</span>
                    </div>
                ))
            }

        </div>
    )
}

export default Dropdown