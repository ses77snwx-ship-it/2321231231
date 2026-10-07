import { Easing, interpolate, useCurrentFrame } from "remotion";
import { REEL_ORANGE } from "./palette";

export const SunburstSticker: React.FC<{ readonly size?: number }> = ({
  size = 110,
}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    output: "perceptual-scale",
  });
  const spin = interpolate(frame, [0, 600], [0, 25]);

  const spikes = 12;
  const points: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (Math.PI * i) / spikes;
    const r = i % 2 === 0 ? 50 : 24;
    const x = 50 + r * Math.cos(angle);
    const y = 50 + r * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ scale, rotate: `${spin}deg` }}
    >
      <polygon points={points.join(" ")} fill={REEL_ORANGE} />
    </svg>
  );
};

export const TopCaption: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 118,
        left: 60,
        right: 60,
        display: "flex",
        alignItems: "center",
        gap: 4,
        opacity,
      }}
    >
      <div style={{ marginLeft: -36 }}>
        <SunburstSticker size={100} />
      </div>
      <div
        style={{
          marginLeft: -30,
          color: "#ffffff",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 32,
          fontWeight: 700,
          rotate: "-4deg",
          textShadow: "0 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        5.5 крута в motion-дизайне
      </div>
    </div>
  );
};
