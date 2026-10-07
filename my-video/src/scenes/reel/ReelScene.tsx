import { Sequence } from "remotion";
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
  { Component: MographScreen, duration: 75 },
  { Component: ParticlesScreen, duration: 60 },
  { Component: UIScreen, duration: 60 },
  { Component: ShapeLiquidScreen, duration: 60 },
];

export const ReelScene: React.FC = () => {
  let cursor = 0;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#121316",
      }}
    >
      {SCREENS.map(({ Component, duration }, i) => {
        const from = cursor;
        cursor += duration;
        return (
          <Sequence key={i} from={from} durationInFrames={duration}>
            <Component />
          </Sequence>
        );
      })}

      <TopCaption />
    </div>
  );
};
