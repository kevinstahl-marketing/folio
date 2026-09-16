import { Code2 } from "lucide-react";

import { tech } from "@/lib/tech";

import styles from "./StackBadge.module.css";

type StackBadgeProps = {
  name: string;
  accent: string;
};

export default function StackBadge({
  name,
  accent,
}: StackBadgeProps) {
  const definition = tech[name];

  const Icon = definition?.icon ?? Code2;
  const color = definition?.color ?? accent;

  return (
    <div className={styles.badge}>
      <Icon
        className={styles.icon}
        size={18}
        aria-hidden="true"
        style={{ color }}
      />

      <span>{name}</span>
    </div>
  );
}