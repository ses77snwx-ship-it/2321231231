import { interpolate, useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_ORANGE } from "../palette";
import { useUnit } from "../useUnit";

const petalPath = (t: number) => {
  const points: string[] = [];
  const n = 48;
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = 32 + 10 * Math.sin(a * 6 + t);
    const x = 50 + r * Math.cos(a);
    const y = 50 + r * Math.sin(a);
    points.push(`${x},${y}`);
  }
  return points.join(" ");
};

const BLOBS = [
  { cx: 50, cy: 50, r: 10 },
  { cx: 50, cy: 28, r: 6 },
  { cx: 50, cy: 72, r: 6 },
  { cx: 30, cy: 38, r: 5 },
  { cx: 70, cy: 38, r: 5 },
  { cx: 30, cy: 62, r: 5 },
  { cx: 70, cy: 62, r: 5 },
];

export const ShapeLiquidScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const u = useUnit();
  const t = frame / 20;
  const opacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <ScreenChrome label="Shape / Liquid">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: REEL_ORANGE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity,
        }}
      >
        <svg width={560 * u} height={560 * u} viewBox="0 0 100 100">
          <polygon
            points={petalPath(t)}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth={1.4}
          />
          {BLOBS.map((b, i) => (
            <circle
              key={i}
              cx={b.cx + Math.sin(t + i) * 2}
              cy={b.cy + Math.cos(t + i) * 2}
              r={b.r}
              fill="#161616"
            />
          ))}
        </svg>
      </div>
    </ScreenChrome>
  );
};
