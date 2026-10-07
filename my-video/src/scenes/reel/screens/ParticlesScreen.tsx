import { useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_ORANGE } from "../palette";
import { useUnit } from "../useUnit";

const N = 90;

const seeded = (i: number) => {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

export const ParticlesScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const u = useUnit();

  const particles: React.ReactNode[] = [];
  for (let i = 0; i < N; i++) {
    const baseAngle = seeded(i) * Math.PI * 2;
    const radius = 10 + seeded(i + 100) * 40;
    const speed = 0.02 + seeded(i + 200) * 0.03;
    const angle = baseAngle + frame * speed;
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius * 0.75;
    const length = (12 + seeded(i + 300) * 26) * u;
    const isAccent = i % 7 === 0;

    particles.push(
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          width: length,
          height: 2.2 * u,
          backgroundColor: isAccent ? REEL_ORANGE : "rgba(255,255,255,0.8)",
          rotate: `${(angle * 180) / Math.PI}deg`,
          opacity: 0.75,
          boxShadow: isAccent ? `0 0 ${10 * u}px ${REEL_ORANGE}` : "none",
        }}
      />,
    );
  }

  return (
    <ScreenChrome label="Generative / Particles">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#060607",
        }}
      >
        {particles}
      </div>
    </ScreenChrome>
  );
};
