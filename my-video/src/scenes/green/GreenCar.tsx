import { GREEN_BODY, GREEN_DARK, GREEN_LIGHT } from "./palette";

type Props = {
  readonly hoodOpen: number;
  readonly doorOpen: number;
  readonly wheelSpin: number;
  readonly width?: number;
};

const Wheel: React.FC<{ readonly left: number; readonly spin: number }> = ({
  left,
  spin,
}) => (
  <div
    style={{
      position: "absolute",
      left,
      top: 224,
      width: 92,
      height: 92,
      borderRadius: "50%",
      backgroundColor: "#15161a",
      border: "6px solid #2a2b31",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      rotate: `${spin}deg`,
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: "#8a8d96",
        position: "relative",
      }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 4,
            height: 18,
            backgroundColor: "#5a5c63",
            translate: "-50% -50%",
            rotate: `${(360 / 5) * i}deg`,
            transformOrigin: "center 2px",
          }}
        />
      ))}
    </div>
  </div>
);

export const GreenCar: React.FC<Props> = ({
  hoodOpen,
  doorOpen,
  wheelSpin,
  width = 820,
}) => {
  const scale = width / 820;

  return (
    <div
      style={{
        position: "relative",
        width: 820,
        height: 320,
        scale,
        transformOrigin: "center center",
      }}
    >
      {/* chassis / body */}
      <div
        style={{
          position: "absolute",
          left: 90,
          top: 200,
          width: 640,
          height: 70,
          borderRadius: 35,
          background: `linear-gradient(180deg, ${GREEN_BODY}, ${GREEN_DARK})`,
          boxShadow: "0 18px 40px rgba(0,0,0,0.55)",
        }}
      />

      {/* roof / cabin */}
      <div
        style={{
          position: "absolute",
          left: 250,
          top: 70,
          width: 320,
          height: 140,
          clipPath: "polygon(8% 100%, 24% 0%, 76% 0%, 94% 100%)",
          backgroundColor: GREEN_DARK,
        }}
      />

      {/* rear window */}
      <div
        style={{
          position: "absolute",
          left: 268,
          top: 84,
          width: 76,
          height: 92,
          clipPath: "polygon(30% 0%, 100% 0%, 90% 100%, 0% 100%)",
          backgroundColor: "#0a0c0f",
        }}
      />

      {/* windshield */}
      <div
        style={{
          position: "absolute",
          left: 460,
          top: 84,
          width: 90,
          height: 92,
          clipPath: "polygon(0% 0%, 70% 0%, 100% 100%, 10% 100%)",
          backgroundColor: "#0a0c0f",
        }}
      />

      {/* engine bay — revealed under hood */}
      <div
        style={{
          position: "absolute",
          left: 560,
          top: 185,
          width: 150,
          height: 45,
          borderRadius: "4px 24px 8px 0px",
          backgroundColor: "#0c0d10",
          display: "flex",
          alignItems: "center",
          gap: 8,
          paddingLeft: 14,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "#9aa0a8",
          }}
        />
        <div
          style={{
            width: 54,
            height: 22,
            borderRadius: 4,
            backgroundColor: "#3a3d44",
          }}
        />
        <div
          style={{
            width: 18,
            height: 10,
            borderRadius: 3,
            backgroundColor: GREEN_LIGHT,
          }}
        />
      </div>

      {/* hood panel */}
      <div
        style={{
          position: "absolute",
          left: 560,
          top: 185,
          width: 150,
          height: 45,
          borderRadius: "4px 24px 8px 0px",
          background: `linear-gradient(180deg, ${GREEN_LIGHT}, ${GREEN_BODY})`,
          transformOrigin: "left center",
          rotate: `${-hoodOpen * 62}deg`,
          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
        }}
      />

      {/* interior — revealed under door */}
      <div
        style={{
          position: "absolute",
          left: 300,
          top: 168,
          width: 220,
          height: 100,
          borderRadius: 6,
          backgroundColor: "#0a0c0f",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 40,
            top: 30,
            width: 70,
            height: 50,
            borderRadius: 10,
            backgroundColor: "#1a1b20",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 140,
            top: 20,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "5px solid #2b2c32",
          }}
        />
      </div>

      {/* door panel */}
      <div
        style={{
          position: "absolute",
          left: 300,
          top: 168,
          width: 220,
          height: 100,
          borderRadius: 6,
          background: `linear-gradient(180deg, ${GREEN_BODY}, ${GREEN_DARK})`,
          transformOrigin: "right center",
          rotate: `${doorOpen * 48}deg`,
          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 16,
            top: 46,
            width: 60,
            height: 6,
            borderRadius: 3,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 6,
            width: 1,
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.25)",
          }}
        />
      </div>

      <Wheel left={154} spin={wheelSpin} />
      <Wheel left={574} spin={wheelSpin} />
    </div>
  );
};
