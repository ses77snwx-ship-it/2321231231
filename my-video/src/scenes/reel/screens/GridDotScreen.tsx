import { useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_ORANGE } from "../palette";
import { useUnit } from "../useUnit";

const COLS = 11;
const ROWS = 15;

export const GridDotScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const u = useUnit();
  const t = frame / 60;

  const dotX = 15 + 70 * (0.5 + 0.5 * Math.sin(t * Math.PI * 1.3));
  const dotY = 15 + 70 * (0.5 + 0.5 * Math.cos(t * Math.PI * 1.7));

  const dots: React.ReactNode[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = (c / (COLS - 1)) * 100;
      const y = (r / (ROWS - 1)) * 100;
      const dist = Math.hypot(x - dotX, y - dotY);
      const glow = Math.max(0, 1 - dist / 26);
      dots.push(
        <div
          key={`${r}-${c}`}
          style={{
            position: "absolute",
            left: `${x}%`,
            top: `${y}%`,
            width: 9 * u,
            height: 9 * u,
            borderRadius: "50%",
            translate: "-50% -50%",
            backgroundColor: glow > 0.05 ? REEL_ORANGE : "#2a3a55",
            opacity: 0.4 + glow * 0.6,
            scale: 1 + glow * 1.6,
            boxShadow: glow > 0.3 ? `0 0 ${20 * u}px ${REEL_ORANGE}` : "none",
          }}
        />,
      );
    }
  }

  return (
    <ScreenChrome label="Scene 02 / Grid">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0a1026",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "10%",
            top: "22%",
            right: "10%",
            bottom: "22%",
          }}
        >
          {dots}
        </div>
      </div>
    </ScreenChrome>
  );
};
