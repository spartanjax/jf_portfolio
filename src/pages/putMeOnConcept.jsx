import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0A0A0F",
  surface: "#13131A",
  surfaceHover: "#1A1A24",
  border: "#2A2A3A",
  accent: "#FF6B35",
  accentGlow: "rgba(255,107,53,0.15)",
  accentSoft: "#FF6B3520",
  purple: "#8B5CF6",
  purpleGlow: "rgba(139,92,246,0.15)",
  green: "#10B981",
  greenGlow: "rgba(16,185,129,0.15)",
  blue: "#3B82F6",
  blueGlow: "rgba(59,130,246,0.15)",
  pink: "#EC4899",
  pinkGlow: "rgba(236,72,153,0.15)",
  text: "#F0F0F5",
  textMuted: "#8888A0",
  textDim: "#55556A",
};

// ─── NAV ────────────────────────────────────────────────
const tabs = [
  { id: "vision", label: "Vision" },
  { id: "features", label: "Features" },
  { id: "posting", label: "Post Flow" },
  { id: "insights", label: "Insights" },
  { id: "graph", label: "Graph Demo" },
  { id: "filters", label: "Filters" },
  { id: "feeds", label: "Feeds" },
  { id: "tech", label: "Tech" },
];

// ─── GRAPH DEMO ─────────────────────────────────────────
function GraphDemo() {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const edgesRef = useRef([]);
  const animRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedView, setSelectedView] = useState("all");

  const nodeData = [
    { id: 0, label: "You", x: 400, y: 300, r: 28, color: COLORS.accent, tier: "origin" },
    { id: 1, label: "Maya", x: 250, y: 180, r: 18, color: COLORS.purple, tier: "direct" },
    { id: 2, label: "Jordan", x: 550, y: 200, r: 20, color: COLORS.purple, tier: "direct" },
    { id: 3, label: "Alex", x: 300, y: 430, r: 16, color: COLORS.purple, tier: "direct" },
    { id: 4, label: "Sam", x: 530, y: 420, r: 17, color: COLORS.purple, tier: "direct" },
    { id: 5, label: "Kai", x: 120, y: 120, r: 13, color: COLORS.green, tier: "second" },
    { id: 6, label: "Priya", x: 160, y: 280, r: 12, color: COLORS.green, tier: "second" },
    { id: 7, label: "Leo", x: 680, y: 150, r: 14, color: COLORS.green, tier: "second" },
    { id: 8, label: "Nina", x: 660, y: 320, r: 11, color: COLORS.green, tier: "second" },
    { id: 9, label: "Ty", x: 200, y: 500, r: 12, color: COLORS.green, tier: "second" },
    { id: 10, label: "Rosa", x: 620, y: 490, r: 13, color: COLORS.green, tier: "second" },
    { id: 11, label: "Eli", x: 50, y: 50, r: 9, color: COLORS.blue, tier: "third" },
    { id: 12, label: "Zara", x: 90, y: 200, r: 10, color: COLORS.blue, tier: "third" },
    { id: 13, label: "Dev", x: 740, y: 80, r: 10, color: COLORS.blue, tier: "third" },
    { id: 14, label: "Ava", x: 750, y: 250, r: 9, color: COLORS.blue, tier: "third" },
  ];

  const edgeData = [
    { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 }, { from: 0, to: 4 },
    { from: 1, to: 5 }, { from: 1, to: 6 }, { from: 2, to: 7 }, { from: 2, to: 8 },
    { from: 3, to: 9 }, { from: 4, to: 10 },
    { from: 5, to: 11 }, { from: 6, to: 12 }, { from: 7, to: 13 }, { from: 8, to: 14 },
  ];

  useEffect(() => {
    nodesRef.current = nodeData.map(n => ({ ...n, ox: n.x, oy: n.y, phase: Math.random() * Math.PI * 2 }));
    edgesRef.current = edgeData;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 800 * dpr;
    canvas.height = 580 * dpr;
    ctx.scale(dpr, dpr);

    let t = 0;
    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, 800, 580);

      const nodes = nodesRef.current;
      nodes.forEach(n => {
        n.x = n.ox + Math.sin(t + n.phase) * 4;
        n.y = n.oy + Math.cos(t * 0.7 + n.phase) * 3;
      });

      const visibleTiers = selectedView === "all"
        ? ["origin", "direct", "second", "third"]
        : selectedView === "direct"
        ? ["origin", "direct"]
        : selectedView === "second"
        ? ["origin", "direct", "second"]
        : ["origin", "direct", "second", "third"];

      // edges
      edgesRef.current.forEach(e => {
        const from = nodes[e.from];
        const to = nodes[e.to];
        if (!visibleTiers.includes(from.tier) || !visibleTiers.includes(to.tier)) return;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        const isHighlighted = hoveredNode !== null && (e.from === hoveredNode || e.to === hoveredNode);
        ctx.strokeStyle = isHighlighted ? COLORS.accent + "90" : "#2A2A3A";
        ctx.lineWidth = isHighlighted ? 2.5 : 1;
        ctx.stroke();
      });

      // pulse on edges (animated particles)
      edgesRef.current.forEach(e => {
        const from = nodes[e.from];
        const to = nodes[e.to];
        if (!visibleTiers.includes(from.tier) || !visibleTiers.includes(to.tier)) return;
        const progress = ((t * 0.5 + e.from * 0.3) % 1);
        const px = from.x + (to.x - from.x) * progress;
        const py = from.y + (to.y - from.y) * progress;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.accent + "60";
        ctx.fill();
      });

      // nodes
      nodes.forEach(n => {
        if (!visibleTiers.includes(n.tier)) return;
        // glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 2.5);
        grad.addColorStop(0, n.color + "30");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // node circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        const isHov = hoveredNode === n.id;
        ctx.fillStyle = isHov ? n.color : n.color + "CC";
        ctx.fill();
        if (n.tier === "origin") {
          ctx.strokeStyle = COLORS.accent;
          ctx.lineWidth = 3;
          ctx.stroke();
        }

        // label
        ctx.fillStyle = COLORS.text;
        ctx.font = `${n.r > 15 ? "bold " : ""}${Math.max(10, n.r * 0.7)}px -apple-system, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y + n.r + 16);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [hoveredNode, selectedView]);

  const handleCanvasMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let found = null;
    nodesRef.current.forEach(n => {
      const d = Math.sqrt((mx - n.x) ** 2 + (my - n.y) ** 2);
      if (d < n.r + 8) found = n.id;
    });
    setHoveredNode(found);
  };

  return (
    <div>
      <p style={{ color: COLORS.textMuted, marginBottom: 16, fontSize: 14, lineHeight: 1.6 }}>
        This is the <span style={{ color: COLORS.accent, fontWeight: 600 }}>Influence Graph</span> — a core feature that visualizes how your recommendations ripple outward. You sit at the center. Each ring represents a degree of separation: people you put on directly, people they reposted to, and so on. Hover over nodes to see connections light up.
      </p>
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {[
          { id: "all", label: "Full Network" },
          { id: "direct", label: "Direct Only" },
          { id: "second", label: "2 Degrees" },
          { id: "third", label: "3 Degrees" },
        ].map(v => (
          <button
            key={v.id}
            onClick={() => setSelectedView(v.id)}
            style={{
              background: selectedView === v.id ? COLORS.accent + "20" : COLORS.surface,
              border: `1px solid ${selectedView === v.id ? COLORS.accent : COLORS.border}`,
              color: selectedView === v.id ? COLORS.accent : COLORS.textMuted,
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div style={{ background: COLORS.surface, borderRadius: 16, border: `1px solid ${COLORS.border}`, overflow: "hidden" }}>
        <canvas
          ref={canvasRef}
          width={800}
          height={580}
          style={{ width: "100%", height: "auto", cursor: hoveredNode !== null ? "pointer" : "default" }}
          onMouseMove={handleCanvasMouseMove}
          onMouseLeave={() => setHoveredNode(null)}
        />
      </div>
      <div style={{ display: "flex", gap: 20, marginTop: 12, justifyContent: "center", flexWrap: "wrap" }}>
        {[
          { color: COLORS.accent, label: "You (origin)" },
          { color: COLORS.purple, label: "Direct put-ons" },
          { color: COLORS.green, label: "2nd degree" },
          { color: COLORS.blue, label: "3rd degree" },
        ].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.color }} />
            <span style={{ color: COLORS.textMuted, fontSize: 12 }}>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── STAT CARD ──────────────────────────────────────────
function StatCard({ value, label, sub, color, glow }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${glow}, ${COLORS.surface})`,
      border: `1px solid ${color}30`,
      borderRadius: 16,
      padding: "20px 16px",
      textAlign: "center",
      flex: "1 1 140px",
      minWidth: 120,
    }}>
      <div style={{ fontSize: 32, fontWeight: 800, color, letterSpacing: "-1px" }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text, marginTop: 4 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

// ─── MOCK POST ──────────────────────────────────────────
function MockPost({ type, title, artist, blurb, extra, putons, reposts, avatar, username }) {
  const typeColors = {
    song: COLORS.accent,
    album: COLORS.purple,
    movie: COLORS.blue,
    show: COLORS.green,
    book: COLORS.pink,
  };
  const typeIcons = { song: "♫", album: "💿", movie: "🎬", show: "📺", book: "📖" };
  return (
    <div style={{
      background: COLORS.surface,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 16,
      padding: 20,
      marginBottom: 14,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%", background: typeColors[type] + "30",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
          border: `2px solid ${typeColors[type]}50`,
        }}>{avatar || username?.[0]?.toUpperCase()}</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.text }}>{username}</div>
          <div style={{ fontSize: 11, color: COLORS.textMuted }}>2h ago</div>
        </div>
        <div style={{
          marginLeft: "auto",
          background: typeColors[type] + "15",
          color: typeColors[type],
          padding: "3px 10px",
          borderRadius: 20,
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}>{typeIcons[type]} {type}</div>
      </div>

      <div style={{
        background: typeColors[type] + "08",
        border: `1px solid ${typeColors[type]}20`,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.text }}>{title}</div>
        <div style={{ fontSize: 13, color: typeColors[type], marginTop: 2, fontWeight: 500 }}>{artist}</div>
      </div>

      <p style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.55, margin: "0 0 10px" }}>{blurb}</p>

      {extra && (
        <div style={{
          background: COLORS.bg,
          borderRadius: 10,
          padding: "10px 14px",
          fontSize: 13,
          color: COLORS.textDim,
          fontStyle: "italic",
          borderLeft: `3px solid ${typeColors[type]}40`,
          marginBottom: 12,
        }}>{extra}</div>
      )}

      <div style={{ display: "flex", gap: 16, paddingTop: 10, borderTop: `1px solid ${COLORS.border}` }}>
        <button style={{
          background: COLORS.accent + "12",
          border: `1px solid ${COLORS.accent}30`,
          color: COLORS.accent,
          padding: "6px 14px",
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}>🔥 Put Me On · {putons}</button>
        <button style={{
          background: "transparent",
          border: `1px solid ${COLORS.border}`,
          color: COLORS.textMuted,
          padding: "6px 14px",
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}>↗ Repost · {reposts}</button>
      </div>
    </div>
  );
}

// ─── SECTION ────────────────────────────────────────────
function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{
        fontSize: 22,
        fontWeight: 800,
        color: COLORS.text,
        margin: "0 0 16px",
        letterSpacing: "-0.5px",
      }}>{title}</h2>
      {children}
    </div>
  );
}

