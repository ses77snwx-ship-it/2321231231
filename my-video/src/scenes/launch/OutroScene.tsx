import { Easing, interpolate, useCurrentFrame } from "remotion";
import { ACCENT, BG, FONT_DISPLAY, FONT_MONO } from "./palette";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, 20], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    output: "perceptual-scale",
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
          opacity,
          scale,
          fontFamily: FONT_DISPLAY,
          fontSize: 64,
          fontWeight: 800,
          color: "#F8FAFC",
          textAlign: "center",
        }}
      >
        Доступ открывается
        <br />
        <span style={{ color: ACCENT }}>сегодня вечером</span>
      </div>
      <div
        style={{
          marginTop: 24,
          fontFamily: FONT_MONO,
          fontSize: 16,
          letterSpacing: 4,
          color: "#94A3B8",
          opacity,
        }}
      >
        GLOBAL LAUNCH · 2026
      </div>
    </div>
  );
};
