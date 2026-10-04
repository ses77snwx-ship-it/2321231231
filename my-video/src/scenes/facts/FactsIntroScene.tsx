import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SpeedLines } from "../SpeedLines";
import { GREEN_LIGHT, GREEN_NEON } from "../green/palette";

export const FactsIntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 22], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
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
      <SpeedLines opacity={0.1} />

      <div
        style={{
          color: "#9a9aa5",
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: 10,
          textTransform: "uppercase",
          opacity,
          translate: `0px ${y}px`,
        }}
      >
        3 Факта
      </div>
      <div
        style={{
          color: "#ffffff",
          fontSize: 76,
          fontWeight: 800,
          textAlign: "center",
          opacity,
          translate: `0px ${y}px`,
          marginTop: 6,
        }}
      >
        О ВОЖДЕНИИ,
        <br />
        которые стоит знать
      </div>

      <div
        style={{
          marginTop: 30,
          width: 160,
          height: 4,
          borderRadius: 2,
          backgroundColor: GREEN_LIGHT,
          opacity: subOpacity,
        }}
      />
      <div
        style={{
          marginTop: 20,
          color: GREEN_NEON,
          fontSize: 22,
          letterSpacing: 3,
          opacity: subOpacity,
        }}
      >
        Безопасность начинается со знаний
      </div>
    </div>
  );
};
