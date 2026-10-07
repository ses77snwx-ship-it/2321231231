import { Easing, interpolate, useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_ORANGE } from "../palette";

export const TitleCardScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 16], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <ScreenChrome label="Showreel · 2026">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: REEL_ORANGE,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity,
          translate: `0px ${y}px`,
        }}
      >
        <div
          style={{
            color: "#0a0a0a",
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: -1,
          }}
        >
          CLAUDE.
        </div>
        <div
          style={{
            color: "#1a1a1a",
            fontSize: 20,
            fontStyle: "italic",
            marginTop: 4,
          }}
        >
          motion designer
        </div>
      </div>
    </ScreenChrome>
  );
};
