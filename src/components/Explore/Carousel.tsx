

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import mockup from "@/assets/images/explore/mockup1.svg"
import mockup2 from "@/assets/images/explore/mockup2.png"


const ExploreCarousel = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 h-full w-full">
                            <div>
                                <div className="w-full h-full flex aspect-square items-center justify-center">
                                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                    <Image src={mockup2} alt="mockup" className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
        </Carousel>
    )
}

export default ExploreCarousel