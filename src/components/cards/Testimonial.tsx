import { Star } from "lucide-react"
import Image from "next/image"
import React from "react"

interface TestimonialProps {
    testimonial: string
    name: string
    image: any
}

const TestimonialCard: React.FC<TestimonialProps> = ({
    testimonial,
    name,
    image
}) => {
    return (
        <div className="w-full h-full bg-white rounded-xl">
            <div className="w-full h-full p-7 flex flex-col gap-y-3 justify-center">
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            className="text-amber-500"
                            size={15}
                        />
                    ))}
                </div>
                <p className="text-sm font-medium">{`"${testimonial}"`}</p>
                <div className="flex gap-x-3 items-center">
                    <Image src={image}
                        className="rounded-full"
                        alt={`${name} testimonial image`} />
                    <p className="text-md font-medium">{name}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard