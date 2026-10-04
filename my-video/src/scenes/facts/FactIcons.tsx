import { GREEN_LIGHT, GREEN_NEON } from "../green/palette";

type IconProps = {
  readonly size?: number;
  readonly progress: number;
};

export const ClockIcon: React.FC<IconProps> = ({ size = 160, progress }) => {
  const handAngle = progress * 320;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle
        cx={50}
        cy={50}
        r={42}
        fill="none"
        stroke="#2a2b31"
        strokeWidth={6}
      />
      <circle
        cx={50}
        cy={50}
        r={42}
        fill="none"
        stroke={GREEN_LIGHT}
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray={2 * Math.PI * 42}
        strokeDashoffset={2 * Math.PI * 42 * (1 - progress)}
        transform="rotate(-90 50 50)"
      />
      <line
        x1={50}
        y1={50}
        x2={50}
        y2={18}
        stroke={GREEN_NEON}
        strokeWidth={4}
        strokeLinecap="round"
        style={{
          transformOrigin: "50px 50px",
          rotate: `${handAngle}deg`,
        }}
      />
      <circle cx={50} cy={50} r={4} fill="#ffffff" />
    </svg>
  );
};

export const SeatbeltIcon: React.FC<IconProps> = ({
  size = 160,
  progress,
}) => {
  const strapLength = 70;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx={50} cy={50} r={42} fill="none" stroke="#2a2b31" strokeWidth={6} />
      <path
        d="M30,20 L55,80"
        stroke={GREEN_LIGHT}
        strokeWidth={10}
        strokeLinecap="round"
        strokeDasharray={strapLength}
        strokeDashoffset={strapLength * (1 - progress)}
      />
      <rect
        x={46}
        y={72}
        width={16}
        height={16}
        rx={3}
        fill={GREEN_NEON}
        opacity={progress}
      />
    </svg>
  );
};

export const PhoneIcon: React.FC<IconProps> = ({ size = 160, progress }) => {
  const shake = Math.sin(progress * Math.PI * 8) * 4 * progress;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ translate: `${shake}px 0px` }}
    >
      <circle cx={50} cy={50} r={42} fill="none" stroke="#2a2b31" strokeWidth={6} />
      <rect
        x={36}
        y={22}
        width={28}
        height={56}
        rx={6}
        fill="#15161a"
        stroke={GREEN_LIGHT}
        strokeWidth={3}
      />
      <rect x={42} y={30} width={16} height={32} fill={GREEN_NEON} opacity={0.5 + progress * 0.5} />
      <circle cx={50} cy={70} r={2.5} fill="#8a8d96" />
    </svg>
  );
};
