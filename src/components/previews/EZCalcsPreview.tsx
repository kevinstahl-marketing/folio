import Image from "next/image";

// ─── EZCalcs app preview ──────────────────────────────────────────────────────

export default function EZCalcsPreview() {
  return (
    <Image
      src="/images/ezcalcs/main.png"
      alt="EZCalcs engineering calculator platform"
      fill
      sizes="(max-width: 560px) 300px, 480px"
      style={{
        objectFit: "cover",
        objectPosition: "top center",
      }}
    />
  );
}