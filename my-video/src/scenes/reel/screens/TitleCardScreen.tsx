import { Easing, interpolate, useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_ORANGE } from "../palette";
import { useUnit } from "../useUnit";

export const TitleCardScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const u = useUnit();
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 16], [30, 0], {
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
          translate: `0px ${y * u}px`,
        }}
      >
        <div
          style={{
            color: "#0a0a0a",
            fontSize: 150 * u,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          CLAUDE.
        </div>
        <div
          style={{
            color: "#1a1a1a",
            fontSize: 52 * u,
            fontStyle: "italic",
            marginTop: 8 * u,
          }}
        >
          motion designer
        </div>
      </div>
    </ScreenChrome>
  );
};
