import { Easing, interpolate, useCurrentFrame } from "remotion";
import { M_BLUE } from "./MStripe";

type Props = {
  readonly delay: number;
  readonly value: string;
  readonly unit: string;
  readonly label: string;
};

export const SpecCard: React.FC<Props> = ({ delay, value, unit, label }) => {
  const frame = useCurrentFrame();
  const t = frame - delay;

  const opacity = interpolate(t, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(t, [0, 22], [50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 420,
        opacity,
        translate: `0px ${translateY}px`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 10,
          color: "#ffffff",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <span style={{ fontSize: 96, fontWeight: 800 }}>{value}</span>
        <span style={{ fontSize: 34, fontWeight: 600, color: M_BLUE }}>
          {unit}
        </span>
      </div>
      <div
        style={{
          marginTop: 10,
          color: "#9a9aa5",
          fontSize: 26,
          fontWeight: 500,
          letterSpacing: 2,
          textTransform: "uppercase",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        {label}
      </div>
    </div>
  );
};
