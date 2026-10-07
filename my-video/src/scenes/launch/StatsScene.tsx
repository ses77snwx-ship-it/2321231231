import { useVideoConfig } from "remotion";
import { BG, FONT_DISPLAY } from "./palette";
import { StatCard } from "./StatCard";

export const StatsScene: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: BG,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 50,
      }}
    >
      <div
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 32,
          fontWeight: 700,
          color: "#F8FAFC",
        }}
      >
        Числа запуска
      </div>
      <div style={{ display: "flex", gap: 28 }}>
        <StatCard
          name="Stat: countries"
          from={0}
          premountFor={fps}
          value="32"
          label="страны в очереди"
        />
        <StatCard
          name="Stat: waitlist"
          from={14}
          premountFor={fps}
          value="1.4M"
          label="в листе ожидания"
        />
        <StatCard
          name="Stat: uptime"
          from={28}
          premountFor={fps}
          value="99.9%"
          label="аптайм за квартал"
        />
      </div>
    </div>
  );
};
