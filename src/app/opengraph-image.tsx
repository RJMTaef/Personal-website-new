import { ImageResponse } from "next/og";
export const alt = "Roslan Taef — Web design, WordPress, data and automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f6f5ee",
        color: "#232820",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "66px 80px",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
        }}
      >
        <span>ROSLAN TAEF</span>
        <span>WEB DESIGN · WORDPRESS · DATA</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 86,
          letterSpacing: -5,
          fontWeight: 700,
          lineHeight: 1.05,
        }}
      >
        <span>I turn complexity</span>
        <span>
          into something <span style={{ color: "#bb4427" }}>useful.</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #cdd0c5",
          paddingTop: 22,
          fontSize: 21,
        }}
      >
        Websites, data systems, and useful digital experiences. / Halifax,
        Canada
      </div>
    </div>,
    size,
  );
}
