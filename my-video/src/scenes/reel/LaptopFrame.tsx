import type React from "react";
import { REEL_SCREEN_DARK } from "./palette";

type Props = {
  readonly children: React.ReactNode;
};

const LaptopBody: React.FC<{
  readonly reflection?: boolean;
  readonly children: React.ReactNode;
}> = ({ children, reflection = false }) => (
  <div
    style={{
      position: "relative",
      width: 640,
      filter: reflection ? "blur(0.5px)" : undefined,
    }}
  >
    {/* screen bezel */}
    <div
      style={{
        position: "relative",
        width: 640,
        height: 400,
        backgroundColor: "#121316",
        borderRadius: 14,
        border: "2px solid #26282e",
        padding: 16,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 4,
          overflow: "hidden",
          backgroundColor: REEL_SCREEN_DARK,
        }}
      >
        {children}
      </div>
    </div>
    {/* hinge + base */}
    <div
      style={{
        width: 700,
        height: 22,
        marginLeft: -30,
        marginTop: -2,
        background: "linear-gradient(180deg, #1c1d22, #0d0e11)",
        clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0 0 10px 10px",
      }}
    />
  </div>
);

export const LaptopFrame: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <LaptopBody>{children}</LaptopBody>

      {/* reflection */}
      <div
        style={{
          scale: "1 -1",
          marginTop: 2,
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.35), transparent 65%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.35), transparent 65%)",
          opacity: 0.8,
        }}
      >
        <LaptopBody reflection>{children}</LaptopBody>
      </div>
    </div>
  );
};
