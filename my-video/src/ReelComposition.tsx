import { Composition } from "remotion";
import { ReelScene } from "./scenes/reel/ReelScene";

const FPS = 30;
const DURATION = 425;

export const ReelComposition = () => {
  return (
    <Composition
      id="MotionReel"
      component={ReelScene}
      durationInFrames={DURATION}
      fps={FPS}
      width={1620}
      height={2880}
    />
  );
};
