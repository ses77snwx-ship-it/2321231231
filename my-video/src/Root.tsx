import { MyComposition } from "./Composition";
import { DrivingFactsComposition } from "./DrivingFactsComposition";
import { ReelComposition } from "./ReelComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <DrivingFactsComposition />
      <ReelComposition />
    </>
  );
};
