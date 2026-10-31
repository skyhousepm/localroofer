import { ImageResponse } from "next/og";

export const alt = "LocalRoofer.ca — Toronto & GTA Roofing Contractors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Rooftop silhouette — same skyline used in the page heroes */
const ROOFLINE =
  "M0,100 L0,65 L60,65 L60,48 L80,30 L100,48 L100,65 L160,65 L160,44 L190,22 L220,44 L220,65 L300,65 L300,52 L330,35 L360,52 L360,65 L420,65 L420,40 L455,12 L490,40 L490,65 L580,65 L580,56 L610,42 L640,56 L640,65 L720,65 L720,36 L760,6 L800,36 L800,65 L880,65 L880,48 L910,28 L940,48 L940,65 L1020,65 L1020,52 L1050,36 L1080,52 L1080,65 L1160,65 L1160,40 L1200,12 L1240,40 L1240,65 L1320,65 L1320,50 L1350,32 L1380,50 L1380,65 L1440,65 L1440,100 Z";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F172A",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: "80px 80px 0" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#fff" }}>
            LocalRoofer<span style={{ color: "#F97316" }}>.ca</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 72,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Trusted Local Roofers in Toronto &amp; the GTA
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "rgba(255,255,255,0.6)" }}>
            Free estimates for repair, replacement &amp; inspection
          </div>
        </div>
        <svg viewBox="0 0 1440 100" width="1200" height="84" preserveAspectRatio="none">
          <path d={ROOFLINE} fill="#F97316" />
        </svg>
      </div>
    ),
    size
  );
}
