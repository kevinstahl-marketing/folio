import Image from "next/image";

export default function LaConcheriaPreview() {
  return (
    <Image
      src="/images/la-concheria/main.jpg"
      alt="La Concheria Shopify storefront"
      fill
      sizes="(max-width: 560px) 300px, 480px"
      style={{
        objectFit: "cover",
        objectPosition: "top center",
      }}
    />
  );
}