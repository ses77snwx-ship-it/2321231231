import { interpolate, useCurrentFrame } from "remotion";
import { FactScene } from "./FactScene";
import { PhoneIcon } from "./FactIcons";
import { makeWordCaptions } from "./wordCaptions";

const TEXT =
  "Использование телефона за рулём увеличивает риск аварии до 23 раз. Несколько секунд без внимания на дороге могут стоить жизни.";

const captions = makeWordCaptions(TEXT, 1200, 7600);

export const Fact3Scene: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [10, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <FactScene
      index={3}
      headline="До 23× выше риск аварии"
      captions={captions}
      icon={<PhoneIcon progress={progress} />}
    />
  );
};
