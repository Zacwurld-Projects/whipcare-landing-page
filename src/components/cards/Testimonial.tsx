import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface TestimonialProps {
  testimonial: string;
  name: string;
  image: any;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  testimonial,
  name,
  image,
  rating,
}) => {
  const renderStars = () => (
    <div className="flex items-center gap-[2px]">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );

  const renderAvatar = () => {
    if (image) {
      return (
        <Image
          src={image}
          alt={`${name} testimonial image`}
          width={40}
          height={40}
          className="rounded-full w-full h-full object-cover"
        />
      );
    }

    const initial = name?.charAt(0)?.toUpperCase() || "?";
    return (
      <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg">
        {initial}
      </div>
    );
  };

  return (
    <div className="w-[20rem] h-full bg-white rounded-xl">
      <div className="w-full h-full p-7 flex flex-col gap-y-3 justify-center">
        {renderStars()}
        <div className="h-2/3">
          <p className="text-sm font-medium">{`"${testimonial}"`}</p>
        </div>
        <div className="flex gap-x-3 items-center">
          <div className="w-10 h-10">{renderAvatar()}</div>
          <p className="text-md font-medium">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
