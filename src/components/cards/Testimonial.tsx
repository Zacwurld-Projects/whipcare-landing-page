import { Star } from "lucide-react"
import Image from "next/image"
import React from "react"
import userRatingIcon from "@/assets/images/hero/user-rating.svg"


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
        <div className="w-[20rem] h-full bg-white rounded-xl">
            <div className="w-full h-full p-7 flex flex-col gap-y-3 justify-center">
                <div className="flex">
                    <Image src={userRatingIcon} alt="user rating" />
                </div>
                <div className="h-2/3">
                    <p className="text-sm font-medium">{`"${testimonial}"`}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                    <div className="w-10 h-10">
                        <Image src={image}
                            className="rounded-full w-full h-full object-cover"
                            alt={`${name} testimonial image`} />
                    </div>
                    <p className="text-md font-medium">{name}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard