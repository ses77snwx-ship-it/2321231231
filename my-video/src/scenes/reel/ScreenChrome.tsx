import type React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { useUnit } from "./useUnit";

type Props = {
  readonly label: string;
  readonly children: React.ReactNode;
};

export const ScreenChrome: React.FC<Props> = ({ label, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const u = useUnit();
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
          top: 36 * u,
          left: 36 * u,
          color: "rgba(255,255,255,0.55)",
          fontSize: 15 * u,
          letterSpacing: 2,
        }}
      >
        CLAUDE — MOTION REEL 2026
      </div>
      <div
        style={{
          position: "absolute",
          top: 36 * u,
          right: 36 * u,
          color: "rgba(255,255,255,0.4)",
          fontSize: 15 * u,
        }}
      >
        {timecode}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40 * u,
          left: 36 * u,
          color: "rgba(255,255,255,0.75)",
          fontSize: 17 * u,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
};
