import { useState } from "react";
import {
  ArrowLeft, ArrowRight, BookOpen, Camera, Check, Clock3,
  Globe, MapPin, Moon, Sun, UserRound, Users
} from "lucide-react";
import { useAuthContext } from "../../context/AuthContext";

const steps = ["About You", "Your Skills", "Preferences", "Almost Done"];

const base = {
  input: { border: "1px solid #ddd", borderRadius: 8, padding: "12px 14px", outline: 0, width: "100%", boxSizing: "border-box" },
  btn: { border: 0, borderRadius: 8, padding: "14px 25px", cursor: "pointer" }
};

export default function OnboardingForm() {
  const { onboarding } = useAuthContext();
  const [step, setStep] = useState(1);
  const [d, setD] = useState({
    fullName: "", bio: "", skillYouHave: "", skillYouWant: "",
    language: "", location: "", availability: "", connection: ""
  });

  const set = (key, value) => setD({ ...d, [key]: value });
  const next = () => setStep(Math.min(4, step + 1));
  const back = () => setStep(Math.max(1, step - 1));

  const submit = () => onboarding.mutate({
    fullName: d.fullName,
    bio: d.bio,
    skillYouHave: d.skillYouHave,
    skillYouWant: d.skillYouWant,
    language: d.language
  });

  return (
    <div style={x.page}>
      <aside style={x.side}>
        <img src="/skillswaplogo.png" alt="SkillSwap" style={{ width: 145 }} />
        <h1 style={x.sideTitle}>Let’s set up<br />your profile.</h1>
        <p>Tell the community about yourself and discover people who match your skills.</p>

        <div style={x.visual}>
          <UserRound size={42} />
          <BookOpen size={25} />
          <Users size={25} />
        </div>

        <small><Check size={15} /> Your information is safe with us.</small>
      </aside>

      <main style={x.main}>
        <div style={x.top}><Globe size={16} /> English <Sun size={16} /><Moon size={16} /></div>

        <div style={x.steps}>
          {steps.map((name, i) => (
            <div key={name} style={x.step}>
              <b style={{ ...x.num, ...(step > i ? x.active : {}) }}>
                {step > i + 1 ? <Check size={14} /> : i + 1}
              </b>
              <span>{name}</span>
            </div>
          ))}
        </div>

        <section style={x.form}>
          {step === 1 && (
            <>
              <h2>Tell us about yourself</h2>
              <p>Help the community know who you are.</p>
              <div style={x.photoRow}>
                <div style={x.photo}><Camera size={30} /><b>Upload Photo</b><small>JPG, PNG</small></div>
                <div>
                  <Field label="Full Name" value={d.fullName} placeholder="Enter your full name" icon={<UserRound size={16} />} onChange={v => set("fullName", v)} />
                  <Field label="Bio" value={d.bio} placeholder="Write a short bio..." area onChange={v => set("bio", v)} />
                </div>
              </div>
              <div style={x.grid}>
                <Select label="Location" icon={<MapPin size={16} />} value={d.location} options={["India", "Other"]} onChange={v => set("location", v)} />
                <Select label="Availability" icon={<Clock3 size={16} />} value={d.availability} options={["Weekdays", "Weekends", "Flexible"]} onChange={v => set("availability", v)} />
                <Select label="Connect" icon={<Users size={16} />} value={d.connection} options={["Online", "In Person", "Either"]} onChange={v => set("connection", v)} />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Your Skills</h2>
              <p>Tell us what you can teach and what you want to learn.</p>
              <Field label="Skills You Have" value={d.skillYouHave} placeholder="e.g. Web Development, Python" area onChange={v => set("skillYouHave", v)} />
              <Field label="Skills You Want to Learn" value={d.skillYouWant} placeholder="e.g. Machine Learning, Marketing" area onChange={v => set("skillYouWant", v)} />
            </>
          )}

          {step === 3 && (
            <>
              <h2>Your Preferences</h2>
              <p>Choose how you want to discover and connect with people.</p>
              <Select label="Preferred Language" icon={<Globe size={16} />} value={d.language} options={["English", "Hindi", "Other"]} onChange={v => set("language", v)} />
              <div style={x.grid}>
                {["Online", "In Person", "Either"].map(v => (
                  <button key={v} onClick={() => set("connection", v)}
                    style={{ ...base.btn, ...x.choice, ...(d.connection === v ? x.selected : {}) }}>
                    <Users size={20} /><b>{v}</b><small>Connect through {v.toLowerCase()} learning.</small>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2>Almost Done</h2>
              <p>Review your information before completing your profile.</p>
              <div style={x.review}>
                {Object.entries({
                  "Full Name": d.fullName,
                  Bio: d.bio,
                  "Skills You Have": d.skillYouHave,
                  "Skills You Want": d.skillYouWant,
                  Language: d.language
                }).map(([k, v]) => <div key={k}><b>{k}</b><span>{v || "Not provided"}</span></div>)}
              </div>
              <div style={x.complete}><Check size={18} /> Your profile is ready.</div>
            </>
          )}

          <div style={x.actions}>
            {step > 1 ? <button onClick={back} style={x.back}><ArrowLeft size={16} /> Back</button> : <span />}
            <button onClick={step === 4 ? submit : next} style={{ ...base.btn, ...x.next }}>
              {onboarding.isPending ? "Saving..." : step === 4 ? "Complete Profile" : "Continue"}
              {step === 4 ? <Check size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>

          <div style={x.progress}>Profile Setup Progress <b>{step * 25}%</b></div>
        </section>
      </main>
    </div>
  );
}

function Field({ label, value, placeholder, onChange, icon, area }) {
  return (
    <label style={x.field}>
      <b>{label}</b>
      <div style={x.wrap}>
        {icon}
        {area
          ? <textarea value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} style={x.textarea} />
          : <input value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} style={x.clean} />}
      </div>
    </label>
  );
}

function Select({ label, icon, value, options, onChange }) {
  return (
    <label style={x.field}>
      <b>{label}</b>
      <div style={x.wrap}>
        {icon}
        <select value={value} onChange={e => onChange(e.target.value)} style={x.clean}>
          <option value="">Select an option</option>
          {options.map(v => <option key={v}>{v}</option>)}
        </select>
      </div>
    </label>
  );
}

const x = {
  page: { minHeight: "100vh", display: "flex", fontFamily: "Arial,sans-serif", color: "#101b3d" },
  side: { width: "27%", padding: "45px 4%", boxSizing: "border-box", background: "linear-gradient(145deg,#faf9ff,#eee8ff)" },
  sideTitle: { fontSize: 32, lineHeight: 1.25, marginTop: 70 },
  visual: { height: 300, display: "flex", alignItems: "center", justifyContent: "space-around", color: "#6424df" },
  main: { flex: 1, padding: "30px 7%" },
  top: { display: "flex", justifyContent: "flex-end", gap: 12, alignItems: "center" },
  steps: { display: "flex", justifyContent: "space-between", margin: "40px 0" },
  step: { display: "grid", justifyItems: "center", gap: 8, color: "#667085", fontSize: 13 },
  num: { width: 35, height: 35, borderRadius: "50%", border: "2px solid #ddd", display: "grid", placeItems: "center" },
  active: { background: "#6022dc", color: "#fff", borderColor: "#6022dc" },
  form: { maxWidth: 950, margin: "auto" },
  photoRow: { display: "grid", gridTemplateColumns: "150px 1fr", gap: 30 },
  photo: { display: "grid", placeItems: "center", alignContent: "center", gap: 8, color: "#6424df" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 },
  field: { display: "grid", gap: 7, marginBottom: 18 },
  wrap: { display: "flex", alignItems: "center", gap: 8, ...base.input },
  clean: { border: 0, outline: 0, flex: 1, background: "transparent", fontSize: 14 },
  textarea: { ...base.input, border: 0, resize: "vertical", minHeight: 80, padding: 0 },
  choice: { display: "grid", gap: 8, textAlign: "left", color: "#101b3d", background: "#fff" },
  selected: { border: "2px solid #6424df", background: "#f5f0ff" },
  review: { border: "1px solid #ddd", borderRadius: 10, overflow: "hidden" },
  complete: { marginTop: 18, padding: 15, background: "#f4efff", color: "#6424df", borderRadius: 8, display: "flex", gap: 8 },
  actions: { display: "flex", justifyContent: "space-between", marginTop: 30 },
  back: { border: 0, background: "transparent", display: "flex", alignItems: "center", gap: 6, cursor: "pointer" },
  next: { background: "#6424df", color: "#fff", display: "flex", alignItems: "center", gap: 8 },
  progress: { marginTop: 30, padding: 15, border: "1px solid #ddd", borderRadius: 9, display: "flex", justifyContent: "space-between", color: "#68748d" }
};