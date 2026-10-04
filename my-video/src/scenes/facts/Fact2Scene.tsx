import { interpolate, useCurrentFrame } from "remotion";
import { FactScene } from "./FactScene";
import { SeatbeltIcon } from "./FactIcons";
import { makeWordCaptions } from "./wordCaptions";

const TEXT =
  "Ремень безопасности снижает риск смертельной травмы примерно на 45% для пассажиров переднего сиденья. Это самая простая мера защиты в машине.";

const captions = makeWordCaptions(TEXT, 1200, 7600);

export const Fact2Scene: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [10, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <FactScene
      index={2}
      headline="−45% риска смертельной травмы"
      captions={captions}
      icon={<SeatbeltIcon progress={progress} />}
    />
  );
};
