import { useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_ORANGE, REEL_ORANGE_LIGHT } from "../palette";
import { useUnit } from "../useUnit";

export const MographScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const u = useUnit();

  const scroll = (frame * 6) % 90;
  const orbitAngle = (frame / 50) * 360;
  const bob = Math.sin(frame / 18) * 10 * u;

  return (
    <ScreenChrome label="3D / Mograph">
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #05060a 0%, #0c0d14 50%, #1a0b17 100%)",
          overflow: "hidden",
        }}
      >
        {/* horizon glow */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "44%",
            width: 950 * u,
            height: 950 * u,
            translate: "-50% -50%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${REEL_ORANGE}4d, transparent 60%)`,
            filter: `blur(${50 * u}px)`,
          }}
        />

        {/* perspective floor grid — true 3D via rotateX */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "46%",
            bottom: 0,
            perspective: 620 * u,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-60%",
              right: "-60%",
              top: 0,
              height: 1500 * u,
              backgroundImage: `linear-gradient(${REEL_ORANGE}73 1.5px, transparent 1.5px), linear-gradient(90deg, ${REEL_ORANGE}73 1.5px, transparent 1.5px)`,
              backgroundSize: `${90 * u}px ${90 * u}px`,
              backgroundPosition: `0px ${scroll * u}px`,
              transformOrigin: "top center",
              transform: "rotateX(76deg)",
              maskImage:
                "linear-gradient(180deg, black 0%, black 35%, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(180deg, black 0%, black 35%, transparent 85%)",
            }}
          />
        </div>

        {/* orbiting sphere */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: `calc(44% + ${bob}px)`,
            width: 150 * u,
            height: 150 * u,
            translate: "-50% -50%",
            borderRadius: "50%",
            background: `radial-gradient(circle at 34% 30%, ${REEL_ORANGE_LIGHT}, ${REEL_ORANGE} 58%, #4e2110 100%)`,
            boxShadow: `0 0 ${60 * u}px ${REEL_ORANGE}99`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: `calc(44% + ${bob}px)`,
            width: 360 * u,
            height: 130 * u,
            translate: "-50% -50%",
            border: `${2 * u}px solid rgba(255,255,255,0.55)`,
            borderRadius: "50%",
            rotate: `${orbitAngle}deg`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: `calc(44% + ${bob}px)`,
            width: 360 * u,
            height: 130 * u,
            translate: "-50% -50%",
            border: `${1 * u}px solid rgba(255,255,255,0.22)`,
            borderRadius: "50%",
            rotate: `${-orbitAngle * 0.6}deg`,
          }}
        />
      </div>
    </ScreenChrome>
  );
};
