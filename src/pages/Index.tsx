import { useEffect, useState } from "react";

const TEXTURE_URL =
  "https://cdn.poehali.dev/projects/daa402b5-c68c-47e9-a398-5ea317229873/files/841c539d-5fd9-4b03-8152-c5aab779c52a.jpg";

const Label = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(10px)",
    transition: `opacity 1.2s ease ${delay}s, transform 1.2s ease ${delay}s`,
  });

  return (
    <div
      style={{
        width: 660,
        height: 460,
        position: "relative",
        background: `url(${TEXTURE_URL}) center/cover`,
        border: "1px solid #1a1a1a",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "36px 44px",
      }}
    >
      {/* Outer decorative frame */}
      <div style={{ position: "absolute", inset: 12, border: "0.5px solid rgba(26,26,26,0.2)", pointerEvents: "none" }} />
      {/* Corner marks TL */}
      <div style={{ position: "absolute", top: 20, left: 20, width: 18, height: 18, borderTop: "0.5px solid #1a1a1a", borderLeft: "0.5px solid #1a1a1a" }} />
      {/* Corner marks TR */}
      <div style={{ position: "absolute", top: 20, right: 20, width: 18, height: 18, borderTop: "0.5px solid #1a1a1a", borderRight: "0.5px solid #1a1a1a" }} />
      {/* Corner marks BL */}
      <div style={{ position: "absolute", bottom: 20, left: 20, width: 18, height: 18, borderBottom: "0.5px solid #1a1a1a", borderLeft: "0.5px solid #1a1a1a" }} />
      {/* Corner marks BR */}
      <div style={{ position: "absolute", bottom: 20, right: 20, width: 18, height: 18, borderBottom: "0.5px solid #1a1a1a", borderRight: "0.5px solid #1a1a1a" }} />

      {/* Top line */}
      <div style={{ ...fade(0.1) }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(26,26,26,0.25)", transformOrigin: "right", transform: visible ? "scaleX(1)" : "scaleX(0)", transition: "transform 1.4s ease 0.3s" }} />
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 9,
            letterSpacing: "0.55em",
            color: "rgba(26,26,26,0.5)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>
            Maison · Parfums
          </div>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(26,26,26,0.25)", transformOrigin: "left", transform: visible ? "scaleX(1)" : "scaleX(0)", transition: "transform 1.4s ease 0.3s" }} />
        </div>
      </div>

      {/* Main body — three columns */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        gap: 32,
      }}>

        {/* Left — Monogram */}
        <div style={{ ...fade(0.2), display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 90 }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "0.5px solid #1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              width: 68,
              height: 68,
              borderRadius: "50%",
              border: "0.5px solid rgba(26,26,26,0.25)",
            }} />
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: 32,
              color: "#1a1a1a",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}>M</span>
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 8,
            letterSpacing: "0.35em",
            color: "rgba(26,26,26,0.45)",
            textTransform: "uppercase",
            textAlign: "center",
          }}>Логотип</div>
        </div>

        {/* Center vertical divider */}
        <div style={{
          width: "0.5px",
          height: 120,
          background: "rgba(26,26,26,0.15)",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }} />

        {/* Center — Name */}
        <div style={{ ...fade(0.3), textAlign: "center", flex: 1 }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 88,
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
            color: "#1a1a1a",
          }}>
            23.33
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: 13,
            letterSpacing: "0.2em",
            color: "rgba(26,26,26,0.5)",
            marginTop: 14,
          }}>
            Eau de Parfum
          </div>
        </div>

        {/* Center vertical divider */}
        <div style={{
          width: "0.5px",
          height: 120,
          background: "rgba(26,26,26,0.15)",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }} />

        {/* Right — Details */}
        <div style={{ ...fade(0.4), display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 20, minWidth: 90 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 8,
              letterSpacing: "0.35em",
              color: "rgba(26,26,26,0.4)",
              textTransform: "uppercase",
              marginBottom: 4,
            }}>Объём</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: 18,
              letterSpacing: "0.05em",
              color: "#1a1a1a",
            }}>50 ml</div>
          </div>

          <div style={{ width: 32, height: "0.5px", background: "rgba(26,26,26,0.2)" }} />

          <div style={{ textAlign: "right" }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 8,
              letterSpacing: "0.35em",
              color: "rgba(26,26,26,0.4)",
              textTransform: "uppercase",
              marginBottom: 4,
            }}>Страна</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: 18,
              letterSpacing: "0.05em",
              color: "#1a1a1a",
            }}>Россия</div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div style={{ ...fade(0.5) }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(26,26,26,0.25)", transformOrigin: "right", transform: visible ? "scaleX(1)" : "scaleX(0)", transition: "transform 1.4s ease 0.8s" }} />
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 8,
            letterSpacing: "0.5em",
            color: "rgba(26,26,26,0.35)",
            textTransform: "uppercase",
          }}>
            ✦
          </div>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(26,26,26,0.25)", transformOrigin: "left", transform: visible ? "scaleX(1)" : "scaleX(0)", transition: "transform 1.4s ease 0.8s" }} />
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #f5f2ee 0%, #ede9e3 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 20px",
      gap: 52,
    }}>

      {/* Header */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 10,
          letterSpacing: "0.5em",
          color: "rgba(26,26,26,0.35)",
          textTransform: "uppercase",
          marginBottom: 10,
        }}>
          Предпросмотр этикетки
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: 26,
          letterSpacing: "0.05em",
          color: "#1a1a1a",
        }}>
          23.33 · Eau de Parfum
        </div>
      </div>

      {/* Label */}
      <Label />

      {/* Footer note */}
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize: 9,
        letterSpacing: "0.35em",
        color: "rgba(26,26,26,0.28)",
        textTransform: "uppercase",
        textAlign: "center",
      }}>
        660 × 460 px · Горизонтальный формат
      </div>
    </div>
  );
};

export default Index;
