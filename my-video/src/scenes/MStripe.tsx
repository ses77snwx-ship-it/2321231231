import { Easing, interpolate, useCurrentFrame } from "remotion";

export const M_BLUE = "#1C69D4";
export const M_VIOLET = "#6E2585";
export const M_RED = "#E7222E";

type Props = {
  readonly delay?: number;
  readonly width?: number;
  readonly height?: number;
};

export const MStripe: React.FC<Props> = ({
  delay = 0,
  width = 220,
  height = 10,
}) => {
  const frame = useCurrentFrame();
  const scaleX = interpolate(frame, [delay, delay + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        display: "flex",
        width,
        height,
        transformOrigin: "left center",
        scale: `${scaleX} 1`,
        borderRadius: height / 2,
        overflow: "hidden",
      }}
    >
      <div style={{ flex: 1, backgroundColor: M_BLUE }} />
      <div style={{ flex: 1, backgroundColor: M_VIOLET }} />
      <div style={{ flex: 1, backgroundColor: M_RED }} />
    </div>
  );
};
