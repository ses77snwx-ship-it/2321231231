import type { Caption } from "@remotion/captions";

// Distributes a sentence across a time window, weighting each word's
// duration by its character length so pacing feels roughly natural.
export const makeWordCaptions = (
  text: string,
  startMs: number,
  endMs: number,
): Caption[] => {
  const words = text.split(" ").filter((w) => w.length > 0);
  const weights = words.map((w) => w.length + 2);
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  const totalMs = endMs - startMs;

  let cursor = startMs;
  return words.map((word, i) => {
    const duration = (weights[i] / totalWeight) * totalMs;
    const caption: Caption = {
      text: i === 0 ? word : ` ${word}`,
      startMs: cursor,
      endMs: cursor + duration,
      timestampMs: cursor + duration / 2,
      confidence: null,
    };
    cursor += duration;
    return caption;
  });
};
