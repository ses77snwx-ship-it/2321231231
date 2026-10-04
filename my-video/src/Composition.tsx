import { CalculateMetadataFunction, Composition } from "remotion";
import {
  TransitionSeries,
  linearTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { IntroScene } from "./scenes/IntroScene";
import { SpecsScene } from "./scenes/SpecsScene";
import { OutroScene } from "./scenes/OutroScene";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

const FPS = 30;
const INTRO_DURATION = 95;
const SPECS_DURATION = 150;
const OUTRO_DURATION = 85;
const TRANSITION_DURATION = 15;

export const MyComposition = () => {
  const totalDuration =
    INTRO_DURATION + SPECS_DURATION + OUTRO_DURATION - TRANSITION_DURATION * 2;

  return (
    <Composition
      id="BmwM4"
      component={BmwM4Video}
      durationInFrames={totalDuration}
      fps={FPS}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const BmwM4Video: React.FC<Props> = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={INTRO_DURATION}>
        <IntroScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
      />
      <TransitionSeries.Sequence durationInFrames={SPECS_DURATION}>
        <SpecsScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
      />
      <TransitionSeries.Sequence durationInFrames={OUTRO_DURATION}>
        <OutroScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
