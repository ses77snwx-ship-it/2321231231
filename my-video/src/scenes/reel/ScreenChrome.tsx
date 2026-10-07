import type React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

type Props = {
  readonly label: string;
  readonly children: React.ReactNode;
};

export const ScreenChrome: React.FC<Props> = ({ label, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const seconds = Math.floor(frame / fps);
  const frames = frame % fps;
  const timecode = `00:${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>{children}</div>

      <div
        style={{
          position: "absolute",
          top: 8,
          left: 10,
          color: "rgba(255,255,255,0.55)",
          fontSize: 8,
          letterSpacing: 1,
        }}
      >
        CLAUDE — MOTION REEL 2026
      </div>
      <div
        style={{
          position: "absolute",
          top: 8,
          right: 10,
          color: "rgba(255,255,255,0.4)",
          fontSize: 8,
        }}
      >
        {timecode}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: 10,
          color: "rgba(255,255,255,0.7)",
          fontSize: 9,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
};
