import { AppImage, type ImageSource } from "@/components/AppImage";

const CARD_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

type AspectImageProps = {
  src: ImageSource;
  alt: string;
  aspectClass?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/** Image in a fixed aspect box — prevents CLS with fill + explicit container height */
export function AspectImage({
  src,
  alt,
  aspectClass = "aspect-[4/3]",
  sizes = CARD_SIZES,
  priority,
  className,
}: AspectImageProps) {
  return (
    <div className={`relative overflow-hidden ${aspectClass}`}>
      <AppImage src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} />
    </div>
  );
}