function Chip({ children, color = COLORS.accent }) {
  return (
    <span style={{
      display: "inline-block",
      background: color + "15",
      color,
      padding: "4px 10px",
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 600,
      margin: "2px 4px 2px 0",
    }}>{children}</span>
  );
}

// ─── MAIN APP ───────────────────────────────────────────
export default function PutMeOnConcept() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: "100vh",
      color: COLORS.text,
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      {/* Header */}
      <div style={{
        padding: "28px 24px 0",
        textAlign: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ fontSize: 32 }}>🔥</span>
          <h1 style={{
            fontSize: 36,
            fontWeight: 900,
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.purple})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
            letterSpacing: "-1.5px",
          }}>Put Me On</h1>
        </div>
        <p style={{
          color: COLORS.textMuted,
          fontSize: 14,
          margin: "6px 0 20px",
          fontWeight: 500,
        }}>The social network for recommendations that actually land.</p>
      </div>

      {/* Tab Nav */}
      <div style={{
        display: "flex",
        gap: 4,
        padding: "0 16px 16px",
        overflowX: "auto",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              background: activeTab === t.id ? COLORS.accent : "transparent",
              color: activeTab === t.id ? "#fff" : COLORS.textMuted,
              border: activeTab === t.id ? "none" : `1px solid ${COLORS.border}`,
              padding: "7px 14px",
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* ─── VISION ─── */}
        {activeTab === "vision" && (
          <div>
            <Section title="The Problem">
              <p style={{ color: COLORS.textMuted, lineHeight: 1.7, fontSize: 15 }}>
                Every day, people discover incredible songs, movies, books, and shows through friends — but there's no dedicated space to track, share, and celebrate those recommendations. Existing platforms are either siloed to one media type (Letterboxd for movies, Goodreads for books) or are generic social apps where recommendations get buried in noise. Nobody is tracking the moment someone says <span style={{ color: COLORS.accent, fontWeight: 600 }}>"yo, you put me on to that."</span>
              </p>
            </Section>

            <Section title="The Concept">
              <p style={{ color: COLORS.textMuted, lineHeight: 1.7, fontSize: 15 }}>
                <strong style={{ color: COLORS.text }}>Put Me On</strong> is a social media platform built entirely around media recommendations. Every post is a recommendation. The only interactions are: <Chip>🔥 You Put Me On</Chip> (acknowledging discovery) and <Chip color={COLORS.purple}>↗ Repost</Chip> (passing it along). No comments. No star ratings. No clutter. Just pure signal: <em>did this recommendation land?</em>
              </p>
            </Section>

            <Section title="Core Differentiators">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
                {[
                  { icon: "🎯", title: "Recommendation-First", desc: "Every post is a rec. The entire UX is built around the act of putting someone on." },
                  { icon: "🔥", title: "Binary Signal", desc: "No 5-star ratings, no comments. Just 'You put me on' or repost. Pure, honest signal." },
                  { icon: "🕸️", title: "Influence Graph", desc: "Visualize how your recs ripple outward through your network — who you've put on, who they put on, etc." },
                  { icon: "🎭", title: "Media-Aware Posts", desc: "Posts adapt to content type. Book recs get quote fields. Song recs get lyric snippets. Movies get scene context." },
                  { icon: "📊", title: "Deep Insights", desc: "Rich analytics on your recommendation influence — by genre, media, time period, and social reach." },
                  { icon: "🔍", title: "Smart Filters", desc: "Filter feeds by media type, genre, era, celebrity recs, trending topics, and more." },
                ].map(d => (
                  <div key={d.title} style={{
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 14,
                    padding: 18,
                  }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{d.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginBottom: 6 }}>{d.title}</div>
                    <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.5 }}>{d.desc}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Tagline Concepts">
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  '"Put Me On — Share what changed your life."',
                  '"The social network where every post is a recommendation."',
                  '"You put me on to that." — Now there\'s an app for it.',
                  '"Discover through people, not algorithms."',
                ].map((t, i) => (
                  <div key={i} style={{
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 12,
                    padding: "12px 18px",
                    color: i === 0 ? COLORS.accent : COLORS.textMuted,
                    fontStyle: "italic",
                    fontSize: 15,
                    fontWeight: i === 0 ? 600 : 400,
                  }}>{t}</div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ─── FEATURES ─── */}
        {activeTab === "features" && (
          <div>
            <Section title="Feature Map">
              {[
                {
                  category: "Posting",
                  color: COLORS.accent,
                  items: [
                    "Select media type (song, album, movie, show, book, podcast, game)",
                    "Search & auto-fill metadata via APIs (Spotify, TMDB, Open Library, IGDB)",
                    "Write a blurb — why this rec matters to you",
                    "Media-specific bonus field: favorite quote (book), standout track (album), best scene (movie), best episode (show)",
                    "Tag genres manually or auto-populated from metadata",
                    "Optional: tag friends you think should check this out (push notification)",
                  ],
                },
                {
                  category: "Interactions",
                  color: COLORS.purple,
                  items: [
                    '🔥 "You Put Me On" — the only like. Means: I actually checked this out because of you',
                    "↗ Repost — pass this rec along to your followers (with optional added blurb)",
                    "No comments. No ratings. Keeps the signal clean and the vibe positive",
                    "Save/bookmark recs to a personal list (organized by media type)",
                    "Direct share to external platforms (iMessage, IG Stories, Spotify, etc.)",
                  ],
                },
                {
                  category: "Profile",
                  color: COLORS.green,
                  items: [
                    "Bio + top 5 all-time recs (pinned to profile)",
                    "Recommendation history organized by media type tabs",
                    "Public stats: total put-ons given/received, repost count",
                    "Influence Graph embedded on profile (mini version)",
                    '"Currently consuming" status — what you\'re reading/watching/listening to right now',
                    "Taste profile: auto-generated genre breakdown based on your recs",
                  ],
                },
                {
                  category: "Insights & Analytics",
                  color: COLORS.blue,
                  items: [
                    "Dashboard: put-ons given vs received, reposts, reach over time",
                    "Filter insights by: time period, media type, genre",
                    "Who has put you on the most? (your top sources)",
                    "Who have you put on the most? (your biggest fans)",
                    "Origin tracing: trace a rec back to its original poster through repost chains",
                    "Influence Graph: interactive node visualization of your recommendation network",
                    "Year in Review: annual recap of your recommendation footprint",
                  ],
                },
                {
                  category: "Discovery & Feeds",
                  color: COLORS.pink,
                  items: [
                    "Following feed: recs from people you follow, reverse-chronological",
                    "For You feed: algorithmic, based on your own rec history / taste profile",
                    "Explore feed: trending and random recs from across the platform",
                    "Advanced filtering across all feeds: by media type, genre, era, verified/celebrity recs",
                    "Search: by title, artist, genre, user, or keyword in blurbs",
                  ],
                },
              ].map(section => (
                <div key={section.category} style={{ marginBottom: 24 }}>
                  <h3 style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: section.color,
                    margin: "0 0 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}>
                    <span style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: section.color, display: "inline-block",
                    }} />
                    {section.category}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {section.items.map((item, i) => (
                      <div key={i} style={{
                        background: COLORS.surface,
                        border: `1px solid ${COLORS.border}`,
                        borderRadius: 10,
                        padding: "10px 14px",
                        fontSize: 13,
                        color: COLORS.textMuted,
                        lineHeight: 1.5,
                      }}>{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </Section>
          </div>
        )}

        {/* ─── POST FLOW ─── */}
        {activeTab === "posting" && (
          <div>
            <Section title="What a Post Looks Like">
              <p style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                Each post type adapts its layout and bonus fields to the media being recommended. Here are examples of each:
              </p>
              <MockPost
                type="song" title="Nights" artist="Frank Ocean · Blonde"
                blurb="The beat switch in this song literally rewired my brain. If you haven't sat with this one start to finish, you're missing out."
                extra="♫ Every night fucks every day up / Every day patches the night up"
                putons={342} reposts={89} username="@deejayyy" avatar="D"
              />
              <MockPost
                type="book" title="Piranesi" artist="Susanna Clarke"
                blurb="This is the most beautiful, strange, peaceful book I've read in years. It's like if a dream had a plot. Cannot recommend enough."
                extra='📖 "The Beauty of the House is immeasurable; its Kindness infinite."'
                putons={187} reposts={54} username="@maysreads" avatar="M"
              />
              <MockPost
                type="movie" title="Past Lives" artist="Dir. Celine Song · 2023"
                blurb="I walked out of this movie and just sat in my car for 20 minutes. The ending will stay with you forever."
                extra="🎬 Best scene: the final scene on the stoop. You'll know when you see it."
                putons={512} reposts={203} username="@filmjordan" avatar="J"
              />
              <MockPost
                type="show" title="Severance" artist="Apple TV+ · 2022–"
                blurb="If you work a 9-5 and haven't watched this, please do yourself a favor. It's the most unsettling show about work ever made."
                extra="📺 Start with: S1E1 — you'll be hooked by the elevator scene."
                putons={891} reposts={340} username="@alexwatches" avatar="A"
              />
              <MockPost
                type="album" title="BRAT" artist="Charli XCX · 2024"
                blurb="Album of the year and it's not even close. Every track hits. This is what pop music should sound like."
                extra="💿 Standout track: 360 — turn it UP"
                putons={1243} reposts={467} username="@samplays" avatar="S"
              />
            </Section>
          </div>
        )}

        {/* ─── INSIGHTS ─── */}
        {activeTab === "insights" && (
          <div>
            <Section title="Your Insights Dashboard">
              <p style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                The Insights tab gives you a deep, filterable view of your recommendation influence. Here's a mockup of what it could look like:
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
                <StatCard value="1,847" label="Total Put-Ons" sub="People you've influenced" color={COLORS.accent} glow={COLORS.accentGlow} />
                <StatCard value="342" label="This Year" sub="↑ 67% from last year" color={COLORS.green} glow={COLORS.greenGlow} />
                <StatCard value="89" label="Reposts" sub="Your recs shared further" color={COLORS.purple} glow={COLORS.purpleGlow} />
                <StatCard value="3rd°" label="Deepest Reach" sub="Your recs went 3 hops" color={COLORS.blue} glow={COLORS.blueGlow} />
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: COLORS.text, margin: "0 0 12px" }}>Filterable Breakdowns</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 24 }}>
                {[
                  { title: "By Media Type", items: ["♫ Music: 623 put-ons", "🎬 Movies: 412", "📖 Books: 298", "📺 Shows: 341", "💿 Albums: 173"] },
                  { title: "By Genre (Music)", items: ["R&B: 234", "Hip-Hop: 189", "Indie: 112", "Electronic: 56", "Jazz: 32"] },
                  { title: "By Time Period", items: ["This month: 47", "This quarter: 128", "This year: 342", "All time: 1,847", ""] },
                ].map(b => (
                  <div key={b.title} style={{
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 14,
                    padding: 16,
                  }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, marginBottom: 10 }}>{b.title}</div>
                    {b.items.filter(Boolean).map((item, i) => (
                      <div key={i} style={{ fontSize: 13, color: COLORS.textMuted, padding: "4px 0", borderBottom: i < b.items.filter(Boolean).length - 1 ? `1px solid ${COLORS.border}` : "none" }}>{item}</div>
                    ))}
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: COLORS.text, margin: "0 0 12px" }}>People Insights</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.green, marginBottom: 10 }}>🎯 Who You've Put On Most</div>
                  {["@maya — 47 put-ons from you", "@jordan — 38", "@alex — 29", "@sam — 24", "@kai — 18"].map((p, i) => (
                    <div key={i} style={{ fontSize: 13, color: COLORS.textMuted, padding: "5px 0", borderBottom: i < 4 ? `1px solid ${COLORS.border}` : "none" }}>{p}</div>
                  ))}
                </div>
                <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.purple, marginBottom: 10 }}>🔥 Who's Put You On Most</div>
                  {["@priya — 52 put-ons to you", "@leo — 41", "@nina — 33", "@ty — 27", "@rosa — 19"].map((p, i) => (
                    <div key={i} style={{ fontSize: 13, color: COLORS.textMuted, padding: "5px 0", borderBottom: i < 4 ? `1px solid ${COLORS.border}` : "none" }}>{p}</div>
                  ))}
                </div>
              </div>

              <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 16, marginTop: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.blue, marginBottom: 10 }}>🕸️ Origin Tracing</div>
                <p style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6, margin: 0 }}>
                  Tap any put-on to trace its origin. Example: You got put on to "Nights" by Frank Ocean via <span style={{ color: COLORS.purple }}>@maya</span>, who reposted it from <span style={{ color: COLORS.green }}>@kai</span>, who originally posted it. The chain is always visible — giving credit where it's due.
                </p>
              </div>

              <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 16, marginTop: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.pink, marginBottom: 10 }}>🎉 Year in Review (Wrapped-style)</div>
                <p style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6, margin: 0 }}>
                  End-of-year recap: "In 2026, you put 342 people on to new media. Your most influential rec was 'Severance' with 89 put-ons. You were put on 278 times — mostly by @priya. Your taste leaned 38% R&B, 24% indie film, 18% literary fiction. Your recs reached 3 degrees of separation."
                </p>
              </div>
            </Section>
          </div>
        )}

        {/* ─── GRAPH DEMO ─── */}
        {activeTab === "graph" && (
          <Section title="Influence Graph — Interactive Demo">
            <GraphDemo />
          </Section>
        )}

        {/* ─── FILTERS ─── */}
        {activeTab === "filters" && (
          <div>
            <Section title="Filtering System">
              <p style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                Filters are persistent across all three feeds and can be stacked. The filter bar sits below the feed selector and collapses into a pill-style summary when active.
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: COLORS.text, margin: "0 0 12px" }}>Filter Categories</h3>
              {[
                { title: "Media Type", color: COLORS.accent, chips: ["All", "Songs", "Albums", "Movies", "Shows", "Books", "Podcasts", "Games"] },
                { title: "Genre", color: COLORS.purple, chips: ["R&B", "Hip-Hop", "Rock", "Indie", "Pop", "Jazz", "Electronic", "Classical", "Drama", "Comedy", "Horror", "Thriller", "Sci-Fi", "Romance", "Fantasy", "Literary Fiction", "Non-Fiction", "Memoir"] },
                { title: "Era / Decade", color: COLORS.green, chips: ["2020s", "2010s", "2000s", "90s", "80s", "70s", "Classic"] },
                { title: "Source", color: COLORS.blue, chips: ["Friends Only", "Verified / Celebrity", "Mutual Follows", "Anyone"] },
                { title: "Popularity", color: COLORS.pink, chips: ["Trending (most put-ons this week)", "Rising (fastest growing)", "Hidden Gems (< 10 put-ons)", "All Time Top"] },
                { title: "Recency", color: COLORS.accent, chips: ["Today", "This Week", "This Month", "This Year", "All Time"] },
              ].map(f => (
                <div key={f.title} style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: f.color, marginBottom: 8 }}>{f.title}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {f.chips.map(c => (
                      <span key={c} style={{
                        background: COLORS.surface,
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.textMuted,
                        padding: "5px 12px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 500,
                        cursor: "pointer",
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{
                background: COLORS.surface,
                border: `1px solid ${COLORS.accent}30`,
                borderRadius: 14,
                padding: 16,
                marginTop: 10,
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.accent, marginBottom: 8 }}>💡 Smart Combos</div>
                <p style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6, margin: 0 }}>
                  Filters stack naturally. Examples: "Show me <Chip>Books</Chip> in <Chip color={COLORS.purple}>Literary Fiction</Chip> from <Chip color={COLORS.blue}>Friends Only</Chip>" or "Show me <Chip>Songs</Chip> in <Chip color={COLORS.purple}>R&B</Chip> from the <Chip color={COLORS.green}>90s</Chip> that are <Chip color={COLORS.pink}>Hidden Gems</Chip>." Active filters collapse into a scrollable pill bar at the top of the feed.
                </p>
              </div>
            </Section>
          </div>
        )}

        {/* ─── FEEDS ─── */}
        {activeTab === "feeds" && (
          <div>
            <Section title="Three-Feed System">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 20 }}>
                {[
                  { name: "Following", icon: "👥", color: COLORS.accent, desc: "Reverse-chronological recs from people you follow. Your trusted circle. Purest signal — these are the people whose taste you've opted into." },
                  { name: "For You", icon: "✨", color: COLORS.purple, desc: "Algorithmic feed based on your own recommendation history and taste profile. If you post a lot of R&B, you'll see R&B recs from people you don't follow yet. Discovery through taste alignment." },
                  { name: "Explore", icon: "🌍", color: COLORS.green, desc: "Trending and random recs from across the entire platform. Serendipity engine. Great for breaking out of your bubble and finding unexpected recs." },
                ].map(f => (
                  <div key={f.name} style={{
                    background: COLORS.surface,
                    border: `1px solid ${f.color}30`,
                    borderRadius: 14,
                    padding: 20,
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: f.color, marginBottom: 8 }}>{f.name}</div>
                    <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.6 }}>
                All three feeds share the same filter bar. So you can be on the Explore feed but filter it down to just "Albums in Jazz from the 2010s" — or switch to Following and filter for "Movies, Horror, Hidden Gems." The filter state persists as you switch tabs.
              </p>
            </Section>
          </div>
        )}

        {/* ─── TECH ─── */}
        {activeTab === "tech" && (
          <div>
            <Section title="Technical Considerations">
              {[
                { title: "Metadata APIs", color: COLORS.accent, content: "Spotify API for songs/albums, TMDB for movies/shows, Open Library or Google Books API for books, IGDB for games, Podcast Index for podcasts. Auto-fill title, artist, cover art, genre, release year on post creation." },
                { title: "Graph Database", color: COLORS.purple, content: "The influence graph is a natural fit for a graph database like Neo4j or Amazon Neptune. Nodes = users, edges = put-ons and reposts. Queries like 'trace origin of this rec' or 'show my 3-degree network' become simple graph traversals." },
                { title: "Recommendation Engine", color: COLORS.green, content: "The 'For You' feed can use collaborative filtering — users with similar rec histories get surfaced each other's posts. Combine with content-based filtering (genre, era, media type) for the taste profile. Start simple, get sophisticated." },
                { title: "Real-Time", color: COLORS.blue, content: "WebSockets for live put-on notifications and feed updates. Push notifications when someone you tagged checks out your rec and gives it a 🔥." },
                { title: "Mobile-First", color: COLORS.pink, content: "React Native or Flutter for cross-platform. The graph visualization can use D3.js force-directed layout (web) or custom Canvas rendering (native). Keep the post creation flow to 3 taps max." },
                { title: "Scaling the Graph", color: COLORS.accent, content: "Graph viz gets expensive at scale. Pre-compute influence metrics (degree centrality, reach) in batch jobs. Render the interactive graph on-demand for profile views, serve cached snapshots elsewhere. Limit graph depth to 3-4 degrees for performance." },
              ].map(t => (
                <div key={t.title} style={{
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 14,
                  padding: 18,
                  marginBottom: 12,
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: t.color, marginBottom: 8 }}>{t.title}</div>
                  <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6 }}>{t.content}</div>
                </div>
              ))}
            </Section>

            <Section title="MVP Scope (v1)">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: COLORS.green + "10", border: `1px solid ${COLORS.green}30`, borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.green, marginBottom: 10 }}>✅ MVP (Ship First)</div>
                  {["Post a rec (song, movie, book, show, album)", "Put Me On + Repost interactions", "Following feed (chronological)", "Basic profile with rec history", "Search by title/user", "Media type filter", "Spotify + TMDB integration"].map((i, idx) => (
                    <div key={idx} style={{ fontSize: 12, color: COLORS.textMuted, padding: "4px 0" }}>• {i}</div>
                  ))}
                </div>
                <div style={{ background: COLORS.purple + "10", border: `1px solid ${COLORS.purple}30`, borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.purple, marginBottom: 10 }}>🔮 V2+ (Build Next)</div>
                  {["For You + Explore feeds", "Influence Graph visualization", "Deep insights dashboard", "Genre + era filters", "Year in Review", "Celebrity/verified accounts", "Origin tracing", "Podcasts + games support"].map((i, idx) => (
                    <div key={idx} style={{ fontSize: 12, color: COLORS.textMuted, padding: "4px 0" }}>• {i}</div>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        )}
      </div>
    </div>
  );
}