import { useEffect, useRef } from "react";
import "./liveAI.css";

export default function LiveAIOrb() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let W = 0;
    let H = 0;
    let R = 0;
    let DPR = 1;
    let animationFrame;

    const NODE_COUNT = 32;
    const LINK_DIST = 82;

    const nodes = [];

    const beeShape = [
      [-3, -48, "#15120B"], [3, -48, "#15120B"],
      [-7, -40, "#15120B"], [7, -40, "#15120B"],
      [-20, -25, "#FFFDF6"], [-28, -18, "#FFFDF6"],
      [20, -25, "#FFFDF6"], [28, -18, "#FFFDF6"],
      [-14, -10, "#15120B"], [0, -10, "#15120B"], [14, -10, "#15120B"],
      [-20, 0, "#F5B400"], [-10, 0, "#F5B400"], [0, 0, "#F5B400"], [10, 0, "#F5B400"], [20, 0, "#F5B400"],
      [-20, 10, "#15120B"], [-10, 10, "#15120B"], [0, 10, "#15120B"], [10, 10, "#15120B"], [20, 10, "#15120B"],
      [-20, 20, "#F5B400"], [-10, 20, "#F5B400"], [0, 20, "#F5B400"], [10, 20, "#F5B400"], [20, 20, "#F5B400"],
      [-14, 30, "#15120B"], [0, 30, "#15120B"], [14, 30, "#15120B"],
      [-5, 40, "#15120B"], [5, 40, "#15120B"],
    ];

    function resize() {
      DPR = window.devicePixelRatio || 1;

      const rect = canvas.getBoundingClientRect();

      W = rect.width;
      H = rect.height;
      R = W / 2;

      canvas.width = W * DPR;
      canvas.height = H * DPR;

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
function spawnNode() {
  // Place particles randomly across the entire sphere
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.sqrt(Math.random()) * R * 0.72;

  const x =
    W / 2 +
    Math.cos(angle) * distance;

  const y =
    H / 2 +
    Math.sin(angle) * distance;

      const shape = beeShape[nodes.length % beeShape.length];

      return {
    x,
    y,

    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,

    r: 1.8 + Math.random() * 2.5,

    phase: Math.random() * Math.PI * 2,

    speed: 0.8 + Math.random() * 1.5,

        beeTarget: shape,
  };
}

    function hexPath(cx, cy, r) {
      ctx.beginPath();

      for (let i = 0; i < 6; i++) {
        const angle =
          (Math.PI / 3) * i - Math.PI / 6;

        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();
    }

    let t = 0;
    let previousConvergence = 0;

    function tick() {
      if (!W || !H) {
        animationFrame = requestAnimationFrame(tick);
        return;
      }

      t += 0.02;

      const cycle = (t % 30) / 30;
      const convergence = cycle < 0.35
        ? cycle / 0.35
        : cycle < 0.3567
          ? 1
          : cycle < 0.7067
            ? 1 - (cycle - 0.3567) / 0.35
            : 0;
      const releasing = previousConvergence >= 0.15 && convergence < 0.15;

      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      const boundR = R * 0.86;

      /* --------------------------------
         MOVE NODES
      -------------------------------- */

      nodes.forEach((node) => {

        if (releasing) {
          const angle = Math.atan2(node.y - cy, node.x - cx);
          node.vx = Math.cos(angle) * 0.18;
          node.vy = Math.sin(angle) * 0.18;
        }

        if (convergence > 0.15) {
          const scale = Math.min(W, H) / 260;
          const targetX = cx + node.beeTarget[0] * scale;
          const targetY = cy + node.beeTarget[1] * scale;
          const pull = 0.012 + convergence * 0.028;

          node.x += (targetX - node.x) * pull;
          node.y += (targetY - node.y) * pull;
          node.vx *= 0.92;
          node.vy *= 0.92;
        }

  if (convergence < 0.15) {
    node.x += node.vx * node.speed;
    node.y += node.vy * node.speed;
  }

  node.phase += 0.035;

  // Keep distributed particles across the orb.

  const minX = W / 2 - R * 0.72;
  const maxX = W / 2 + R * 0.72;

  const minY = H / 2 - R * 0.72;
  const maxY = H / 2 + R * 0.72;

  if (node.x < minX || node.x > maxX) {
    node.vx *= -1;
  }

  if (node.y < minY || node.y > maxY) {
    node.vy *= -1;
  }
});

      /* --------------------------------
         CONNECT NODES
      -------------------------------- */

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx =
            nodes[i].x - nodes[j].x;

          const dy =
            nodes[i].y - nodes[j].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < LINK_DIST) {
            const alpha =
  (1 - distance / LINK_DIST) * 0.48;

ctx.strokeStyle =
  `rgba(245, 180, 0, ${alpha})`;

ctx.lineWidth = 0.8;

            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(
              nodes[i].x,
              nodes[i].y
            );

            ctx.lineTo(
              nodes[j].x,
              nodes[j].y
            );

            ctx.stroke();
          }
        }
      }

      /* --------------------------------
         DRAW NODES
      -------------------------------- */

      nodes.forEach((node) => {

  const pulse =
    0.65 +
    Math.sin(node.phase) * 0.35;

  ctx.save();

  // Soft white/gold glow
  ctx.shadowColor =
    "rgba(255, 245, 200, 0.95)";

  ctx.shadowBlur =
    8 + pulse * 5;

  ctx.beginPath();

  ctx.arc(
    node.x,
    node.y,
    node.r,
    0,
    Math.PI * 2
  );

  ctx.fillStyle =
    `rgba(255, 248, 215, ${0.7 + pulse * 0.3})`;

  ctx.fill();

  ctx.restore();

});

      /* --------------------------------
         PULSING AI CORE
      -------------------------------- */

      const pulse =
        10 + Math.sin(t * 1.6) * 2.2;

      ctx.save();

      ctx.globalAlpha = Math.max(0.08, 1 - convergence);

      ctx.shadowColor =
        "rgba(245,180,0,0.9)";

      ctx.shadowBlur = 22;

      hexPath(
        cx,
        cy,
        pulse
      );

      ctx.fillStyle = "#F5B400";

      ctx.fill();

      ctx.restore();

      /* Outer hex ring */

      hexPath(
        cx,
        cy,
        pulse + 5
      );

      ctx.save();
      ctx.globalAlpha = Math.max(0.08, 1 - convergence);

      ctx.strokeStyle =
        "rgba(245,180,0,0.35)";

      ctx.lineWidth = 1;

      ctx.stroke();
      ctx.restore();

      previousConvergence = convergence;

      animationFrame =
        requestAnimationFrame(tick);
    }

    /* Create nodes */

   /* Set canvas size FIRST */

