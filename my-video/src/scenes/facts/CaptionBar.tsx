import type { Caption } from "@remotion/captions";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { GREEN_NEON } from "../green/palette";

type Props = {
  readonly captions: Caption[];
  readonly width?: number;
};

export const CaptionBar: React.FC<Props> = ({ captions, width = 1200 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const nowMs = (frame / fps) * 1000;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 90,
        left: "50%",
        translate: "-50% 0px",
        width,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0px 10px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 1.3,
        textAlign: "center",
      }}
    >
      {captions.map((caption, i) => {
        const isActive = nowMs >= caption.startMs && nowMs < caption.endMs;
        const isPast = nowMs >= caption.endMs;
        return (
          <span
            key={i}
            style={{
              color: isActive ? GREEN_NEON : "#ffffff",
              opacity: isPast || isActive ? 1 : 0.35,
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            {caption.text.trim()}
          </span>
        );
      })}
    </div>
  );
};
