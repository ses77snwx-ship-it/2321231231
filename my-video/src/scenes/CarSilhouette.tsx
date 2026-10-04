import { Easing, interpolate, useCurrentFrame } from "remotion";

const CAR_PATH =
  "M40,210 C40,180 70,170 95,168 L130,140 C160,112 205,96 265,94 L430,92 " +
  "C470,92 505,100 535,118 L580,146 C610,150 650,155 685,168 " +
  "C715,178 725,192 725,210 L725,222 L670,222 " +
  "C670,196 648,174 621,174 C594,174 572,196 572,222 L205,222 " +
  "C205,196 183,174 156,174 C129,174 107,196 107,222 L40,222 Z";

const WINDOW_PATH =
  "M175,142 L270,104 L420,102 C452,102 480,110 505,124 L545,146 Z";

type Props = {
  readonly delay?: number;
  readonly width?: number;
};

export const CarSilhouette: React.FC<Props> = ({ delay = 0, width = 760 }) => {
  const frame = useCurrentFrame();
  const t = frame - delay;

  const draw = interpolate(t, [0, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const fillOpacity = interpolate(t, [25, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const wheelSpin = interpolate(t, [0, 300], [0, 1080], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pathLength = 1800;

  return (
    <svg
      width={width}
      height={(width / 760) * 260}
      viewBox="0 0 760 260"
      style={{ overflow: "visible" }}
    >
      <path
        d={CAR_PATH}
        fill="#e9e9ee"
        fillOpacity={fillOpacity}
        stroke="#ffffff"
        strokeWidth={4}
        strokeLinejoin="round"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength * (1 - draw)}
      />
      <path
        d={WINDOW_PATH}
        fill="#0b0b10"
        fillOpacity={fillOpacity}
        stroke="none"
      />
      <g
        style={{
          transformOrigin: "156px 222px",
          rotate: `${wheelSpin}deg`,
          opacity: fillOpacity,
        }}
      >
        <circle cx={156} cy={222} r={34} fill="#111115" stroke="#777" strokeWidth={3} />
        <circle cx={156} cy={222} r={14} fill="#999" />
      </g>
      <g
        style={{
          transformOrigin: "621px 222px",
          rotate: `${wheelSpin}deg`,
          opacity: fillOpacity,
        }}
      >
        <circle cx={621} cy={222} r={34} fill="#111115" stroke="#777" strokeWidth={3} />
        <circle cx={621} cy={222} r={14} fill="#999" />
      </g>
    </svg>
  );
};
