import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import type { Caption } from "@remotion/captions";
import { SpeedLines } from "../SpeedLines";
import { CaptionBar } from "./CaptionBar";
import { GREEN_NEON, GREEN_LIGHT } from "../green/palette";

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

type Props = {
  readonly index: number;
  readonly headline: string;
  readonly captions: Caption[];
  readonly icon: React.ReactNode;
};

export const FactScene: React.FC<Props> = ({
  index,
  headline,
  captions,
  icon,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const badgeOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const badgeScale = interpolate(frame, [0, 18], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
    output: "perceptual-scale",
  });

  const iconOpacity = interpolate(frame, [8, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const headlineOpacity = interpolate(frame, [18, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [18, 38], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const fadeOutOpacity = interpolate(
    frame,
    [durationInFrames - 18, durationInFrames - 2],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#07080a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
        opacity: fadeOutOpacity,
      }}
    >
      <SpeedLines opacity={0.08} />

      <div
        style={{
          position: "absolute",
          top: 90,
          display: "flex",
          alignItems: "center",
          gap: 18,
          opacity: badgeOpacity,
          scale: badgeScale,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: `3px solid ${GREEN_LIGHT}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: GREEN_NEON,
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          {index}
        </div>
        <div
          style={{
            color: "#9a9aa5",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Факт
        </div>
      </div>

      <div style={{ opacity: iconOpacity, marginBottom: 20 }}>{icon}</div>

      <div
        style={{
          color: "#ffffff",
          fontSize: 46,
          fontWeight: 800,
          textAlign: "center",
          maxWidth: 1100,
          opacity: headlineOpacity,
          translate: `0px ${headlineY}px`,
          lineHeight: 1.2,
        }}
      >
        {headline}
      </div>

      <CaptionBar captions={captions} />
    </div>
  );
};
