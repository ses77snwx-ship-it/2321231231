import type React from "react";
import { Interactive, type InteractivitySchema } from "remotion";
import { ACCENT, BORDER, CARD, FONT_DISPLAY, FONT_MONO } from "./palette";

type StatCardProps = {
  readonly value: string;
  readonly label: string;
  readonly style?: React.CSSProperties;
};

const StatCardInner: React.FC<StatCardProps> = ({ value, label, style }) => {
  return (
    <Interactive.Div
      style={{
        width: 320,
        padding: 28,
        borderRadius: 14,
        backgroundColor: CARD,
        border: `1px solid ${BORDER}`,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        ...style,
      }}
    >
      <div
        style={{
          color: ACCENT,
          fontFamily: FONT_DISPLAY,
          fontSize: 56,
          fontWeight: 800,
        }}
      >
        {value}
      </div>
      <div
        style={{
          color: "#94A3B8",
          fontFamily: FONT_MONO,
          fontSize: 15,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </Interactive.Div>
  );
};

const statCardSchema = {
  value: { type: "text-content", default: "0", description: "Stat value" },
  label: { type: "text-content", default: "", description: "Stat label" },
} as const satisfies InteractivitySchema;

export const StatCard = Interactive.withSchema({
  Component: StatCardInner,
  componentName: "<StatCard>",
  schema: statCardSchema,
  wrapInSequence: true,
});
