import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SpeedLines } from "../SpeedLines";
import { GREEN_LIGHT, GREEN_NEON } from "../green/palette";

export const FactsOutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 22], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    output: "perceptual-scale",
  });
  const opacity = interpolate(frame, [0, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [20, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#07080a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <SpeedLines opacity={0.08} />

      <div
        style={{
          opacity,
          scale,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 56,
            fontWeight: 800,
            textAlign: "center",
            maxWidth: 1100,
            lineHeight: 1.25,
          }}
        >
          Будь внимателен за рулём —
          <br />
          жизнь важнее времени
        </div>
      </div>

      <div
        style={{
          marginTop: 28,
          width: 140,
          height: 4,
          borderRadius: 2,
          backgroundColor: GREEN_LIGHT,
          opacity: subOpacity,
        }}
      />
      <div
        style={{
          marginTop: 18,
          color: GREEN_NEON,
          fontSize: 22,
          letterSpacing: 4,
          opacity: subOpacity,
        }}
      >
        Безопасного пути
      </div>
    </div>
  );
};
