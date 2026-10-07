import { Easing, interpolate, useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_BLUE, REEL_ORANGE } from "../palette";
import { useUnit } from "../useUnit";

export const UIScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const u = useUnit();
  const cardY = interpolate(frame, [0, 16], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const cardOpacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const toggleOn = interpolate(frame, [20, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <ScreenChrome label="UI / Product Motion">
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${REEL_BLUE}, #0a1750)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 560 * u,
            backgroundColor: "#f3f1ec",
            borderRadius: 22 * u,
            padding: 36 * u,
            opacity: cardOpacity,
            translate: `0px ${cardY * u}px`,
            fontFamily: "Helvetica, Arial, sans-serif",
            boxShadow: `0 ${30 * u}px ${80 * u}px rgba(0,0,0,0.5)`,
          }}
        >
          <div style={{ fontSize: 30 * u, fontWeight: 700, color: "#111" }}>
            Render queue
          </div>
          <div style={{ fontSize: 19 * u, color: "#888", marginTop: 6 * u }}>
            showreel_v2.mp4 · 900 frames
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 32 * u,
            }}
          >
            <span style={{ fontSize: 24 * u, color: "#333" }}>
              Motion blur
            </span>
            <div
              style={{
                width: 64 * u,
                height: 34 * u,
                borderRadius: 18 * u,
                backgroundColor: REEL_ORANGE,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 3 * u,
                  left: (4 + toggleOn * 30) * u,
                  width: 28 * u,
                  height: 28 * u,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 22 * u,
            }}
          >
            <span style={{ fontSize: 24 * u, color: "#333" }}>
              Frame rate
            </span>
            <span
              style={{
                fontSize: 22 * u,
                fontWeight: 700,
                backgroundColor: "#1a1a1a",
                color: "#fff",
                padding: `${5 * u}px ${18 * u}px`,
                borderRadius: 8 * u,
              }}
            >
              60
            </span>
          </div>

          <div
            style={{
              marginTop: 36 * u,
              backgroundColor: "#141414",
              color: "#fff",
              fontSize: 24 * u,
              fontWeight: 700,
              textAlign: "center",
              padding: `${18 * u}px 0`,
              borderRadius: 12 * u,
            }}
          >
            Render →
          </div>
        </div>
      </div>
    </ScreenChrome>
  );
};
