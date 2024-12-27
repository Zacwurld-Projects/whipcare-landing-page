import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselProp {
  items: any[];
}

const HeroCarousel = ({ items }: CarouselProp) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  const handleMouseEnter = () => {
    plugin.current.stop();
  };

  const handleMouseLeave = () => {
    plugin.current.play();
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full h-full flex items-center'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CarouselContent className='h-full'>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className='p-1 h-full w-full flex justify-center items-center'>
              <div className='xl:h-[90%] xl:w-[698px] flex aspect-square'>
                <Image
                  src={item.image as any}
                  alt={item.alt}
                  className='w-full h-full'
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
};

export default HeroCarousel;
