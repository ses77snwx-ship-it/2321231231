import { useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_ORANGE } from "../palette";

const N = 70;

const seeded = (i: number) => {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

export const ParticlesScreen: React.FC = () => {
  const frame = useCurrentFrame();

  const particles: React.ReactNode[] = [];
  for (let i = 0; i < N; i++) {
    const baseAngle = seeded(i) * Math.PI * 2;
    const radius = 10 + seeded(i + 100) * 38;
    const speed = 0.02 + seeded(i + 200) * 0.03;
    const angle = baseAngle + frame * speed;
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius * 0.7;
    const length = 10 + seeded(i + 300) * 22;
    const isAccent = i % 7 === 0;

    particles.push(
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          width: length,
          height: 1.6,
          backgroundColor: isAccent ? REEL_ORANGE : "rgba(255,255,255,0.8)",
          rotate: `${(angle * 180) / Math.PI}deg`,
          opacity: 0.75,
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
