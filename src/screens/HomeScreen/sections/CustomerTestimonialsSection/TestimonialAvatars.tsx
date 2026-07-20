import type { ComponentType } from "react";
import { VehicleWashIcon } from "../ServiceCategoryCardsSection/ServiceCategoryIcons";
import mosesAvatar from "./moses-avatar.svg";
import tosinAvatar from "./tosin-avatar.svg";

type TestimonialAvatarProps = {
  className?: string;
  alt?: string;
};

export const AdeolaTestimonialAvatar = ({
  className,
  alt,
  ...props
}: TestimonialAvatarProps) => (
  <VehicleWashIcon
    className={className ?? "h-[43px] w-[43px] shrink-0"}
    aria-label={alt}
    {...props}
  />
);

const PhotoAvatar = ({
  src,
  alt,
  className,
}: TestimonialAvatarProps & { src: string }) => (
  <img
    src={src}
    alt={alt ?? ""}
    className={className ?? "h-[43px] w-[43px] shrink-0"}
  />
);

export const MosesTestimonialAvatar = (props: TestimonialAvatarProps) => (
  <PhotoAvatar src={mosesAvatar.src} {...props} />
);

export const TosinTestimonialAvatar = (props: TestimonialAvatarProps) => (
  <PhotoAvatar src={tosinAvatar.src} {...props} />
);

export const testimonialAvatarMap: Record<
  string,
  ComponentType<TestimonialAvatarProps>
> = {
  "Adeola Olanrewaju": AdeolaTestimonialAvatar,
  "Moses Adeoye": MosesTestimonialAvatar,
  "Tosin Olawale": TosinTestimonialAvatar,
};
