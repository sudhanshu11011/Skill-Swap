import { useState } from "react";
import { ArrowRightLeft, BookOpen, Check, Users } from "lucide-react";
import useResponsive from "../../hooks/useResponsive";

const skills = [
  {
    title: "Skills You Have",
    skill: "Web Development",
    tools: "React • Node.js • MongoDB",
    Icon: BookOpen,
    tags: ["Experience", "Knowledge"],
  },
  {
    title: "Skills You Want",
    skill: "UI/UX Design",
    tools: "Figma • Adobe XD",
    Icon: Users,
    tags: ["Curiosity", "Growth"],
  },
];

function SkillCard({ data }) {
  const { title, skill, tools, Icon, tags } = data;

  return (
    <div style={s.card}>
      <div style={s.cardHead}>
        <div style={s.icon}>
          <Icon size={20} />
        </div>
        <span>{title}</span>
      </div>

      <h3 style={s.skill}>{skill}</h3>
      <p style={s.tools}>{tools}</p>

      <div style={s.tags}>
        {tags.map((tag) => (
          <span key={tag} style={s.tag}>
            <Check size={12} />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [reversed, setReversed] = useState(false);
  const { isMobile, isSmallMobile } = useResponsive();

  const left = reversed ? skills[1] : skills[0];
  const right = reversed ? skills[0] : skills[1];

  return (
    <section
      id="about"
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
          ...s.intro,
          marginBottom: isMobile ? 42 : 58,
        }}
      >
        <span style={s.label}>ABOUT SKILLSWAP</span>

        <h2
          style={{
            ...s.heading,
            fontSize: isSmallMobile ? 31 : isMobile ? 38 : 48,
          }}
        >
          Turn What You Know Into
          <br />
          <span>What Someone Needs.</span>
        </h2>

        <p style={s.description}>
          SkillSwap creates a simple way for people to exchange knowledge,
          discover new abilities, and grow together.
        </p>
      </div>

      <div
        style={{
          ...s.exchange,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 18 : 25,
        }}
      >
        <SkillCard data={left} />

        <button
          type="button"
          onClick={() => setReversed(!reversed)}
          style={{
            ...s.swap,
            transform: isMobile ? "rotate(90deg)" : "none",
          }}
          title="Exchange skills"
          aria-label="Exchange skills"
        >
          <ArrowRightLeft size={21} />
        </button>

        <SkillCard data={right} />
      </div>

      <div
        style={{
          ...s.points,
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? 18 : 30,
          marginTop: isMobile ? 42 : 58,
        }}
      >
        {[
          ["Learn", "Discover practical knowledge from real people."],
          ["Teach", "Share your expertise and help someone grow."],
          ["Connect", "Build meaningful relationships through skills."],
        ].map(([title, text]) => (
          <div key={title} style={s.point}>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        ))}
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
    boxSizing: "border-box",
  },

  intro: {
    maxWidth: 760,
    margin: "0",
    textAlign: "left",
  },

  label: {
    display: "inline-block",
    color: "var(--primary)",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.5,
  },

  heading: {
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

  exchange: {
    maxWidth: 1050,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  card: {
    width: "100%",
    minHeight: 190,
    padding: 28,
    boxSizing: "border-box",
    border: "1px solid var(--border)",
    borderRadius: 18,
    background: "var(--surface)",
    boxShadow: "0 15px 35px rgba(70,40,130,.08)",
    transition: "transform .25s ease, border-color .25s ease",
  },

  cardHead: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: "var(--muted)",
    fontSize: 13,
    fontWeight: 600,
  },

  icon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "var(--soft)",
    color: "var(--primary)",
  },

  skill: {
    margin: "22px 0 7px",
    color: "var(--text)",
    fontSize: 23,
  },

  tools: {
    margin: 0,
    color: "var(--muted)",
    overflowWrap: "anywhere",
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 9,
    marginTop: 22,
  },

  tag: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "6px 9px",
    borderRadius: 8,
    background: "var(--soft)",
    color: "var(--muted)",
    fontSize: 11,
  },

  swap: {
    width: 52,
    height: 52,
    flexShrink: 0,
    border: 0,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#5b20e5,#7627e8)",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(91,32,229,.25)",
    transition: "transform .25s ease, box-shadow .25s ease",
  },

  points: {
    maxWidth: 1050,
    paddingTop: 32,
    borderTop: "1px solid var(--border)",
    display: "grid",
  },

  point: {
    padding: "0 10px",
    color: "var(--text)",
  },
};