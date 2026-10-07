import { Easing, interpolate, useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_ORANGE } from "../palette";
import { useUnit } from "../useUnit";

const WORDS = ["BOLD", "FAST", "ALIVE"];

export const KineticTypeScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const u = useUnit();

  const flashOpacity = interpolate(frame, [0, 4, 10], [1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const segment = 16;

  return (
    <ScreenChrome label="Kinetic Typography">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#f4f2ee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {WORDS.map((word, i) => {
          const start = i * segment;
          const scale = interpolate(
            frame,
            [start, start + 6, start + segment - 4, start + segment],
            [0.6, 1, 1, 1.3],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            },
          );
          const opacity = interpolate(
            frame,
            [start, start + 5, start + segment - 5, start + segment],
            [0, 1, 1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          return (
            <div
              key={word}
              style={{
                position: "absolute",
                color: "#121212",
                fontSize: 140 * u,
                fontWeight: 800,
                opacity,
                scale,
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: REEL_ORANGE,
          opacity: flashOpacity,
        }}
      />
    </ScreenChrome>
  );
};
