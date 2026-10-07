import { MyComposition } from "./Composition";
import { DrivingFactsComposition } from "./DrivingFactsComposition";
import { ReelComposition } from "./ReelComposition";
import { LaunchComposition } from "./LaunchComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <DrivingFactsComposition />
      <ReelComposition />
      <LaunchComposition />
    </>
  );
};
