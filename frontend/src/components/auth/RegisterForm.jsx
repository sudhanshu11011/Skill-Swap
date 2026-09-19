import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const features = [
  ["+", "Learn Anything", "Discover new skills from amazing people."],
  ["+", "Teach & Earn Respect", "Share your knowledge and help others grow."],
  ["+", "Build Connections", "Connect, collaborate and grow together."],
];

export default function RegisterForm() {
  const { signup } = useAuthContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", password: "", confirm: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const { data } = await signup.mutateAsync({
        fullName: form.fullName,
        email: form.email,
        password: form.password,
      });
      if (data?.success) navigate("/onboarding");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to create account.");
    }
  };

  const input = (name, type, placeholder) => (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={form[name]}
      onChange={change}
      required
      style={s.input}
    />
  );

  return (
    <div style={s.page}>
      <section style={s.left}>
        <img src="/skillswaplogo.png" alt="SkillSwap" style={s.logo} />
        <div style={s.leftContent}>
          <h1 style={s.heading}>Exchange Skills.<br />Build Opportunities.</h1>
          <p style={s.text}>SkillSwap connects learners and teachers around the world to share knowledge, grow together, and achieve more.</p>

          {features.map(([icon, title, text]) => (
            <div style={s.feature} key={title}>
              <b style={s.icon}>{icon}</b>
              <div><b>{title}</b><p style={s.small}>{text}</p></div>
            </div>
          ))}

          <img src="/heroimage.png" alt="" style={s.hero} />
        </div>
      </section>

      <section style={s.right}>
        <div style={s.top}>English <button style={s.theme}>◐</button></div>

        <main style={s.form}>
          <h2 style={s.title}>Create Account</h2>
          <p style={s.text}>Join SkillSwap and start exchanging skills.</p>

          <form onSubmit={submit}>
            <label>Full Name</label>
            {input("fullName", "text", "Enter your full name")}

            <label>Email Address</label>
            {input("email", "email", "Enter your email")}

            <label>Password</label>
            <div style={s.password}>
              {input("password", show ? "text" : "password", "Create a password")}
              <button type="button" onClick={() => setShow(!show)} style={s.show}>
                {show ? "Hide" : "Show"}
              </button>
            </div>

            <label>Confirm Password</label>
            {input("confirm", show ? "text" : "password", "Confirm your password")}

            {error && <p style={s.error}>{error}</p>}

            <button disabled={signup.isPending} style={s.submit}>
              {signup.isPending ? "Creating Account..." : "Create Account →"}
            </button>
          </form>

          <p style={s.or}>or continue with</p>
          <button style={s.social}>Google&nbsp;&nbsp; Continue with Google</button>
          <button style={s.social}>GitHub&nbsp;&nbsp; Continue with GitHub</button>

          <p style={s.login}>Already have an account? <Link to="/login" style={s.link}>Login</Link></p>
        </main>

        <footer style={s.footer}>Your data is secure and encrypted</footer>
      </section>
    </div>
  );
}

const s = {
  page: { minHeight: "100vh", display: "grid", gridTemplateColumns: "50% 50%", fontFamily: "Arial,sans-serif", color: "#071d49" },
  left: { background: "#f0ebff", padding: "40px 10%", overflow: "hidden" },
  logo: { width: 105, height: 105, objectFit: "contain" },
  leftContent: { maxWidth: 600, margin: "65px auto 0" },
  heading: { fontSize: 36, lineHeight: 1.15, marginBottom: 24 },
  text: { color: "#49628b", lineHeight: 1.6 },
  feature: { display: "flex", gap: 16, alignItems: "center", margin: "22px 0" },
  icon: { width: 46, height: 46, borderRadius: 12, background: "#fff", display: "grid", placeItems: "center", color: "#5b20e5", boxShadow: "0 4px 12px #0001" },
  small: { margin: "4px 0", color: "#49628b" },
  hero: { width: "100%", maxWidth: 430, display: "block", margin: "30px auto 0" },
  right: { minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" },
  top: { display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 18, padding: "30px 7%" },
  theme: { width: 42, height: 42, borderRadius: "50%", border: "1px solid #ddd", background: "#fff", color: "#5b20e5" },
  form: { width: "70%", maxWidth: 500, margin: "35px auto" },
  title: { fontSize: 32, marginBottom: 8 },
  input: { width: "100%", boxSizing: "border-box", padding: 14, border: "1px solid #d8dce5", borderRadius: 7, margin: "8px 0 16px", outline: "none" },
  password: { display: "flex", border: "1px solid #d8dce5", borderRadius: 7, margin: "8px 0 16px" },
  show: { border: 0, background: "#fff", padding: "0 14px", color: "#68758c" },
  submit: { width: "100%", border: 0, borderRadius: 7, padding: 15, marginTop: 8, background: "linear-gradient(90deg,#5420df,#7627e8)", color: "#fff", fontWeight: 600 },
  error: { color: "#c62828", fontSize: 14 },
  or: { textAlign: "center", color: "#68758c", margin: "26px 0 18px" },
  social: { width: "100%", padding: 13, background: "#fff", border: "1px solid #d8dce5", borderRadius: 7, marginBottom: 12 },
  login: { textAlign: "center", marginTop: 28, color: "#53627e" },
  link: { color: "#5b20e5", textDecoration: "none" },
  footer: { marginTop: "auto", padding: 20, textAlign: "center", background: "#fafaff", color: "#68758c", fontSize: 13 },
};