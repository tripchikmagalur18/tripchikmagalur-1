import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export type ImageSource = string | StaticImageData;

function intrinsicSize(src: ImageSource): { width: number; height: number } {
  if (typeof src !== "string") {
    return { width: src.width, height: src.height };
  }
  return { width: 1200, height: 800 };
}

export type AppImageProps = {
  src: ImageSource;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Wrapper around next/image with explicit dimensions (or fill) to limit CLS.
 */
export function AppImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  priority = false,
  className,
  style,
}: AppImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={cn("object-cover", className)}
        style={style}
      />
    );
  }

  const { width: iw, height: ih } = intrinsicSize(src);
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? iw}
      height={height ?? ih}
      sizes={sizes}
      priority={priority}
      className={className}
      style={style}
    />
  );
}
