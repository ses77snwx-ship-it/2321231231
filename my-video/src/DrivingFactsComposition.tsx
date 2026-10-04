import { Composition } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { FactsIntroScene } from "./scenes/facts/FactsIntroScene";
import { Fact1Scene } from "./scenes/facts/Fact1Scene";
import { Fact2Scene } from "./scenes/facts/Fact2Scene";
import { Fact3Scene } from "./scenes/facts/Fact3Scene";
import { FactsOutroScene } from "./scenes/facts/FactsOutroScene";

const FPS = 30;
const INTRO_DURATION = 90;
const FACT_DURATION = 240;
const OUTRO_DURATION = 90;
const TRANSITION_DURATION = 15;

export const DrivingFactsComposition = () => {
  const totalDuration =
    INTRO_DURATION +
    FACT_DURATION * 3 +
    OUTRO_DURATION -
    TRANSITION_DURATION * 4;

  return (
    <Composition
      id="DrivingFacts"
      component={DrivingFactsVideo}
      durationInFrames={totalDuration}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};

export const DrivingFactsVideo: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={INTRO_DURATION}>
        <FactsIntroScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
      />
      <TransitionSeries.Sequence durationInFrames={FACT_DURATION}>
        <Fact1Scene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
      />
      <TransitionSeries.Sequence durationInFrames={FACT_DURATION}>
        <Fact2Scene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
      />
      <TransitionSeries.Sequence durationInFrames={FACT_DURATION}>
        <Fact3Scene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
      />
      <TransitionSeries.Sequence durationInFrames={OUTRO_DURATION}>
        <FactsOutroScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
