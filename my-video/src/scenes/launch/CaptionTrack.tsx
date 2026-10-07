import type { Caption } from "@remotion/captions";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { ACCENT, FONT_MONO } from "./palette";

// Word-level captions, humanized script (see humanizer rules: short plain
// sentences, no dashes, no "not X but Y", no stock AI phrasing).
export const CAPTIONS: Caption[] = [
  // Intro (0-3s)
  { text: "Запускаем", startMs: 400, endMs: 900, timestampMs: 650, confidence: null },
  { text: " продукт", startMs: 900, endMs: 1400, timestampMs: 1150, confidence: null },
  { text: " сразу", startMs: 1400, endMs: 1800, timestampMs: 1600, confidence: null },
  { text: " в", startMs: 1800, endMs: 1950, timestampMs: 1875, confidence: null },
  { text: " четырёх", startMs: 1950, endMs: 2450, timestampMs: 2200, confidence: null },
  { text: " странах.", startMs: 2450, endMs: 2900, timestampMs: 2675, confidence: null },
  // Map (3-11s)
  { text: "Нью-Йорк,", startMs: 3600, endMs: 4300, timestampMs: 3950, confidence: null },
  { text: " Лондон,", startMs: 4300, endMs: 4900, timestampMs: 4600, confidence: null },
  { text: " Токио", startMs: 4900, endMs: 5400, timestampMs: 5150, confidence: null },
  { text: " и", startMs: 5400, endMs: 5550, timestampMs: 5475, confidence: null },
  { text: " Сан-Паулу", startMs: 5550, endMs: 6200, timestampMs: 5875, confidence: null },
  { text: " получат", startMs: 6200, endMs: 6700, timestampMs: 6450, confidence: null },
  { text: " доступ", startMs: 6700, endMs: 7200, timestampMs: 6950, confidence: null },
  { text: " в", startMs: 7200, endMs: 7350, timestampMs: 7275, confidence: null },
  { text: " один", startMs: 7350, endMs: 7700, timestampMs: 7525, confidence: null },
  { text: " день.", startMs: 7700, endMs: 8100, timestampMs: 7900, confidence: null },
  { text: " Серверы", startMs: 8700, endMs: 9300, timestampMs: 9000, confidence: null },
  { text: " уже", startMs: 9300, endMs: 9600, timestampMs: 9450, confidence: null },
  { text: " разведены", startMs: 9600, endMs: 10300, timestampMs: 9950, confidence: null },
  { text: " по", startMs: 10300, endMs: 10450, timestampMs: 10375, confidence: null },
  { text: " регионам.", startMs: 10450, endMs: 11000, timestampMs: 10725, confidence: null },
  // Stats (11-17s)
  { text: "32", startMs: 11600, endMs: 12100, timestampMs: 11850, confidence: null },
  { text: " страны", startMs: 12100, endMs: 12600, timestampMs: 12350, confidence: null },
  { text: " на", startMs: 12600, endMs: 12750, timestampMs: 12675, confidence: null },
  { text: " очереди", startMs: 12750, endMs: 13300, timestampMs: 13025, confidence: null },
  { text: " на", startMs: 13300, endMs: 13450, timestampMs: 13375, confidence: null },
  { text: " следующий", startMs: 13450, endMs: 14100, timestampMs: 13775, confidence: null },
  { text: " квартал.", startMs: 14100, endMs: 14650, timestampMs: 14375, confidence: null },
  { text: " 1,4", startMs: 15200, endMs: 15700, timestampMs: 15450, confidence: null },
  { text: " миллиона", startMs: 15700, endMs: 16300, timestampMs: 16000, confidence: null },
  { text: " человек", startMs: 16300, endMs: 16800, timestampMs: 16550, confidence: null },
  { text: " уже", startMs: 16800, endMs: 17100, timestampMs: 16950, confidence: null },
  { text: " ждут.", startMs: 17100, endMs: 17600, timestampMs: 17350, confidence: null },
  // Outro (17-20s)
  { text: "Открываем", startMs: 18100, endMs: 18700, timestampMs: 18400, confidence: null },
  { text: " доступ", startMs: 18700, endMs: 19200, timestampMs: 18950, confidence: null },
  { text: " сегодня", startMs: 19200, endMs: 19700, timestampMs: 19450, confidence: null },
  { text: " вечером.", startMs: 19700, endMs: 20100, timestampMs: 19900, confidence: null },
];

export const CaptionTrack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const nowMs = (frame / fps) * 1000;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 70,
        left: "50%",
        translate: "-50% 0px",
        width: 1300,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0px 10px",
        fontFamily: FONT_MONO,
        fontSize: 32,
        fontWeight: 500,
        textAlign: "center",
      }}
    >
      {CAPTIONS.map((c, i) => {
        const active = nowMs >= c.startMs && nowMs < c.endMs + 2600;
        if (!active) return null;
        const isCurrent = nowMs >= c.startMs && nowMs < c.endMs;
        return (
          <span
            key={i}
            style={{
              color: isCurrent ? ACCENT : "#ffffff",
              textShadow: "0 2px 12px rgba(0,0,0,0.85)",
            }}
          >
            {c.text.trim()}
          </span>
        );
      })}
    </div>
  );
};
