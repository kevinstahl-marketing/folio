import Image from "next/image";

type ImagePreviewProps = {
  src: string;
  alt: string;
  position?: string;
};

export default function ImagePreview({
  src,
  alt,
  position = "center",
}: ImagePreviewProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 560px) 300px, 480px"
      style={{
        objectFit: "cover",
        objectPosition: position,
      }}
    />
  );
}