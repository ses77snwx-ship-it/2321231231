import { useVideoConfig } from "remotion";

// Scale factor relative to the 1080px-wide baseline the scenes were designed at,
// so raising the composition resolution scales every px value proportionally.
export const useUnit = (): number => useVideoConfig().width / 1080;
