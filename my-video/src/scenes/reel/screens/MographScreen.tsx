import { useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_ORANGE, REEL_ORANGE_LIGHT } from "../palette";

const COLS = 16;
const ROWS = 10;

export const MographScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / 30;

  const cells: React.ReactNode[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const nx = c / (COLS - 1);
      const ny = r / (ROWS - 1);
      const wave =
        Math.sin(nx * 6 + t * 1.6) * 0.5 + Math.cos(ny * 4 - t * 1.2) * 0.5;
      const lift = wave * 18;
      const hue = 18 + wave * 14;
      cells.push(
        <div
          key={`${r}-${c}`}
          style={{
            position: "absolute",
            left: `${nx * 100}%`,
            top: `${ny * 100}%`,
            width: 10,
            height: 6,
            translate: `-50% ${lift}px`,
            backgroundColor: `hsl(${hue}, 75%, ${55 + wave * 15}%)`,
            borderRadius: 1,
            opacity: 0.9,
          }}
        />,
      );
    }
  }

  const orbitAngle = (frame / 40) * 360;

  return (
    <ScreenChrome label="3D / Mograph">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0c0d10",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "15%",
            top: "25%",
            right: "15%",
            bottom: "25%",
          }}
        >
          {cells}
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "48%",
            width: 46,
            height: 46,
            translate: "-50% -50%",
            borderRadius: "50%",
            background: `radial-gradient(circle at 35% 30%, ${REEL_ORANGE_LIGHT}, ${REEL_ORANGE})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "48%",
            width: 110,
            height: 40,
            translate: "-50% -50%",
            border: "1.5px solid rgba(255,255,255,0.5)",
            borderRadius: "50%",
            rotate: `${orbitAngle}deg`,
          }}
        />
      </div>
    </ScreenChrome>
  );
};
