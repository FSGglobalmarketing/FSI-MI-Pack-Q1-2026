import { useState, FormEvent, ReactNode } from "react";
import fssaLogo from "@/assets/FSSA_White_Mono.png";

const HASH = "fd475168b8bc5e44f5fcf93e8f098b86204d3c3e563f77660a767a68b82586ab";

// FSSA brand palette (from fssaim.com)
const NAVY = "#0f2d52";
const NAVY_DEEP = "#002a4b";
const RED = "#e22e2c";
const RED_HOVER = "#cc181f";
const CARD_BG = "#144266";
const BORDER = "rgba(255,255,255,0.12)";

async function sha256(s: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const [hover, setHover] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if ((await sha256(pw)) === HASH) {
      setOk(true);
    } else {
      setErr(true);
    }
  };

  if (ok) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: `linear-gradient(160deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
        color: "#fff",
        fontFamily: "'SuisseIntl', 'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: "min(92vw, 440px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.75rem",
        }}
      >
        <img
          src={fssaLogo}
          alt="FSSA Investment Managers"
          style={{ width: 180, height: "auto", opacity: 0.95 }}
        />

        <form
          onSubmit={submit}
          style={{
            width: "100%",
            background: CARD_BG,
            padding: "2rem",
            borderRadius: 10,
            border: `1px solid ${BORDER}`,
            boxShadow: "0 24px 60px -18px rgba(0,0,0,0.45)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "1.25rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Q1 2026 Marketing Impact Report
          </h1>
          <p
            style={{
              margin: "0.5rem 0 1.5rem",
              opacity: 0.75,
              fontSize: "0.9rem",
              lineHeight: 1.5,
            }}
          >
            Enter the password to view the report.
          </p>

          <label
            htmlFor="pwd"
            style={{
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              opacity: 0.6,
              marginBottom: "0.4rem",
            }}
          >
            Password
          </label>
          <input
            id="pwd"
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
              setErr(false);
            }}
            autoFocus
            style={{
              width: "100%",
              padding: "0.75rem 0.9rem",
              border: `1px solid ${err ? RED : "rgba(255,255,255,0.18)"}`,
              borderRadius: 6,
              background: NAVY_DEEP,
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.15s",
            }}
          />
          {err && (
            <div style={{ color: RED, fontSize: "0.8rem", marginTop: "0.5rem" }}>
              Incorrect password — please try again.
            </div>
          )}

          <button
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              marginTop: "1.25rem",
              width: "100%",
              padding: "0.85rem",
              border: "none",
              borderRadius: 6,
              background: hover ? RED_HOVER : RED,
              color: "#fff",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            Enter
          </button>
        </form>

        <p
          style={{
            margin: 0,
            fontSize: "0.78rem",
            lineHeight: 1.5,
            textAlign: "center",
            opacity: 0.65,
            maxWidth: 360,
          }}
        >
          Strictly for internal use only. Not for onward distribution.
        </p>
      </div>
    </div>
  );
}
