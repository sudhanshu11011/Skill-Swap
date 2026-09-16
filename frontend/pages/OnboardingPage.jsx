import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  completeOnboarding,
  getCurrentUser,
} from "../services/authService";

const steps = ["About You", "Your Skills", "Review", "Almost Done"];

const initialForm = {
  fullName: "",
  bio: "",
  skillYouHave: "",
  skillYouWant: "",
};

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getCurrentUser()
      .then((result) => {
        setForm((current) => ({
          ...current,
          fullName: result.user?.fullName || "",
          bio: result.user?.bio || "",
          skillYouHave: result.user?.skillYouHave || "",
          skillYouWant: result.user?.skillYouWant || "",
        }));
      })
      .catch((err) => setError(err.message || "Unable to load your profile."))
      .finally(() => setLoading(false));
  }, []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const continueStep = () => {
    setError("");

    if (step === 0 && !form.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (step === 1 && (!form.skillYouHave.trim() || !form.skillYouWant.trim())) {
      setError("Please enter both skills.");
      return;
    }

    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const finishOnboarding = async () => {
    setSubmitting(true);
    setError("");

    try {
      await completeOnboarding({
        fullName: form.fullName.trim(),
        bio: form.bio.trim(),
        skillYouHave: form.skillYouHave.trim(),
        skillYouWant: form.skillYouWant.trim(),
      });

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to complete onboarding.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px 15px",
    border: "1px solid #d9dce5",
    borderRadius: 8,
    fontSize: 15,
    background: "#fff",
    color: "#172033",
  };

  const labelStyle = {
    display: "block",
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 500,
    color: "#172033",
  };

  if (loading) {
    return <main style={{ padding: 32 }}>Loading your profile...</main>;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(250px, 28%) 1fr",
        background: "#fff",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <aside
        style={{
          padding: "48px 11%",
          background: "#f3f0ff",
          borderRight: "1px solid #e4e0f1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <div>
          <div style={{ fontSize: 27, fontWeight: 700 }}>SkillSwap</div>
          <div style={{ color: "#596174", marginTop: 6 }}>Learn. Teach. Grow.</div>
        </div>

        <div>
          <h1 style={{ fontSize: 30, lineHeight: 1.4, margin: "0 0 16px" }}>
            Let’s set up your profile
          </h1>
          <p style={{ color: "#596174", lineHeight: 1.6, margin: 0 }}>
            Tell the community about yourself and the skills you want to share
            and learn.
          </p>
        </div>

        <div
          style={{
            padding: 18,
            borderRadius: 10,
            background: "#fff",
            border: "1px solid #e4e0f1",
            color: "#596174",
            lineHeight: 1.5,
          }}
        >
          Your profile helps other learners understand what you can teach and
          what you want to learn.
        </div>
      </aside>

      <section style={{ padding: "40px 6%", minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#596174",
            marginBottom: 42,
          }}
        >
          SkillSwap Profile Setup
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
            gap: 12,
            marginBottom: 48,
          }}
        >
          {steps.map((label, index) => (
            <div key={label}>
              <div
                style={{
                  height: 5,
                  borderRadius: 5,
                  background: index <= step ? "#5526d7" : "#e5e7ef",
                  marginBottom: 12,
                }}
              />
              <div
                style={{
                  fontSize: 13,
                  color: index === step ? "#5526d7" : "#596174",
                  textAlign: "center",
                }}
              >
                {index + 1}. {label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>
            {["Tell us about yourself", "Share your skills", "Review your profile", "Almost done"][step]}
          </h2>
          <p style={{ color: "#596174", margin: "0 0 30px", lineHeight: 1.5 }}>
            {[
              "Help the community know who you are.",
              "Tell others what you can teach and what you want to learn.",
              "Check your details before completing setup.",
              "Your profile is ready to be submitted.",
            ][step]}
          </p>

          {error && (
            <p
              role="alert"
              style={{
                padding: 12,
                borderRadius: 8,
                background: "#fff0f0",
                color: "#a32121",
                marginBottom: 20,
              }}
            >
              {error}
            </p>
          )}

          {step === 0 && (
            <div style={{ display: "grid", gap: 22 }}>
              <div>
                <label htmlFor="fullName" style={labelStyle}>Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="bio" style={labelStyle}>Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={form.bio}
                  onChange={updateField}
                  placeholder="Write a short bio about yourself..."
                  maxLength={200}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <div style={{ textAlign: "right", color: "#7a8191", fontSize: 12 }}>
                  {form.bio.length}/200
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div style={{ display: "grid", gap: 22 }}>
              <div>
                <label htmlFor="skillYouHave" style={labelStyle}>
                  A skill you can teach
                </label>
                <input
                  id="skillYouHave"
                  name="skillYouHave"
                  value={form.skillYouHave}
                  onChange={updateField}
                  placeholder="e.g. Web development"
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="skillYouWant" style={labelStyle}>
                  A skill you want to learn
                </label>
                <input
                  id="skillYouWant"
                  name="skillYouWant"
                  value={form.skillYouWant}
                  onChange={updateField}
                  placeholder="e.g. UI/UX design"
                  style={inputStyle}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div
              style={{
                border: "1px solid #e0e2e9",
                borderRadius: 10,
                padding: 22,
                display: "grid",
                gap: 20,
              }}
            >
              <div>
                <div style={labelStyle}>Full Name</div>
                <div>{form.fullName || "—"}</div>
              </div>
              <div>
                <div style={labelStyle}>Bio</div>
                <div style={{ whiteSpace: "pre-wrap", color: "#596174" }}>
                  {form.bio || "No bio added"}
                </div>
              </div>
              <div>
                <div style={labelStyle}>Skill you can teach</div>
                <div>{form.skillYouHave || "—"}</div>
              </div>
              <div>
                <div style={labelStyle}>Skill you want to learn</div>
                <div>{form.skillYouWant || "—"}</div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div
              style={{
                padding: 24,
                border: "1px solid #e0e2e9",
                borderRadius: 10,
                lineHeight: 1.6,
                color: "#596174",
              }}
            >
              Select “Complete Setup” to save your profile and continue to your
              dashboard.
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              marginTop: 40,
            }}
          >
            <button
              type="button"
              onClick={() => {
                setError("");
                setStep((current) => Math.max(current - 1, 0));
              }}
              disabled={step === 0 || submitting}
              style={{
                padding: "12px 16px",
                border: 0,
                background: "transparent",
                color: "#596174",
                cursor: step === 0 ? "default" : "pointer",
              }}
            >
              Back
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={continueStep}
                style={{
                  minWidth: 180,
                  padding: "14px 24px",
                  border: 0,
                  borderRadius: 8,
                  background: "#5526d7",
                  color: "#fff",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={finishOnboarding}
                disabled={submitting}
                style={{
                  minWidth: 180,
                  padding: "14px 24px",
                  border: 0,
                  borderRadius: 8,
                  background: "#5526d7",
                  color: "#fff",
                  fontSize: 15,
                  cursor: submitting ? "wait" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting ? "Saving..." : "Complete Setup"}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}