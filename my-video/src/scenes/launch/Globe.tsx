import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { ACCENT, FONT_MONO } from "./palette";

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

type City = {
  readonly name: string;
  readonly x: number;
  readonly y: number;
  readonly delay: number;
};

const CITIES: City[] = [
  { name: "NEW YORK", x: 220, y: 230, delay: 0 },
  { name: "LONDON", x: 480, y: 170, delay: 14 },
  { name: "TOKYO", x: 880, y: 220, delay: 28 },
  { name: "SÃO PAULO", x: 360, y: 440, delay: 42 },
];

// Arcs drawn between consecutive cities; static geometry, animated via dash reveal.
const ARCS = [
  { d: "M220,230 Q350,80 480,170", from: 10 },
  { d: "M480,170 Q700,50 880,220", from: 24 },
  { d: "M220,230 Q290,380 360,440", from: 38 },
];

const ARC_LENGTH = 620;

export const Globe: React.FC = () => {
  const frame = useCurrentFrame();
  const spin = frame * 0.15;

  return (
    <div style={{ position: "relative", width: 1100, height: 560 }}>
      <Interactive.Svg
        name="Globe wireframe"
        width={1100}
        height={560}
        viewBox="0 0 1100 560"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* latitude ellipses */}
        {[60, 140, 220].map((ry, i) => (
          <ellipse
            key={i}
            cx={550}
            cy={280}
            rx={430}
            ry={ry}
            fill="none"
            stroke="rgba(148,163,184,0.25)"
            strokeWidth={1.2}
          />
        ))}
        {/* longitude ellipses, rotating */}
        {[0, 45, 90, 135].map((deg, i) => (
          <ellipse
            key={i}
            cx={550}
            cy={280}
            rx={430}
            ry={220}
            fill="none"
            stroke="rgba(148,163,184,0.18)"
            strokeWidth={1}
            style={{
              transformOrigin: "550px 280px",
              rotate: `${deg + spin}deg`,
            }}
          />
        ))}
        <ellipse
          cx={550}
          cy={280}
          rx={430}
          ry={220}
          fill="none"
          stroke="rgba(248,250,252,0.4)"
          strokeWidth={2}
        />

        {ARCS.map((arc, i) => {
          const draw = interpolate(frame, [arc.from, arc.from + 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeOut,
          });
          return (
            <Interactive.Path
              key={i}
              name={`Route ${i + 1}`}
              d={arc.d}
              fill="none"
              stroke={ACCENT}
              strokeWidth={2.5}
              strokeDasharray={ARC_LENGTH}
              strokeDashoffset={ARC_LENGTH * (1 - draw)}
            />
          );
        })}
      </Interactive.Svg>

      {CITIES.map((city) => {
        const pop = interpolate(
          frame,
          [city.delay, city.delay + 16],
          [0.4, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.34, 1.56, 0.64, 1),
            output: "perceptual-scale",
          },
        );
        const labelOpacity = interpolate(
          frame,
          [city.delay + 8, city.delay + 20],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
        const pulse = 1 + Math.sin(Math.max(0, frame - city.delay) / 8) * 0.15;

        return (
          <div
            key={city.name}
            style={{
              position: "absolute",
              left: city.x,
              top: city.y,
              translate: "-50% -50%",
              scale: pop,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: ACCENT,
                boxShadow: `0 0 ${16 * pulse}px ${ACCENT}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 20,
                left: "50%",
                translate: "-50% 0px",
                whiteSpace: "nowrap",
                fontFamily: FONT_MONO,
                fontSize: 16,
                letterSpacing: 2,
                color: "#F8FAFC",
                opacity: labelOpacity,
              }}
            >
              {city.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};
