import { useCurrentFrame, useVideoConfig } from "remotion";

export const SpeedLines: React.FC<{ readonly opacity?: number }> = ({
  opacity = 0.35,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const lines = new Array(14).fill(0).map((_, i) => {
    const baseY = (i / 14) * height;
    const speed = 22 + (i % 5) * 6;
    const x = ((frame * speed) % (width + 600)) - 600;
    const len = 180 + (i % 4) * 90;
    return { y: baseY + 20, x, len, key: i };
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      {lines.map((l) => (
        <div
          key={l.key}
          style={{
            position: "absolute",
            top: l.y,
            left: l.x,
            width: l.len,
            height: 2,
            borderRadius: 2,
            backgroundColor: "#ffffff",
            opacity,
          }}
        />
      ))}
    </div>
  );
};