resize();

/* Now create the nodes */

for (let i = 0; i < NODE_COUNT; i++) {
  nodes.push(spawnNode());
}

window.addEventListener(
  "resize",
  resize
);

    animationFrame =
      requestAnimationFrame(tick);

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
    <div className="orb-col">

      <div className="orb-wrap">

        {/* Glow */}
        <div className="orb-glow"></div>

        {/* Outer rotating ring */}
        <div className="orb-ring"></div>

        {/* Inner rotating ring */}
        <div className="orb-ring2"></div>

        {/* Main sphere */}
        <div className="orb-circle">
          <canvas
            ref={canvasRef}
            className="hive-canvas"
          />
        </div>

        {/* Live badge */}
        <div className="live-badge">
          <span className="pulse-dot"></span>
          Smart Business Core
        </div>

        {/* Leads */}
        <div className="chip chip-1">

          <div className="ic">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
              <circle
                cx="10"
                cy="7"
                r="4"
              />
            </svg>
          </div>

          <div>
            <b>Customised CRM</b>
            <span>Business management</span>
          </div>

        </div>

        {/* Automation */}
        <div className="chip chip-2">

          <div className="ic">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 2l1.8 4.8L18 9l-4.2 2.2L12 16l-1.8-4.8L6 9l4.2-2.2z" />
            </svg>
          </div>

          <div>
            <b>Automation</b>
            <span>Running live</span>
          </div>

        </div>

        {/* Pipeline */}
        <div className="chip chip-3">

          <div className="ic">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
              />

              <path d="M12 7v10M9 9.5c0-1.1 1.3-2 3-2s3 .9 3 2-1.3 2-3 2-3 .9-3 2 1.3 2 3 2 3-.9 3-2" />
            </svg>
          </div>

          <div>
            <b>TO BE NAMED</b>
            <span>Built for your workflownpm</span>
          </div>

        </div>

        {/* Digital Growth */}
<div className="chip chip-4">
  <div className="ic">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  </div>

  <div>
    <b>Digital Growth</b>
    <span>SEO • Marketing</span>
  </div>
</div>

{/* Business Software */}
<div className="chip chip-5">
  <div className="ic">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h6M7 16h4" />
    </svg>
  </div>

  <div>
    <b>Business Software</b>
    <span>Built for your workflow</span>
  </div>
</div>

{/* Business Solutions */}
<div className="chip chip-6">
  <div className="ic">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 11l7-4M8.5 13l7 4" />
    </svg>
  </div>

  <div>
    <b>Business Solutions</b>
    <span>Connected systems</span>
  </div>
</div>


      </div>

    </div>
  );
}