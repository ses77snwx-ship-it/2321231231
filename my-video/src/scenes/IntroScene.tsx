import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SpeedLines } from "./SpeedLines";
import { MStripe } from "./MStripe";
import { CarSilhouette } from "./CarSilhouette";
import { GREEN_BODY, GREEN_LIGHT } from "./green/palette";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bmwOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bmwTranslate = interpolate(frame, [0, 18], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const m4Scale = interpolate(frame, [15, 40], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    output: "perceptual-scale",
  });
  const m4Opacity = interpolate(frame, [15, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const carOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const carTranslate = interpolate(frame, [35, 60], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
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
      <SpeedLines opacity={0.18} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 42,
            fontWeight: 600,
            letterSpacing: 14,
            opacity: bmwOpacity,
            translate: `0px ${bmwTranslate}px`,
          }}
        >
          BMW
        </div>

        <div
          style={{
            color: "#ffffff",
            fontSize: 220,
            fontWeight: 800,
            letterSpacing: 4,
            lineHeight: 1,
            marginTop: 10,
            scale: m4Scale,
            opacity: m4Opacity,
          }}
        >
          M4
        </div>

        <div style={{ marginTop: 18 }}>
          <MStripe delay={30} width={280} height={12} />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          opacity: carOpacity,
          translate: `0px ${carTranslate}px`,
        }}
      >
        <CarSilhouette
          delay={35 + 0}
          width={620}
          fill={GREEN_BODY}
          stroke={GREEN_LIGHT}
        />
      </div>
    </div>
  );
};
