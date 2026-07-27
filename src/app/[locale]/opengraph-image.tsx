import { ImageResponse } from "next/og";

export const alt = "Walter Rodríguez — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d1513",
          color: "#f3f2e9",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#b7f34a", fontSize: 28 }}>WR / PORTFOLIO</span>
          <span style={{ fontSize: 24 }}>Merate · Italy</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontSize: 74, fontWeight: 700 }}>Walter Rodríguez</span>
          <span style={{ color: "#b7f34a", fontSize: 44 }}>
            Full Stack Developer
          </span>
          <span style={{ color: "#a9b2ad", fontSize: 30 }}>
            Frontend specialization · SaaS · Dashboards · Data
          </span>
        </div>
      </div>
    ),
    size,
  );
}
