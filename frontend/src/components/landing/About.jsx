import { useState } from "react";
import { ArrowRightLeft, BookOpen, Check, Users } from "lucide-react";

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
        <div style={s.icon}><Icon size={20} /></div>
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

  const left = reversed ? skills[1] : skills[0];
  const right = reversed ? skills[0] : skills[1];

  return (
    <section id="about" style={s.section}>
      <div style={s.intro}>
        <span style={s.label}>ABOUT SKILLSWAP</span>

        <h2 style={s.heading}>
          Turn What You Know Into
          <br />
          <span>What Someone Needs.</span>
        </h2>

        <p style={s.description}>
          SkillSwap connects people who want to teach and learn from each
          other. Everyone brings something valuable to the community.
        </p>
      </div>

      <div style={s.exchange}>
        <SkillCard data={left} />

        <button
          type="button"
          onClick={() => setReversed(!reversed)}
          style={s.swap}
          title="Exchange skills"
        >
          <ArrowRightLeft size={21} />
        </button>

        <SkillCard data={right} />
      </div>

      <div style={s.points}>
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
    padding: "100px 8%",
    background: "#f8f9ff",
    color: "#101a31",
    fontFamily: "Arial,sans-serif",
  },

  intro: {
    maxWidth: 700,
    margin: "0 auto 55px",
    textAlign: "center",
  },

  label: {
    color: "#5b20e5",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.5,
  },

  heading: {
    fontSize: 44,
    lineHeight: 1.15,
    margin: "16px 0",
  },

  description: {
    maxWidth: 620,
    margin: "0 auto",
    color: "#657493",
    fontSize: 16,
    lineHeight: 1.7,
  },

  exchange: {
    maxWidth: 980,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },

  card: {
    flex: 1,
    minHeight: 190,
    padding: 28,
    border: "1px solid #e6e3f2",
    borderRadius: 18,
    background: "#fff",
    boxShadow: "0 15px 35px #4b20a010",
  },

  cardHead: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: "#68758c",
    fontSize: 13,
    fontWeight: 600,
  },

  icon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "#f0eaff",
    color: "#5b20e5",
  },

  skill: {
    margin: "22px 0 7px",
    fontSize: 23,
  },

  tools: {
    margin: 0,
    color: "#68758c",
  },

  tags: {
    display: "flex",
    gap: 9,
    marginTop: 22,
  },

  tag: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "6px 9px",
    borderRadius: 8,
    background: "#f7f6fb",
    color: "#68758c",
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
    boxShadow: "0 8px 20px #5b20e540",
  },

  points: {
    maxWidth: 980,
    margin: "55px auto 0",
    paddingTop: 30,
    borderTop: "1px solid #e5e5ec",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 30,
  },

  point: {
    padding: "0 10px",
  },

  pointText: {
    color: "#68758c",
    fontSize: 13,
    lineHeight: 1.5,
  },
};