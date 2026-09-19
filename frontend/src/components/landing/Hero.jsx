export default function Hero() {
  return (
    <section id="home" style={s.hero}>
      <div style={s.content}>
        <span style={s.badge}>Join a community of learners and teachers</span>

        <h1 style={s.title}>
          Exchange Skills.
          <br />
          <span style={{ color: "#5b20e5" }}>Build Opportunities.</span>
        </h1>

        <p style={s.text}>
          SkillSwap connects people who want to teach and learn skills from
          each other. No money, just knowledge and growth.
        </p>

        <div style={s.buttons}>
          <a href="/register" style={s.primary}>Get Started for Free&nbsp; →</a>
          <button style={s.secondary}>▶&nbsp; Watch Video</button>
        </div>

        <p style={s.trusted}>
          <span style={s.avatars}>● ● ● ● ●</span>
          Trusted by 5,000+ learners worldwide
        </p>
      </div>

      <div style={s.visual}>
        <img src="/heroimage.png" alt="SkillSwap community" style={s.image} />
      </div>
    </section>
  );
}

const s = {
  hero: {
    minHeight: "570px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    padding: "35px 6%",
    background: "linear-gradient(135deg,#fff,#f8f9ff)",
    fontFamily: "Arial,sans-serif",
    overflow: "hidden",
  },
  content: { maxWidth: 600 },
  badge: {
    display: "inline-block",
    padding: "9px 16px",
    borderRadius: 20,
    background: "#f1eaff",
    color: "#5420df",
    fontSize: 14,
  },
  title: {
    fontSize: 58,
    lineHeight: 1.08,
    margin: "28px 0 22px",
    color: "#101a31",
    fontWeight: 700,
  },
  titleSpan: { color: "#5b20e5" },
  text: {
    maxWidth: 500,
    fontSize: 18,
    lineHeight: 1.65,
    color: "#52617c",
  },
  buttons: { display: "flex", gap: 16, marginTop: 30 },
  primary: {
    padding: "16px 27px",
    borderRadius: 28,
    background: "linear-gradient(90deg,#5b20e5,#7627e8)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  },
  secondary: {
    padding: "15px 27px",
    borderRadius: 28,
    border: "1px solid #ddd",
    background: "#fff",
    color: "#172033",
  },
  trusted: { marginTop: 32, color: "#52617c" },
  avatars: { color: "#5b20e5", marginRight: 12 },
  visual: { textAlign: "center" },
  image: { width: "100%", maxWidth: 650 },
};