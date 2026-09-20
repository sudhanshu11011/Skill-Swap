import { useState } from "react";
import {
  BookOpen,
  Handshake,
  MessageCircle,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import useResponsive from "../../hooks/useResponsive";

const features = [
  {
    Icon: Search,
    title: "Find Your Match",
    text: "Discover people whose skills complement what you want to learn.",
    detail:
      "Explore potential skill matches based on what you can teach and what you want to learn.",
  },
  {
    Icon: BookOpen,
    title: "Learn & Teach",
    text: "Exchange practical knowledge instead of simply consuming content.",
    detail:
      "Turn your existing knowledge into an opportunity to help someone while developing a new skill yourself.",
  },
  {
    Icon: Handshake,
    title: "Skill Connections",
    text: "Build meaningful connections around shared skills and interests.",
    detail:
      "Connect with people who share your learning goals and create opportunities for knowledge exchange.",
  },
  {
    Icon: MessageCircle,
    title: "Real-Time Chat",
    text: "Communicate with your connections directly.",
    detail:
      "Once connected, communicate and coordinate your skill exchange through real-time conversations.",
  },
  {
    Icon: Users,
    title: "Community",
    text: "Become part of a community built around mutual learning.",
    detail:
      "Meet people with different experiences and create a network centered on learning and contribution.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Platform",
    text: "Use SkillSwap in a secure environment.",
    detail:
      "Authentication and protected application areas help keep your account and interactions secure.",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const { isMobile, isSmallMobile } = useResponsive();

  const feature = features[active];
  const ActiveIcon = feature.Icon;

  return (
    <section
      id="features"
      style={{
        ...s.section,
        padding: isSmallMobile
          ? "70px 18px"
          : isMobile
            ? "80px 28px"
            : "105px 6%",
      }}
    >
      <div
        style={{
          ...s.heading,
          marginBottom: isMobile ? 40 : 58,
        }}
      >
        <span style={s.label}>FEATURES</span>

        <h2
          style={{
            ...s.title,
            fontSize: isSmallMobile ? 31 : isMobile ? 38 : 48,
          }}
        >
          Everything You Need to
          <br />
          <span>Exchange Skills.</span>
        </h2>

        <p style={s.description}>
          SkillSwap brings discovery, learning, communication and connection
          together in one platform.
        </p>
      </div>

      <div
        style={{
          ...s.content,
          gridTemplateColumns: isMobile ? "1fr" : "1.08fr .92fr",
          gap: isMobile ? 22 : 32,
        }}
      >
        <div
          style={{
            ...s.list,
            gridTemplateColumns: isSmallMobile ? "1fr" : "1fr 1fr",
          }}
        >
          {features.map(({ Icon, title, text }, index) => {
            const selected = active === index;
            const isHovered = hovered === index;

            return (
              <button
                key={title}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  ...s.item,
                  ...(selected ? s.active : {}),
                  ...(isHovered && !selected ? s.hovered : {}),
                  padding: isSmallMobile ? 15 : 18,
                }}
              >
                <span
                  style={{
                    ...s.itemIcon,
                    ...(selected ? s.activeIcon : {}),
                  }}
                >
                  <Icon size={19} />
                </span>

                <span style={s.itemText}>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div
          style={{
            ...s.detail,
            minHeight: isMobile ? 300 : 360,
            padding: isSmallMobile ? 25 : isMobile ? 30 : 38,
          }}
        >
          <div style={s.detailTop}>
            <div style={s.detailIcon}>
              <ActiveIcon size={28} />
            </div>

            <span style={s.number}>
              0{active + 1} / 0{features.length}
            </span>
          </div>

          <h3
            style={{
              ...s.detailTitle,
              fontSize: isSmallMobile ? 25 : 30,
            }}
          >
            {feature.title}
          </h3>

          <p style={s.detailText}>{feature.detail}</p>

          <div style={s.line} />
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    background: "var(--page-bg)",
    color: "var(--text)",
    fontFamily:
      "Inter, Segoe UI, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },

  heading: {
    maxWidth: 760,
    margin: 0,
    textAlign: "left",
  },

  label: {
    color: "var(--primary)",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.5,
  },

  title: {
    margin: "16px 0 18px",
    color: "var(--text)",
    lineHeight: 1.1,
    fontWeight: 800,
    letterSpacing: "-1.8px",
  },

  description: {
    maxWidth: 620,
    margin: 0,
    color: "var(--muted)",
    fontSize: 16,
    lineHeight: 1.7,
  },

  content: {
    maxWidth: 1050,
    margin: 0,
    display: "grid",
    alignItems: "stretch",
  },

  list: {
    display: "grid",
    gap: 12,
  },

  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: 13,
    width: "100%",
    border: 0,
    borderRadius: 16,
    background: "var(--surface)",
    color: "var(--text)",
    textAlign: "left",
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(40,25,80,.07)",
    transition:
      "transform .25s ease, background .25s ease, box-shadow .25s ease",
  },

  hovered: {
    transform: "translateY(-5px)",
    boxShadow: "0 16px 32px rgba(40,25,80,.12)",
  },

  active: {
    background: "var(--soft)",
    boxShadow: "0 14px 32px rgba(91,32,229,.14)",
    transform: "translateY(-3px)",
  },

  itemIcon: {
    minWidth: 42,
    height: 42,
    display: "grid",
    placeItems: "center",
    borderRadius: 11,
    background: "var(--soft)",
    color: "var(--primary)",
    transition: "transform .25s ease, background .25s ease, color .25s ease",
  },

  activeIcon: {
    background: "var(--primary)",
    color: "#fff",
    transform: "scale(1.05)",
  },

  itemText: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    minWidth: 0,
  },

  itemSmall: {
    color: "var(--muted)",
    lineHeight: 1.45,
  },

  detail: {
    position: "relative",
    boxSizing: "border-box",
    overflow: "hidden",
    borderRadius: 22,
    background: "var(--soft)",
    boxShadow: "0 18px 40px rgba(40,25,80,.09)",
  },

  detailTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  detailIcon: {
    width: 62,
    height: 62,
    display: "grid",
    placeItems: "center",
    borderRadius: 17,
    background: "var(--primary)",
    color: "#fff",
    boxShadow: "0 10px 25px rgba(91,32,229,.22)",
  },

  number: {
    color: "var(--primary)",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
  },

  detailTitle: {
    margin: "38px 0 14px",
    color: "var(--text)",
    lineHeight: 1.15,
    letterSpacing: "-.5px",
  },

  detailText: {
    maxWidth: 390,
    margin: 0,
    color: "var(--muted)",
    lineHeight: 1.75,
    fontSize: 15,
  },

  line: {
    width: "100%",
    height: 1,
    marginTop: 40,
    background: "var(--border)",
  },
};