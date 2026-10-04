import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SpeedLines } from "./SpeedLines";
import { MStripe } from "./MStripe";
import { CarSilhouette } from "./CarSilhouette";
import { GREEN_BODY, GREEN_LIGHT } from "./green/palette";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 24], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    output: "perceptual-scale",
  });
  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const taglineOpacity = interpolate(frame, [20, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#0a0a0d",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity,
          scale,
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 160,
            fontWeight: 800,
            letterSpacing: 2,
            lineHeight: 1,
          }}
        >
          M4
        </div>
        <div style={{ marginTop: 14 }}>
          <MStripe delay={4} width={240} height={10} />
        </div>
      </div>

      <div
        style={{
          marginTop: 36,
          color: "#9a9aa5",
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: 3,
          opacity: taglineOpacity,
        }}
      >
        Pure Performance. Pure Emotion.
      </div>

      <div style={{ marginTop: 30, opacity: taglineOpacity }}>
        <CarSilhouette
          delay={34}
          width={340}
          fill={GREEN_BODY}
          stroke={GREEN_LIGHT}
        />
      </div>
    </div>
  );
};
