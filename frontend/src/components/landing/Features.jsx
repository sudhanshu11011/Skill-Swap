import { useState } from "react";
import {
  BookOpen,
  Handshake,
  MessageCircle,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    Icon: Search,
    title: "Find Your Match",
    text: "Discover people whose skills complement what you want to learn.",
    detail: "Explore potential skill matches based on what you can teach and what you want to learn.",
  },
  {
    Icon: BookOpen,
    title: "Learn & Teach",
    text: "Exchange practical knowledge instead of simply consuming content.",
    detail: "Turn your existing knowledge into an opportunity to help someone while developing a new skill yourself.",
  },
  {
    Icon: Handshake,
    title: "Skill Connections",
    text: "Build meaningful connections around shared skills and interests.",
    detail: "Connect with people who share your learning goals and create opportunities for knowledge exchange.",
  },
  {
    Icon: MessageCircle,
    title: "Real-Time Chat",
    text: "Communicate with your connections directly.",
    detail: "Once connected, communicate and coordinate your skill exchange through real-time conversations.",
  },
  {
    Icon: Users,
    title: "Community",
    text: "Become part of a community built around mutual learning.",
    detail: "Meet people with different experiences and create a network centered on learning and contribution.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Platform",
    text: "Use SkillSwap in a secure environment.",
    detail: "Authentication and protected application areas help keep your account and interactions secure.",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const feature = features[active];
  const Icon = feature.Icon;

  return (
    <section id="features" style={s.section}>
      <div style={s.heading}>
        <span style={s.label}>FEATURES</span>
        <h2>Everything You Need to<br /><span>Exchange Skills.</span></h2>
        <p>
          SkillSwap brings discovery, learning, communication and connection
          together in one platform.
        </p>
      </div>

      <div style={s.content}>
        <div style={s.list}>
          {features.map(({ Icon, title, text }, index) => (
            <button
              key={title}
              onClick={() => setActive(index)}
              style={{ ...s.item, ...(active === index ? s.active : {}) }}
            >
              <span style={{ ...s.itemIcon, ...(active === index ? s.activeIcon : {}) }}>
                <Icon size={20} />
              </span>

              <span style={s.itemText}>
                <strong>{title}</strong>
                <small>{text}</small>
              </span>
            </button>
          ))}
        </div>

        <div style={s.detail}>
          <div style={s.detailIcon}>
            <Icon size={30} />
          </div>

          <span style={s.number}>0{active + 1}</span>
          <h3>{feature.title}</h3>
          <p>{feature.detail}</p>

          <div style={s.line} />

          <span style={s.indicator}>
            {active + 1} / {features.length}
          </span>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    padding: "105px 8%",
    background: "#fff",
    color: "#101a31",
    fontFamily: "Arial,sans-serif",
  },
  heading: {
    maxWidth: 680,
    margin: "0 auto 60px",
    textAlign: "center",
  },
  label: {
    color: "#5b20e5",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.5,
  },
  headingTitle: {
    fontSize: 44,
    lineHeight: 1.15,
    margin: "16px 0",
  },
  headingText: {
    color: "#657493",
    lineHeight: 1.7,
    fontSize: 16,
  },
  content: {
    maxWidth: 1050,
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1.1fr .9fr",
    gap: 35,
    alignItems: "stretch",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    padding: 20,
    border: "1px solid #e8e7ef",
    borderRadius: 14,
    background: "#fff",
    textAlign: "left",
    cursor: "pointer",
    color: "#101a31",
  },
  active: {
    borderColor: "#cfc0ff",
    background: "#f7f4ff",
    boxShadow: "0 8px 25px #5b20e512",
  },
  itemIcon: {
    minWidth: 42,
    height: 42,
    borderRadius: 11,
    display: "grid",
    placeItems: "center",
    background: "#f1eaff",
    color: "#5b20e5",
  },
  activeIcon: {
    background: "#5b20e5",
    color: "#fff",
  },
  itemText: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  itemSmall: {
    color: "#68758c",
    lineHeight: 1.4,
  },
  detail: {
    position: "relative",
    minHeight: 360,
    padding: 40,
    borderRadius: 22,
    background: "linear-gradient(145deg,#f2edff,#faf9ff)",
    overflow: "hidden",
  },
  detailIcon: {
    width: 64,
    height: 64,
    borderRadius: 18,
    display: "grid",
    placeItems: "center",
    background: "#5b20e5",
    color: "#fff",
    marginBottom: 45,
  },
  number: {
    color: "#b9a8ee",
    fontSize: 13,
    fontWeight: 700,
  },
  detailTitle: {
    fontSize: 30,
    margin: "10px 0 15px",
  },
  detailText: {
    maxWidth: 390,
    color: "#657493",
    lineHeight: 1.7,
  },
  line: {
    width: "100%",
    height: 1,
    background: "#ded7f2",
    marginTop: 45,
  },
  indicator: {
    display: "block",
    marginTop: 15,
    color: "#5b20e5",
    fontSize: 12,
    fontWeight: 600,
  },
};