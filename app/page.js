"use client";

import { useEffect, useMemo, useState } from "react";

const creators = [
  { name: "Zhong", color: "#ff3b30" },
  { name: "Justinbie", color: "#8e8e93" },
  { name: "RealDon", color: "#8e8e93" },
  { name: "Cz_binan", color: "#8e8e93" },
  { name: "Coldman", color: "#ff9500" },
  { name: "Redbullm", color: "#ef4444" },
  { name: "Internet", color: "#f97316" },
  { name: "MrPlonk", color: "#22c55e" },
  { name: "Lawbymi", color: "#3b82f6" },
  { name: "Valkyrae", color: "#a855f7" },
  { name: "Notsrr7", color: "#f59e0b" },
  { name: "Ibra_offi", color: "#60a5fa" },
  { name: "CelineDe", color: "#f43f5e" },
  { name: "Tshowsp", color: "#10b981" },
  { name: "David_o", color: "#f97316" },
];

const sidebarLinks = [
  { label: "Home", icon: "🏠" },
  { label: "Platforms", icon: "🗂️", children: ["YouTube", "X.com"] },
  { label: "Order", icon: "🧾" },
  { label: "Profile", icon: "👤" },
];

const banners = [
  {
    title: "PURPLE K IS POWERING UP",
    subtitle: "MAINNET IS HERE",
  },
  {
    title: "RITUAL BUILDERS WEEK",
    subtitle: "PREDICTION MARKET LIVE",
  },
  {
    title: "NEW CREATOR DROPS",
    subtitle: "FRESH COMMUNITY BETS",
  },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = useMemo(() => banners[activeBanner], [activeBanner]);

  return (
    <main style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>
      <div style={styles.layout}>
        {!isMobile && (
          <aside style={styles.sidebar}>
            <div style={styles.brand}>
              <div style={styles.brandMark}>K</div>
              <div>
                <div style={styles.brandName}>Kizzy</div>
                <div style={styles.brandSub}>Ritual bets</div>
              </div>
            </div>

            <nav style={styles.nav}>
              {sidebarLinks.map((item, index) => (
                <div key={item.label} style={{ marginBottom: 12 }}>
                  <div style={{
                    ...styles.navItem,
                    ...(index === 0 ? styles.navItemActive : {}),
                  }}>
                    <span style={styles.navIcon}>{item.icon}</span>
                    <span>{item.label}</span>
                    {item.children && <span style={{ marginLeft: "auto", opacity: 0.7 }}>⌄</span>}
                  </div>
                  {item.children && (
                    <div style={styles.navChildren}>
                      {item.children.map((child) => (
                        <div key={child} style={styles.navChild}>
                          {child}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>
        )}

        <div style={styles.content}>
          <header style={styles.topBar}>
            {isMobile && (
              <div style={styles.brand}>
                <div style={styles.brandMark}>K</div>
                <div>
                  <div style={styles.brandName}>Kizzy</div>
                  <div style={styles.brandSub}>Ritual bets</div>
                </div>
              </div>
            )}
            <button style={styles.loginButton}>Log in</button>
          </header>

          <section style={styles.banner}>
            <div>
              <div style={styles.bannerTitle}>{active.title}</div>
              <div style={styles.bannerSubtitle}>{active.subtitle}</div>
            </div>
            <div style={styles.bannerIllustration}>
              <div style={styles.bannerOrb} />
              <div style={styles.bannerOrbSmall} />
            </div>
          </section>

          <div style={styles.bannerDots}>
            {banners.map((_, i) => (
              <span key={i} style={{
                ...styles.dot,
                opacity: i === activeBanner ? 1 : 0.4,
              }} />
            ))}
          </div>

          <section style={styles.section}>
            <div style={styles.sectionHeader}>Creators</div>
            <div style={styles.creatorRow}>
              {creators.map((creator) => (
                <div key={creator.name} style={styles.creatorCard}>
                  <div style={{
                    ...styles.creatorAvatar,
                    background: creator.color,
                  }}>
                    {creator.name.slice(0, 1).toUpperCase()}
                  </div>
                  <div style={styles.creatorName}>{creator.name}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={styles.section}>
            <div style={styles.sectionHeader}>Popular Bets</div>
            <div style={styles.placeholderGrid}>
              {[...Array(6)].map((_, i) => (
                <div key={i} style={styles.placeholderCard}>
                  <div style={styles.placeholderTitle}>Prediction {i + 1}</div>
                  <div style={styles.placeholderMeta}>Live · 1.2k votes</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    color: "#f5f5f5",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  layout: {
    display: "flex",
    minHeight: "100vh",
  },
  sidebar: {
    width: 260,
    background: "#0f0f10",
    borderRight: "1px solid #222",
    padding: "24px 18px",
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  brandMark: {
    width: 40,
    height: 40,
    borderRadius: 14,
    background: "linear-gradient(135deg, #8b5cf6, #a855f7)",
    display: "grid",
    placeItems: "center",
    fontWeight: 800,
    fontSize: 18,
  },
  brandName: {
    fontWeight: 700,
    fontSize: 18,
  },
  brandSub: {
    fontSize: 12,
    color: "#9ca3af",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 14,
    color: "#d1d5db",
    cursor: "pointer",
    background: "transparent",
  },
  navItemActive: {
    background: "linear-gradient(90deg, rgba(139,92,246,0.35), rgba(139,92,246,0.1))",
    color: "#fff",
  },
  navIcon: {
    fontSize: 16,
  },
  navChildren: {
    paddingLeft: 32,
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  navChild: {
    fontSize: 13,
    color: "#9ca3af",
  },
  content: {
    flex: 1,
    padding: "24px 32px",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  loginButton: {
    padding: "10px 22px",
    borderRadius: 14,
    border: "none",
    background: "#8b5cf6",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
  banner: {
    minHeight: 200,
    borderRadius: 24,
    background: "linear-gradient(135deg, #4c1d95 0%, #1f2937 55%, #111827 100%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "32px 36px",
    position: "relative",
    overflow: "hidden",
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: 0.5,
  },
  bannerSubtitle: {
    fontSize: 40,
    fontWeight: 900,
    color: "#fbbf24",
    marginTop: 6,
  },
  bannerIllustration: {
    position: "relative",
    width: 160,
    height: 120,
  },
  bannerOrb: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: "50%",
    right: 0,
    top: 0,
    background: "radial-gradient(circle, rgba(168,85,247,0.9), rgba(88,28,135,0.4))",
  },
  bannerOrbSmall: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: "50%",
    right: 80,
    bottom: -10,
    background: "radial-gradient(circle, rgba(59,130,246,0.9), rgba(30,64,175,0.4))",
  },
  bannerDots: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#d1d5db",
  },
  section: {
    marginTop: 28,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 14,
  },
  creatorRow: {
    display: "flex",
    gap: 16,
    overflowX: "auto",
    paddingBottom: 8,
  },
  creatorCard: {
    minWidth: 90,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  creatorAvatar: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    border: "2px solid #ef4444",
    display: "grid",
    placeItems: "center",
    fontWeight: 700,
    color: "#fff",
  },
  creatorName: {
    fontSize: 12,
    color: "#d1d5db",
    textAlign: "center",
  },
  placeholderGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  placeholderCard: {
    background: "#111827",
    borderRadius: 16,
    padding: 18,
    border: "1px solid #1f2937",
  },
  placeholderTitle: {
    fontWeight: 700,
    marginBottom: 8,
  },
  placeholderMeta: {
    fontSize: 12,
    color: "#9ca3af",
  },
};
