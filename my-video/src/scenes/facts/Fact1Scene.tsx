import { interpolate, useCurrentFrame } from "remotion";
import { FactScene } from "./FactScene";
import { ClockIcon } from "./FactIcons";
import { makeWordCaptions } from "./wordCaptions";

const TEXT =
  "Среднее время реакции водителя — 1.5 секунды. На скорости 100 км/ч за это время машина проезжает больше 40 метров, прежде чем вы начнёте тормозить.";

const captions = makeWordCaptions(TEXT, 1200, 7600);

export const Fact1Scene: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [10, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <FactScene
      index={1}
      headline="40+ метров до старта торможения"
      captions={captions}
      icon={<ClockIcon progress={progress} />}
    />
  );
};
