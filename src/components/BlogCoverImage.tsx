import Image, { type ImageProps } from "next/image";
import type { BlogImage } from "@/screens/BlogScreen/blogData";

type BlogCoverImageProps = Omit<ImageProps, "src"> & {
  src: BlogImage | null;
};

/** Remote GCS signed URLs expire — skip Next optimizer to avoid stale cache. */
export function BlogCoverImage({ src, alt, className, ...props }: BlogCoverImageProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={typeof alt === "string" && alt ? alt : "No cover image"}
        className={
          className
            ? `bg-[#e5e7eb] ${className}`
            : "bg-[#e5e7eb]"
        }
        style={
          "fill" in props && props.fill
            ? { position: "absolute", inset: 0 }
            : undefined
        }
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      unoptimized={typeof src === "string"}
      {...props}
    />
  );
}
