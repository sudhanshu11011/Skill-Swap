import { useState } from "react";
import {
  ArrowLeft, ArrowRight, BookOpen, Camera, Check, Clock3,
  Globe, MapPin, Moon, Sun, UserRound, Users
} from "lucide-react";
import { useAuthContext } from "../../context/AuthContext";
import useResponsive from "../../hooks/useResponsive";

const steps = ["About You", "Your Skills", "Preferences", "Almost Done"];

const base = {
  input: {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: "12px 14px",
    outline: 0,
    width: "100%",
    boxSizing: "border-box",
  },
  btn: { border: 0, borderRadius: 8, padding: "14px 25px", cursor: "pointer" },
};

export default function OnboardingForm() {
  const { onboarding } = useAuthContext();
  const { isMobile, isSmallMobile } = useResponsive();
  const [step, setStep] = useState(1);

  const [d, setD] = useState({
    fullName: "", bio: "", skillYouHave: "", skillYouWant: "",
    language: "", location: "", availability: "", connection: "",
  });

  const set = (key, value) => setD({ ...d, [key]: value });
  const next = () => setStep(Math.min(4, step + 1));
  const back = () => setStep(Math.max(1, step - 1));

  const submit = () =>
    onboarding.mutate({
      fullName: d.fullName,
      bio: d.bio,
      skillYouHave: d.skillYouHave,
      skillYouWant: d.skillYouWant,
      language: d.language,
    });

  const page = {
    ...x.page,
    flexDirection: isMobile ? "column" : "row",
  };

  const side = {
    ...x.side,
    width: isMobile ? "100%" : "27%",
    padding: isSmallMobile ? "22px 18px" : isMobile ? "28px 22px" : "45px 4%",
  };

  const main = {
    ...x.main,
    padding: isSmallMobile ? "20px 16px 30px" : isMobile ? "24px 20px 35px" : "30px 7%",
  };

  const stepsStyle = {
    ...x.steps,
    margin: isMobile ? "25px 0" : "40px 0",
    gap: isSmallMobile ? 4 : 10,
  };

  const form = {
    ...x.form,
    width: "100%",
  };

  return (
    <div style={page}>
      <aside style={side}>
        <img src="/skillswaplogo.png" alt="SkillSwap" style={{ width: isMobile ? 120 : 145 }} />

        <h1
          style={{
            ...x.sideTitle,
            fontSize: isMobile ? 24 : 32,
            marginTop: isMobile ? 20 : 70,
          }}
        >
          Let’s set up<br />your profile.
        </h1>

        <p>
          Tell the community about yourself and discover people who match your skills.
        </p>

        <div
          style={{
            ...x.visual,
            height: isMobile ? 70 : 300,
          }}
        >
          <UserRound size={isMobile ? 30 : 42} />
          <BookOpen size={isMobile ? 22 : 25} />
          <Users size={isMobile ? 22 : 25} />
        </div>

        <small style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Check size={15} /> Your information is safe with us.
        </small>
      </aside>

      <main style={main}>
        <div style={x.top}>
          <Globe size={16} /> English <Sun size={16} /><Moon size={16} />
        </div>

        <div style={stepsStyle}>
          {steps.map((name, i) => (
            <div
              key={name}
              style={{
                ...x.step,
                fontSize: isSmallMobile ? 10 : 13,
                flex: 1,
              }}
            >
              <b style={{ ...x.num, ...(step > i ? x.active : {}) }}>
                {step > i + 1 ? <Check size={14} /> : i + 1}
              </b>
              <span>{name}</span>
            </div>
          ))}
        </div>

        <section style={form}>
          {step === 1 && (
            <>
              <h2>Tell us about yourself</h2>
              <p>Help the community know who you are.</p>

              <div
                style={{
                  ...x.photoRow,
                  gridTemplateColumns: isMobile ? "1fr" : "150px 1fr",
                  gap: isMobile ? 18 : 30,
                }}
              >
                <div
                  style={{
                    ...x.photo,
                    gridTemplateColumns: isMobile ? "repeat(3, auto)" : "1fr",
                  }}
                >
                  <Camera size={30} />
                  <b>Upload Photo</b>
                  <small>JPG, PNG</small>
                </div>

                <div>
                  <Field label="Full Name" value={d.fullName} placeholder="Enter your full name" icon={<UserRound size={16} />} onChange={v => set("fullName", v)} />
                  <Field label="Bio" value={d.bio} placeholder="Write a short bio..." area onChange={v => set("bio", v)} />
                </div>
              </div>

              <div style={{ ...x.grid, gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)" }}>
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

              <div style={{ ...x.grid, gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)" }}>
                {["Online", "In Person", "Either"].map(v => (
                  <button
                    key={v}
                    onClick={() => set("connection", v)}
                    style={{ ...base.btn, ...x.choice, ...(d.connection === v ? x.selected : {}) }}
                  >
                    <Users size={20} />
                    <b>{v}</b>
                    <small>Connect through {v.toLowerCase()} learning.</small>
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
                  Language: d.language,
                }).map(([k, v]) => (
                  <div key={k}>
                    <b>{k}</b>
                    <span>{v || "Not provided"}</span>
                  </div>
                ))}
              </div>

              <div style={x.complete}>
                <Check size={18} /> Your profile is ready.
              </div>
            </>
          )}

          <div style={x.actions}>
            {step > 1 ? (
              <button onClick={back} style={x.back}>
                <ArrowLeft size={16} /> Back
              </button>
            ) : <span />}

            <button
              onClick={step === 4 ? submit : next}
              style={{ ...base.btn, ...x.next }}
            >
              {onboarding.isPending ? "Saving..." : step === 4 ? "Complete Profile" : "Continue"}
              {step === 4 ? <Check size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>

          <div style={x.progress}>
            Profile Setup Progress <b>{step * 25}%</b>
          </div>
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
        {area ? (
          <textarea
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            style={x.textarea}
          />
        ) : (
          <input
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            style={x.clean}
          />
        )}
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
  page: {
    minHeight: "100vh",
    display: "flex",
    fontFamily: "Arial,sans-serif",
    color: "#101b3d",
  },
  side: {
    boxSizing: "border-box",
    background: "linear-gradient(145deg,#faf9ff,#eee8ff)",
  },
  sideTitle: {
    lineHeight: 1.25,
    marginBottom: 15,
  },
  visual: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "#6424df",
  },
  main: {
    flex: 1,
    minWidth: 0,
    boxSizing: "border-box",
  },
  top: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,
    alignItems: "center",
  },
  steps: {
    display: "flex",
    justifyContent: "space-between",
  },
  step: {
    display: "grid",
    justifyItems: "center",
    gap: 8,
    color: "#667085",
    textAlign: "center",
  },
  num: {
    width: 35,
    height: 35,
    borderRadius: "50%",
    border: "2px solid #ddd",
    display: "grid",
    placeItems: "center",
  },
  active: {
    background: "#6022dc",
    color: "#fff",
    borderColor: "#6022dc",
  },
  form: {
    maxWidth: 950,
    margin: "auto",
  },
  photoRow: {
    display: "grid",
  },
  photo: {
    display: "grid",
    placeItems: "center",
    alignContent: "center",
    gap: 8,
    color: "#6424df",
  },
  grid: {
    display: "grid",
    gap: 16,
  },
  field: {
    display: "grid",
    gap: 7,
    marginBottom: 18,
  },
  wrap: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    ...base.input,
  },
  clean: {
    border: 0,
    outline: 0,
    flex: 1,
    minWidth: 0,
    background: "transparent",
    fontSize: 14,
  },
  textarea: {
    ...base.input,
    border: 0,
    resize: "vertical",
    minHeight: 80,
    padding: 0,
  },
  choice: {
    display: "grid",
    gap: 8,
    textAlign: "left",
    color: "#101b3d",
    background: "#fff",
  },
  selected: {
    border: "2px solid #6424df",
    background: "#f5f0ff",
  },
  review: {
    border: "1px solid #ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  complete: {
    marginTop: 18,
    padding: 15,
    background: "#f4efff",
    color: "#6424df",
    borderRadius: 8,
    display: "flex",
    gap: 8,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 30,
  },
  back: {
    border: 0,
    background: "transparent",
    display: "flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
  },
  next: {
    background: "#6424df",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  progress: {
    marginTop: 30,
    padding: 15,
    border: "1px solid #ddd",
    borderRadius: 9,
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    color: "#68748d",
  },
};