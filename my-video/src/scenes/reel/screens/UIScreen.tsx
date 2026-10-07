import { Easing, interpolate, useCurrentFrame } from "remotion";
import { ScreenChrome } from "../ScreenChrome";
import { REEL_BLUE, REEL_ORANGE } from "../palette";

export const UIScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const cardY = interpolate(frame, [0, 16], [24, 0], {
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
            width: 220,
            backgroundColor: "#f3f1ec",
            borderRadius: 10,
            padding: 16,
            opacity: cardOpacity,
            translate: `0px ${cardY}px`,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>
            Render queue
          </div>
          <div style={{ fontSize: 9, color: "#888", marginTop: 2 }}>
            showreel_v2.mp4 · 900 frames
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 14,
            }}
          >
            <span style={{ fontSize: 11, color: "#333" }}>Motion blur</span>
            <div
              style={{
                width: 28,
                height: 15,
                borderRadius: 8,
                backgroundColor: REEL_ORANGE,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 1.5,
                  left: 2 + toggleOn * 13,
                  width: 12,
                  height: 12,
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
              marginTop: 10,
            }}
          >
            <span style={{ fontSize: 11, color: "#333" }}>Frame rate</span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                backgroundColor: "#1a1a1a",
                color: "#fff",
                padding: "2px 8px",
                borderRadius: 4,
              }}
            >
              60
            </span>
          </div>

          <div
            style={{
              marginTop: 16,
              backgroundColor: "#141414",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              textAlign: "center",
              padding: "8px 0",
              borderRadius: 6,
            }}
          >
            Render →
          </div>
        </div>
      </div>
    </ScreenChrome>
  );
};
