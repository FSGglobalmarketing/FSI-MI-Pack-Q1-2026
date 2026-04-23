import { useState, useEffect, useCallback, useRef } from "react";

const FSIWhiteLogo = import.meta.env.BASE_URL + "brand/fsi-logo-white-green.svg";

/* ── Status messages ── */
const MSGS = [
  "Navigating Asia's equity landscape",
  "Identifying quality growth franchises",
  "Assessing long-term management conviction",
  "Mapping China's innovation opportunity set",
  "Evaluating returns on capital employed",
  "Tracing the AI value chain across Asia",
  "Analysing bottom-up investment fundamentals",
  "Scrutinising corporate governance standards",
  "Engaging with owner-managed businesses",
  "Assessing India's structural growth drivers",
  "Reviewing capital allocation discipline",
  "Navigating domestic demand headwinds",
  "Tracking bifurcated market dynamics",
  "Evaluating franchise value durability",
  "Following conviction through volatility",
  "Stress-testing sustainable return profiles",
  "Seeking compounders in emerging markets",
  "Assessing minority shareholder protections",
];

/* ── Icon geometry (SVG-space) ── */
const N = 30;
const ICON_SVG_W = 20.48;
const ICON_SVG_H = 24.15;

const TOPS = [
  [0, 0, 3.69, 8.76],
  [5.6, 0, 3.69, 16.76],
  [11.19, 0, 3.69, 4.69],
  [16.79, 0, 3.69, 12.58],
];
const BOTS = [
  [0, 10.84, 3.69, 13.31],
  [5.6, 18.85, 3.69, 5.3],
  [11.19, 6.78, 3.69, 17.37],
  [16.79, 14.67, 3.69, 9.48],
];

function svgToScreen(sx: number, sy: number, sw: number, sh: number, scale: number, ox: number, oy: number) {
  return { x: ox + sx * scale, y: oy + sy * scale, w: sw * scale, h: sh * scale };
}

/* ── Maze generation ── */
function generateMaze() {
  const wallH = Array.from({ length: N }, () => new Array(N).fill(true));
  const wallV = Array.from({ length: N }, () => new Array(N).fill(true));
  const vis = Array.from({ length: N }, () => new Array(N).fill(false));
  const stack: number[][] = [[0, 0]];
  vis[0][0] = true;
  const D = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  while (stack.length) {
    const [r, c] = stack[stack.length - 1];
    const ns = D.map(([dr, dc]) => [r + dr, c + dc])
      .filter(([nr, nc]) => nr >= 0 && nr < N && nc >= 0 && nc < N && !vis[nr][nc])
      .sort(() => Math.random() - 0.5);
    if (!ns.length) { stack.pop(); continue; }
    const [nr, nc] = ns[0];
    if (nr === r - 1) wallH[nr][c] = false;
    if (nr === r + 1) wallH[r][c] = false;
    if (nc === c - 1) wallV[r][nc] = false;
    if (nc === c + 1) wallV[r][c] = false;
    vis[nr][nc] = true;
    stack.push([nr, nc]);
  }
  // BFS solve
  const prev = Array.from({ length: N }, () => new Array(N).fill(null));
  prev[0][0] = [-1, -1];
  const q: number[][] = [[0, 0]];
  const can = (r: number, c: number, nr: number, nc: number) => {
    if (nr === r - 1) return !wallH[nr][c];
    if (nr === r + 1) return !wallH[r][c];
    if (nc === c - 1) return !wallV[r][nc];
    if (nc === c + 1) return !wallV[r][c];
    return false;
  };
  let solvePath: number[][] = [];
  while (q.length) {
    const [r, c] = q.shift()!;
    if (r === N - 1 && c === N - 1) {
      let cur = [r, c];
      while (cur[0] !== -1) { solvePath.unshift(cur); cur = prev[cur[0]][cur[1]]; }
      break;
    }
    for (const [dr, dc] of D) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= N || nc >= 0 || nc < N ? false : true) continue;
      if (nr < 0 || nr >= N || nc < 0 || nc >= N || prev[nr][nc]) continue;
      if (can(r, c, nr, nc)) { prev[nr][nc] = [r, c]; q.push([nr, nc]); }
    }
  }
  return { wallH, wallV, solvePath };
}

