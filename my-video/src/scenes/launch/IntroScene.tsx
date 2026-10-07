import { Easing, interpolate, useCurrentFrame } from "remotion";
import { ACCENT, BG, FONT_DISPLAY, FONT_MONO } from "./palette";

const WORDS = ["GLOBAL", "LAUNCH"];

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const scanY = interpolate(frame, [0, 90], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: BG,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: `${scanY}%`,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
          opacity: 0.6,
        }}
      />

      <div
        style={{
          color: "#94A3B8",
          fontFamily: FONT_MONO,
          fontSize: 18,
          letterSpacing: 6,
          marginBottom: 20,
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        CLAUDE-SESSION · 2026-10-07
      </div>

      <div style={{ display: "flex", gap: 24 }}>
        {WORDS.map((word, i) => {
          const delay = i * 10;
          const opacity = interpolate(frame, [delay, delay + 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(frame, [delay, delay + 16], [26, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });
          return (
            <div
              key={word}
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 110,
                fontWeight: 800,
                letterSpacing: -1,
                color: i === 1 ? ACCENT : "#F8FAFC",
                opacity,
                translate: `0px ${y}px`,
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
};
