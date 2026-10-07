import { interpolate, useCurrentFrame } from "remotion";
import { BG, FONT_MONO } from "./palette";
import { Globe } from "./Globe";

export const MapScene: React.FC = () => {
  const frame = useCurrentFrame();
  const headerOpacity = interpolate(frame, [0, 14], [0, 1], {
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
          top: 70,
          fontFamily: FONT_MONO,
          fontSize: 16,
          letterSpacing: 4,
          color: "#94A3B8",
          opacity: headerOpacity,
        }}
      >
        LIVE ROLLOUT // 4 REGIONS
      </div>
      <Globe />
    </div>
  );
};