/* ── Easing helpers ── */
function eio(t: number) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
function eo3(t: number) { return 1 - Math.pow(1 - t, 3); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function clamp(t: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, t)); }

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [done, setDone] = useState(false);
  const [statusMsg, setStatusMsg] = useState(MSGS[0]);
  const [msgFading, setMsgFading] = useState(false);
  const [pctText, setPctText] = useState("0%");
  const [showSkip, setShowSkip] = useState(false);
  const [hudTop, setHudTop] = useState("50%");
  const [hudLeft, setHudLeft] = useState("50%");

  const finish = useCallback(() => {
    setDone(true);
    setTimeout(onComplete, 600);
  }, [onComplete]);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d")!;

    let W = 0, H = 0, cx = 0, cy = 0;
    let dpr = 1;
    function resize() {
      dpr = window.devicePixelRatio || 1;
      const cssW = window.innerWidth;
      const cssH = window.innerHeight;
      cv!.width = cssW * dpr;
      cv!.height = cssH * dpr;
      cv!.style.width = cssW + "px";
      cv!.style.height = cssH + "px";
      W = cssW;
      H = cssH;
      cx = W / 2;
      cy = H / 2;
      mazeData = generateMaze();
    }

    let mazeData = generateMaze();
    resize();
    window.addEventListener("resize", resize);

    function getMazeSize() { return Math.min(W, H) * 0.141; }
    function getCell() { return getMazeSize() / N; }
    function getIconLayout() {
      const iconH = Math.min(W, H) * 0.38;
      const scale = iconH / ICON_SVG_H;
      const iconW = ICON_SVG_W * scale;
      const ox = cx - iconW / 2;
      const oy = cy - iconH / 2;
      return { scale, ox, oy, iconW, iconH };
    }

    /* ── Snap rotation ── */
    let mazeAngle = 0;
    let snapAnim: { from: number; to: number; elapsed: number } | null = null;
    let snapCount = 0;
    const SNAP_THRESHOLDS = [0.2, 0.4, 0.6, 0.8];
    const SNAP_DUR = 520;

    function triggerSnap() {
      const from = mazeAngle, to = from + Math.PI / 2;
      snapAnim = { from, to, elapsed: 0 };
    }
    function snapEase(t: number) {
      const o = 1.10;
      if (t < 0.68) { const u = t / 0.68; return o * (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2); }
      const u = (t - 0.68) / 0.32;
      return o + (1 - o) * (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
    }

    /* ── Post-maze morph ── */
    let postPhase = 0, postT = 0, angleAtMorph = 0;
    const PH: Record<number, number> = { 1: 200, 2: 850, 3: 900 };

    /* ── Draw maze grid ── */
    function drawMazeGrid(cell: number, pathProg: number, wallA: number, bgA: number) {
      const { wallH, wallV, solvePath } = mazeData;
      const sz = cell * N, ox = -sz / 2, oy = -sz / 2;
      const lw = Math.max(1.2, cell * 0.11);
      if (bgA > 0) {
        ctx.globalAlpha = bgA;
        ctx.fillStyle = "#011A3A";
        ctx.fillRect(ox, oy, sz, sz);
        ctx.globalAlpha = 1;
      }
      if (wallA > 0) {
        ctx.globalAlpha = wallA;
        ctx.strokeStyle = "rgba(255,255,255,0.80)";
        ctx.lineWidth = lw;
        ctx.lineCap = "square";
        ctx.strokeRect(ox + lw / 2, oy + lw / 2, sz - lw, sz - lw);
        for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
          const x = ox + c * cell, y = oy + r * cell;
          if (wallH[r][c] && r < N - 1) { ctx.beginPath(); ctx.moveTo(x, y + cell); ctx.lineTo(x + cell, y + cell); ctx.stroke(); }
          if (wallV[r][c] && c < N - 1) { ctx.beginPath(); ctx.moveTo(x + cell, y); ctx.lineTo(x + cell, y + cell); ctx.stroke(); }
        }
        // Entry/exit gaps
        const g = lw * 1.6;
        ctx.globalAlpha = bgA;
        ctx.fillStyle = "#011A3A";
        ctx.fillRect(ox + g, oy - g * 0.6, cell - g * 2, g * 1.5);
        ctx.fillRect(ox + (N - 1) * cell + g, oy + N * cell - g * 0.6, cell - g * 2, g * 1.5);
        ctx.globalAlpha = 1;
      }
      // Red solution path
      if (pathProg > 0 && solvePath && solvePath.length > 1 && wallA > 0) {
        const total = solvePath.length - 1, drawn = pathProg * total;
        const full = Math.floor(drawn), frac = drawn - full;
        function trace() {
          ctx.beginPath();
          for (let i = 0; i <= full && i < solvePath.length; i++) {
            const [r, c] = solvePath[i];
            const px = ox + c * cell + cell / 2, py = oy + r * cell + cell / 2;
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
          }
          if (frac > 0 && full + 1 < solvePath.length) {
            const [r0, c0] = solvePath[full], [r1, c1] = solvePath[full + 1];
            const dx = (ox + c1 * cell + cell / 2) - (ox + c0 * cell + cell / 2);
            const dy = (oy + r1 * cell + cell / 2) - (oy + r0 * cell + cell / 2);
            ctx.lineTo(ox + c0 * cell + cell / 2 + dx * frac, oy + r0 * cell + cell / 2 + dy * frac);
          }
          ctx.stroke();
        }
        ctx.globalAlpha = wallA;
        ctx.strokeStyle = "rgba(96,190,179,0.20)"; ctx.lineWidth = cell * 0.65; ctx.lineCap = "round"; ctx.lineJoin = "round"; trace();
        ctx.strokeStyle = "rgba(96,190,179,0.55)"; ctx.lineWidth = cell * 0.28; trace();
        ctx.strokeStyle = "#61bdb1"; ctx.lineWidth = cell * 0.13; trace();
        ctx.globalAlpha = 1;
        if (full < total) {
          const [r0, c0] = solvePath[full], [r1, c1] = solvePath[Math.min(full + 1, total)];
          const dx = (ox + c1 * cell + cell / 2) - (ox + c0 * cell + cell / 2);
          const dy = (oy + r1 * cell + cell / 2) - (oy + r0 * cell + cell / 2);
          ctx.globalAlpha = wallA;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(ox + c0 * cell + cell / 2 + dx * frac, oy + r0 * cell + cell / 2 + dy * frac, cell * 0.20, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
    }

    /* ── Status message rotation ── */
    let mIdx = 0, mTimer = 0;
    function tickStatus(dt: number) {
      mTimer += dt;
      if (mTimer > 3200) {
        mTimer = 0;
        setMsgFading(true);
        setTimeout(() => {
          mIdx = (mIdx + 1) % MSGS.length;
          setStatusMsg(MSGS[mIdx]);
          setMsgFading(false);
        }, 220);
      }
    }

    /* ── Main loop ── */
    let t0: number | null = null, last = 0, prog = 0;
    const DUR = 15000;
    let animId = 0;
    let completeFired = false;

    function loop(ts: number) {
      if (!t0) t0 = ts;
      const dt = Math.min(ts - last, 50);
      last = ts;
      const raw = Math.min(1, (ts - t0) / DUR);
      prog = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;

      // Snaps
      for (let i = 0; i < SNAP_THRESHOLDS.length; i++) {
        if (i >= snapCount && prog >= SNAP_THRESHOLDS[i]) { snapCount = i + 1; triggerSnap(); }
      }
      if (snapAnim) {
        snapAnim.elapsed += dt;
        const t = Math.min(1, snapAnim.elapsed / SNAP_DUR);
        mazeAngle = snapAnim.from + (snapAnim.to - snapAnim.from) * snapEase(t);
        if (t >= 1) { mazeAngle = snapAnim.to; snapAnim = null; }
      }

      // Post phases
      if (prog >= 1 && postPhase === 0) { postPhase = 1; postT = 0; angleAtMorph = mazeAngle; snapAnim = null; }
      if (postPhase >= 1 && postPhase <= 3) {
        postT += dt;
        if (postT >= PH[postPhase]) { postPhase++; postT = 0; }
      }

      // Fire completion after phase 3
      if (postPhase > 3 && !completeFired) {
        completeFired = true;
        setTimeout(() => setDone(true), 800);
        setTimeout(onComplete, 1400);
      }

      // ── RENDER ──
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#022856";
      ctx.fillRect(0, 0, W, H);

      const cell = getCell(), msz = getMazeSize();
      const layout = getIconLayout();
      const { scale: sc, ox: lox, oy: loy } = layout;

      if (postPhase <= 1) {
        // MAZE phase
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(mazeAngle);
        const half = msz / 2 + 5, tick = 10;
        ctx.strokeStyle = "rgba(255,255,255,0.16)";
        ctx.lineWidth = 1;
        ctx.lineCap = "butt";
        ([[-1, -1], [-1, 1], [1, -1], [1, 1]] as const).forEach(([sx, sy]) => {
          const x = sx * half, y = sy * half;
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - sx * tick, y); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - sy * tick); ctx.stroke();
        });
        drawMazeGrid(cell, prog, 1, 1);
        ctx.restore();
      } else if (postPhase === 2) {
        // MORPH: square → bar2 top
        const t = eio(Math.min(1, postT / PH[2]));
        const b2t = svgToScreen(TOPS[2][0], TOPS[2][1], TOPS[2][2], TOPS[2][3], sc, lox, loy);
        const targetCX = b2t.x + b2t.w / 2;
        const targetCY = b2t.y + b2t.h / 2;
        const curCX = lerp(cx, targetCX, t);
        const curCY = lerp(cy, targetCY, t);
        const curW = lerp(msz, b2t.w, t);
        const curH = lerp(msz, b2t.h, t);
        const rotT = clamp(t / 0.4, 0, 1);
        const curAng = lerp(angleAtMorph, Math.round(angleAtMorph / (Math.PI / 2)) * Math.PI / 2, eio(rotT));
        const wallAl = Math.max(0, 1 - t / 0.4);
        const whiteA = clamp((t - 0.25) / 0.55, 0, 1);

        ctx.save();
        ctx.translate(curCX, curCY);
        ctx.rotate(curAng);
        ctx.scale(curW / msz, curH / msz);
        drawMazeGrid(cell, 1, wallAl, 1);
        if (whiteA > 0) {
          ctx.globalAlpha = whiteA;
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(-msz / 2, -msz / 2, msz, msz);
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      } else if (postPhase >= 3) {
        // ICON: all 8 pieces
        const t = postPhase === 3 ? eio(Math.min(1, postT / PH[3])) : 1;
        const b2t = svgToScreen(TOPS[2][0], TOPS[2][1], TOPS[2][2], TOPS[2][3], sc, lox, loy);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(b2t.x, b2t.y, b2t.w, b2t.h);

        const DELAYS_TOP = [0.08, 0.20, -1, 0.14];
        const DELAYS_BOT = [0.04, 0.16, 0.02, 0.10];

        ctx.fillStyle = "#ffffff";
        TOPS.forEach((piece, i) => {
          if (i === 2) return;
          const d = DELAYS_TOP[i];
          const bt = eo3(clamp((t - d) / (1 - d), 0, 1));
          if (bt <= 0) return;
          const r = svgToScreen(piece[0], piece[1], piece[2], piece[3], sc, lox, loy);
          ctx.fillRect(r.x, r.y, r.w, r.h * bt);
        });
        BOTS.forEach((piece, i) => {
          const d = DELAYS_BOT[i];
          const bt = eo3(clamp((t - d) / (1 - d), 0, 1));
          if (bt <= 0) return;
          const r = svgToScreen(piece[0], piece[1], piece[2], piece[3], sc, lox, loy);
          ctx.fillRect(r.x, r.y + r.h - r.h * bt, r.w, r.h * bt);
        });
      }

      // HUD text
      // Position HUD below maze
      const mazeCenter = cx;
      const mazeBottom = cy + getMazeSize() / 2 + 24;
      setHudTop(mazeBottom + "px");
      setHudLeft(mazeCenter + "px");

      if (postPhase < 3) {
        setPctText(Math.floor(prog * 100) + "%");
        tickStatus(dt);
      } else {
        setPctText("");
        setStatusMsg("Ready.");
        setMsgFading(false);
      }

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    const skipTimer = setTimeout(() => setShowSkip(true), 5000);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
      clearTimeout(skipTimer);
    };
  }, [onComplete]);

  const hudTopRef = useRef(0);
  const hudRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#022856",
        overflow: "hidden",
        opacity: done ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: done ? "none" : "auto",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />

      {/* Top-left logo */}
      <img
        src={FSIWhiteLogo}
        alt="First Sentier Investors"
        style={{
          position: "absolute",
          top: 26,
          left: 30,
          width: 140,
          zIndex: 10,
          pointerEvents: "none",
          opacity: 0,
          animation: "splashFadeIn 0.8s 0.2s ease forwards",
        }}
      />

      {/* HUD */}
      <div
        ref={hudRef}
        style={{
          position: "absolute",
          left: hudLeft,
          top: hudTop,
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
          zIndex: 10,
          pointerEvents: "none",
          opacity: 0,
          animation: "splashFadeIn 0.8s 0.4s ease forwards",
        }}
      >
        {/* Status line */}
        <div
          style={{
            fontFamily: "'SuisseIntl', sans-serif",
            fontWeight: 300,
            fontSize: 24,
            letterSpacing: "0.02em",
            color: "#ffffff",
            whiteSpace: "nowrap",
            opacity: msgFading ? 0 : 1,
            transition: "opacity 0.22s ease",
          }}
        >
          {statusMsg}
        </div>

        {/* Percentage */}
        {pctText && (
          <div
            style={{
              fontFamily: "'SuisseIntl', sans-serif",
              fontWeight: 500,
              fontSize: 32,
              letterSpacing: "0.08em",
              color: "#61bdb1",
            }}
          >
            {pctText}
          </div>
        )}

        {/* Skip button */}
        {showSkip && (
          <button
            onClick={finish}
            style={{
              marginTop: 16,
              pointerEvents: "auto",
              fontFamily: "'SuisseIntl', sans-serif",
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            SKIP →
          </button>
        )}
      </div>
    </div>
  );
}
