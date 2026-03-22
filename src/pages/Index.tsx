import { useEffect, useState } from "react";

const TEXTURE_URL =
  "https://cdn.poehali.dev/projects/daa402b5-c68c-47e9-a398-5ea317229873/files/d0a32005-5120-4511-bd5f-5cccfc42aeee.jpg";

const Label = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-between"
      style={{
        width: 320,
        height: 480,
        background: `url(${TEXTURE_URL}) center/cover`,
        border: "1px solid #1a1a1a",
        padding: "40px 32px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Outer frame line */}
      <div
        style={{
          position: "absolute",
          inset: 10,
          border: "0.5px solid rgba(26,26,26,0.35)",
          pointerEvents: "none",
        }}
      />

      {/* Top section */}
      <div
        className="flex flex-col items-center w-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        {/* Monogram / Logo */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.35em",
            color: "#1a1a1a",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Parfums
        </div>

        {/* Decorative monogram circle */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "0.5px solid #1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "0.5px solid rgba(26,26,26,0.3)",
              position: "absolute",
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: 28,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            M
          </span>
        </div>

        {/* Top divider */}
        <div
          style={{
            width: "100%",
            height: "0.5px",
            background: "#1a1a1a",
            transformOrigin: "left",
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1.5s ease 0.4s",
            marginBottom: 28,
          }}
        />
      </div>

      {/* Center — Name */}
      <div
        className="flex flex-col items-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 1.4s ease 0.3s, transform 1.4s ease 0.3s",
          textAlign: "center",
          flex: 1,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 64,
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            color: "#1a1a1a",
          }}
        >
          23
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.5em",
            color: "#1a1a1a",
            margin: "6px 0",
          }}
        >
          ·
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 64,
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            color: "#1a1a1a",
          }}
        >
          33
        </div>

        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: 13,
            letterSpacing: "0.15em",
            color: "rgba(26,26,26,0.65)",
            marginTop: 16,
          }}
        >
          Eau de Parfum
        </div>
      </div>

      {/* Bottom section */}
      <div
        className="flex flex-col items-center w-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 1.6s ease 0.6s, transform 1.6s ease 0.6s",
        }}
      >
        {/* Bottom divider */}
        <div
          style={{
            width: "100%",
            height: "0.5px",
            background: "#1a1a1a",
            transformOrigin: "right",
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1.5s ease 0.8s",
            marginBottom: 20,
          }}
        />

        {/* Volume & Country */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 9,
                letterSpacing: "0.3em",
                color: "rgba(26,26,26,0.5)",
                textTransform: "uppercase",
                marginBottom: 3,
              }}
            >
              Объём
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: 15,
                letterSpacing: "0.1em",
                color: "#1a1a1a",
              }}
            >
              50 ml
            </div>
          </div>

          <div
            style={{
              width: "0.5px",
              height: 32,
              background: "rgba(26,26,26,0.25)",
            }}
          />

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 9,
                letterSpacing: "0.3em",
                color: "rgba(26,26,26,0.5)",
                textTransform: "uppercase",
                marginBottom: 3,
              }}
            >
              Страна
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: 15,
                letterSpacing: "0.1em",
                color: "#1a1a1a",
              }}
            >
              Россия
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0ede8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        gap: 48,
      }}
    >
      {/* Page title */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.4em",
            color: "rgba(26,26,26,0.45)",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Дизайн этикетки
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 22,
            letterSpacing: "0.05em",
            color: "#1a1a1a",
          }}
        >
          Флакон духов · Предпросмотр
        </div>
      </div>

      {/* Label preview */}
      <Label />

      {/* Dimensions note */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "rgba(26,26,26,0.35)",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        320 × 480 px · Масштабируется под любой флакон
      </div>
    </div>
  );
};

export default Index;
