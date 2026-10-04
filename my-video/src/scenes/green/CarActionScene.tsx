import { Easing, interpolate, useCurrentFrame } from "remotion";
import { SpeedLines } from "../SpeedLines";
import { GreenCar } from "./GreenCar";
import { GREEN_LIGHT, GREEN_NEON } from "./palette";

const HOOD_OPEN_START = 40;
const HOOD_OPEN_END = 110;
const HOOD_CLOSE_START = 190;
const HOOD_CLOSE_END = 250;

const DOOR_OPEN_START = 260;
const DOOR_OPEN_END = 330;
const DOOR_CLOSE_START = 410;
const DOOR_CLOSE_END = 470;

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
const easeInOut = Easing.bezier(0.65, 0, 0.35, 1);

const Caption: React.FC<{
  readonly from: number;
  readonly to: number;
  readonly title: string;
  readonly subtitle: string;
}> = ({ from, to, title, subtitle }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [from, from + 15, to - 15, to],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const translateY = interpolate(frame, [from, from + 15], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 110,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity,
        translate: `0px ${translateY}px`,
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          color: GREEN_NEON,
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 6,
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#c9cdd3",
          fontSize: 18,
          fontWeight: 400,
          letterSpacing: 2,
          marginTop: 6,
        }}
      >
        {subtitle}
      </div>
    </div>
  );
};

export const CarActionScene: React.FC = () => {
  const frame = useCurrentFrame();

  const hoodOpen = interpolate(
    frame,
    [
      HOOD_OPEN_START,
      HOOD_OPEN_END,
      HOOD_CLOSE_START,
      HOOD_CLOSE_END,
    ],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeInOut,
    },
  );

  const doorOpen = interpolate(
    frame,
    [
      DOOR_OPEN_START,
      DOOR_OPEN_END,
      DOOR_CLOSE_START,
      DOOR_CLOSE_END,
    ],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeInOut,
    },
  );

  const wheelSpin = frame * 3;

  const introOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const carScale = interpolate(frame, [0, 25], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
    output: "perceptual-scale",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#07080a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <SpeedLines opacity={0.1} />

      <div
        style={{
          position: "absolute",
          top: 70,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: introOpacity,
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 10,
            textTransform: "uppercase",
          }}
        >
          Inside the M4
        </div>
        <div
          style={{
            width: 160,
            height: 3,
            backgroundColor: GREEN_LIGHT,
            marginTop: 10,
            borderRadius: 2,
          }}
        />
      </div>

      <div
        style={{
          opacity: introOpacity,
          scale: carScale,
        }}
      >
        <GreenCar
          hoodOpen={hoodOpen}
          doorOpen={doorOpen}
          wheelSpin={wheelSpin}
          width={900}
        />
      </div>

      <Caption
        from={HOOD_OPEN_END - 10}
        to={HOOD_CLOSE_START + 10}
        title="S58 3.0L Twin-Turbo"
        subtitle="510 л.с. · 650 Нм крутящего момента"
      />
      <Caption
        from={DOOR_OPEN_END - 10}
        to={DOOR_CLOSE_START + 10}
        title="M Carbon Bucket Seats"
        subtitle="Alcantara · карбоновый салон"
      />
    </div>
  );
};
