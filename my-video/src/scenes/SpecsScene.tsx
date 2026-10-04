import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SpeedLines } from "./SpeedLines";
import { MStripe } from "./MStripe";
import { SpecCard } from "./SpecCard";

export const SpecsScene: React.FC = () => {
  const frame = useCurrentFrame();

  const headerOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headerY = interpolate(frame, [0, 18], [-16, 0], {
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
      <SpeedLines opacity={0.12} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: headerOpacity,
          translate: `0px ${headerY}px`,
          marginBottom: 70,
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          The Ultimate Driving Machine
        </div>
        <div style={{ marginTop: 16 }}>
          <MStripe delay={6} width={180} height={8} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 40,
        }}
      >
        <SpecCard delay={18} value="503" unit="HP" label="S58 Twin-Turbo" />
        <SpecCard delay={30} value="3.5" unit="s" label="0–100 km/h" />
        <SpecCard delay={42} value="290" unit="km/h" label="Top Speed" />
      </div>
    </div>
  );
};
