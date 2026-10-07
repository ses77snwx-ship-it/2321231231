import { Composition, Sequence } from "remotion";
import { IntroScene } from "./scenes/launch/IntroScene";
import { MapScene } from "./scenes/launch/MapScene";
import { StatsScene } from "./scenes/launch/StatsScene";
import { OutroScene } from "./scenes/launch/OutroScene";
import { CaptionTrack } from "./scenes/launch/CaptionTrack";

const FPS = 30;
const INTRO = 90;
const MAP = 240;
const STATS = 180;
const OUTRO = 90;
const DURATION = INTRO + MAP + STATS + OUTRO;

export const LaunchComposition = () => {
  return (
    <Composition
      id="GlobalLaunch"
      component={GlobalLaunchVideo}
      durationInFrames={DURATION}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};

export const GlobalLaunchVideo: React.FC = () => {
  let cursor = 0;
  const introFrom = cursor;
  cursor += INTRO;
  const mapFrom = cursor;
  cursor += MAP;
  const statsFrom = cursor;
  cursor += STATS;
  const outroFrom = cursor;

  return (
    <>
      <Sequence name="Intro" from={introFrom} durationInFrames={INTRO}>
        <IntroScene />
      </Sequence>
      <Sequence name="Map" from={mapFrom} durationInFrames={MAP}>
        <MapScene />
      </Sequence>
      <Sequence name="Stats" from={statsFrom} durationInFrames={STATS}>
        <StatsScene />
      </Sequence>
      <Sequence name="Outro" from={outroFrom} durationInFrames={OUTRO}>
        <OutroScene />
      </Sequence>

      <CaptionTrack />
    </>
  );
};
