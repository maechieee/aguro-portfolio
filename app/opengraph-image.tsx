import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "nodejs";
export const alt = "Jeremae L. Aguro — Aspiring Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#fafaf8";
const INK = "#14161a";
const SLATE = "#6b7078";
const SIGNAL = "#3454d1";
const SIGNAL_DIM = "#eef1fc";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: PAPER,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 64, padding: "0 80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 640 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: SIGNAL_DIM,
                color: SIGNAL,
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                padding: "8px 18px",
                borderRadius: 999,
                alignSelf: "flex-start",
              }}
            >
              BSIT Student · Roxas City, Philippines
            </div>

            <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: INK, letterSpacing: -1 }}>
              {profile.fullName}
            </div>

            <div style={{ display: "flex", fontSize: 28, color: SLATE, lineHeight: 1.4 }}>
              {profile.title}: web applications, databases, and academic software projects.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 12,
            background: SIGNAL,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
