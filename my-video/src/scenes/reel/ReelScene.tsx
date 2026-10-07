import { Easing, Sequence, interpolate, useCurrentFrame } from "remotion";
import { LaptopFrame } from "./LaptopFrame";
import { TopCaption } from "./Overlays";
import { TitleCardScreen } from "./screens/TitleCardScreen";
import { GridDotScreen } from "./screens/GridDotScreen";
import { KineticTypeScreen } from "./screens/KineticTypeScreen";
import { MographScreen } from "./screens/MographScreen";
import { ParticlesScreen } from "./screens/ParticlesScreen";
import { UIScreen } from "./screens/UIScreen";
import { ShapeLiquidScreen } from "./screens/ShapeLiquidScreen";

const SCREENS = [
  { Component: TitleCardScreen, duration: 60 },
  { Component: GridDotScreen, duration: 60 },
  { Component: KineticTypeScreen, duration: 50 },
  { Component: MographScreen, duration: 60 },
  { Component: ParticlesScreen, duration: 60 },
  { Component: UIScreen, duration: 60 },
  { Component: ShapeLiquidScreen, duration: 60 },
];

export const ReelScene: React.FC = () => {
  const frame = useCurrentFrame();

  const introOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const introY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  let cursor = 0;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#121316",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TopCaption />

      <div
        style={{
          opacity: introOpacity,
          translate: `0px ${introY}px`,
        }}
      >
        <LaptopFrame>
          {SCREENS.map(({ Component, duration }, i) => {
            const from = cursor;
            cursor += duration;
            return (
              <Sequence key={i} from={from} durationInFrames={duration}>
                <Component />
              </Sequence>
            );
          })}
        </LaptopFrame>
      </div>
    </div>
  );
};
