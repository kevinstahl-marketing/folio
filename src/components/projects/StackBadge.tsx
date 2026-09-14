import { colors, fonts } from "@/lib/theme";

const TECH: Record<string, [string, string]> = {
  Laravel: ["#FF2D20", "L"],
  Python: ["#3776AB", "Py"],
  SymPy: ["#3c6e8f", "Sy"],
  MySQL: ["#4479A1", "SQL"],
  Livewire: ["#4e56a6", "Lw"],
  PHP: ["#777BB4", "php"],
  TailwindCSS: ["#06B6D4", "TW"],
  Shopify: ["#5a8a1a", "Sh"],
  Liquid: ["#5a8a1a", "Lq"],
  JavaScript: ["#c9a800", "JS"],
  Drupal: ["#0678BE", "Dr"],
  React: ["#00a8c9", "Re"],
  "HTML/CSS": ["#264DE4", "CSS"],
};

export default function StackBadge({
  name,
  accent,
}: {
  name: string;
  accent: string;
}) {
  const [bg, abbr] = TECH[name] ?? [accent, "?"];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 12px 7px 8px",
        background: "white",
        border: "1.5px solid rgba(26,23,20,0.1)",
        boxShadow: "2px 2px 0 rgba(26,23,20,0.07)",
        borderRadius: 5,
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 4,
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.mono,
          fontSize: 9,
          fontWeight: 700,
          color: "white",
          flexShrink: 0,
        }}
      >
        {abbr}
      </div>

      <span
        style={{
          fontFamily: fonts.sans,
          fontSize: 13.5,
          fontWeight: 500,
          color: colors.ink,
        }}
      >
        {name}
      </span>
    </div>
  );
}