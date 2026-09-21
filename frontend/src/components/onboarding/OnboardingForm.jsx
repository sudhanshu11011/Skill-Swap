import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  LockKeyhole,
  Moon,
  Search,
  Sparkles,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useAppStore } from "../../lib/zustand";
import useResponsive from "../../hooks/useResponsive";

const steps = ["About You", "Your Skills", "Review", "Almost Done"];
const DRAFT_KEY = "skillswap-onboarding-draft";

const skillsYouHave = [
  "Android Studio",
  "React",
  "Python",
  "MERN Stack",
  "Node.js",
  "Java",
  "C",
  "C++",
  "MongoDB",
  "DBMS",
  "SQL",
  "UI/UX Design",
  "Graphic Design",
  "Project Management",
  "Arts",
  "Game Development",
  "Mobile App Development",
  "Git & GitHub",
  "HTML & CSS",
  "JavaScript",
  "Data Structures",
  "Machine Learning",
  "Deep Learning",
  "Photography",
];

const skillsToLearn = [
  "Android Studio",
  "MERN Stack",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C",
  "C++",
  "DBMS",
  "SQL",
  "Blockchain",
  "Cybersecurity",
  "Data Analysis",
  "Public Speaking",
  "Playing Guitar",
  "Musical Instruments",
  "Arts",
  "Video Editing",
  "Digital Marketing",
  "Animation",
  "UI/UX Design",
  "Graphic Design",
  "Project Management",
  "Photography",
];

export default function OnboardingForm() {
  const { onboarding, userQuery } = useAuthContext();
  const { theme, toggleTheme } = useAppStore();
  const { isMobile, isSmallMobile } = useResponsive();

  const user = userQuery.data?.data?.user;
  const fileRef = useRef(null);

  const [step, setStep] = useState(1);
  const [profileImage, setProfileImage] = useState("");
  const [cropImage, setCropImage] = useState("");

  const [form, setForm] = useState(() => {
    try {
      const saved = sessionStorage.getItem(DRAFT_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        return {
          fullName: parsed.fullName || "",
          bio: parsed.bio || "",
          skillYouHave: parsed.skillYouHave || "",
          skillYouWant: parsed.skillYouWant || "",
        };
      }
    } catch {}

    return {
      fullName: "",
      bio: "",
      skillYouHave: "",
      skillYouWant: "",
    };
  });

  useEffect(() => {
    if (!form.fullName && user?.fullName) {
      setForm((current) => ({
        ...current,
        fullName: user.fullName,
      }));
    }
  }, [user?.fullName, form.fullName]);

  useEffect(() => {
    try {
      sessionStorage.setItem(
        DRAFT_KEY,
        JSON.stringify(form)
      );
    } catch {}
  }, [form]);

  const set = (key, value) =>
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

  const next = () =>
    setStep((current) => Math.min(4, current + 1));

  const back = () =>
    setStep((current) => Math.max(1, current - 1));

  const toggleSkill = (key, skill) => {
    const current = form[key]
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const exists = current.includes(skill);

    const updated = exists
      ? current.filter((item) => item !== skill)
      : [...current, skill];

    set(key, updated.join(", "));
  };

  const removeSkill = (key, skill) => {
    const updated = form[key]
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item && item !== skill);

    set(key, updated.join(", "));
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];

    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = () => {
      setCropImage(reader.result);
      e.target.value = "";
    };

    reader.readAsDataURL(file);
  };

  const applyCrop = (croppedImage) => {
    setProfileImage(croppedImage);
    setCropImage("");
  };

  const submit = async () => {
    try {
      await onboarding.mutateAsync({
        fullName: form.fullName,
        bio: form.bio,
        skillYouHave: form.skillYouHave,
        skillYouWant: form.skillYouWant,
      });

      sessionStorage.removeItem(DRAFT_KEY);
    } catch {
      // Keep the local draft if submission fails.
    }
  };

  const canContinue =
    step !== 2 ||
    (form.skillYouHave.trim() && form.skillYouWant.trim());

  return (
    <div style={s.page}>
      <style>{`
        @keyframes onboardingFloat {
          0%,100% { transform:translateY(0); }
          50% { transform:translateY(-10px); }
        }

        @keyframes onboardingGlow {
          0%,100% { opacity:.35; transform:scale(1); }
          50% { opacity:.6; transform:scale(1.08); }
        }

        @keyframes progressPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(99,45,230,0); }
          50% { box-shadow:0 0 0 5px rgba(99,45,230,.08); }
        }

        @keyframes metallicShine {
          0% { transform:translateX(-120%) skewX(-18deg); }
          100% { transform:translateX(400%) skewX(-18deg); }
        }
      `}</style>

      <aside
        style={{
          ...s.side,
          width: isMobile ? "100%" : "38%",
          minHeight: isMobile ? 330 : "100vh",
          padding: isSmallMobile
            ? "24px 20px"
            : isMobile
              ? "30px"
              : "42px 4%",
        }}
      >
        <div style={s.brand}>
          <img
            src="/skillswaplogo.png"
            alt="SkillSwap"
            style={s.logo}
          />
          <strong>SkillSwap</strong>
        </div>

        <div style={s.sideContent}>
          <div style={s.glow} />

          <h1
            style={{
              ...s.sideTitle,
              fontSize: isSmallMobile
                ? 30
                : isMobile
                  ? 36
                  : 42,
            }}
          >
            People
            <br />
            Learn Better
            <br />
            <span>Together</span>
          </h1>

          <p style={s.sideText}>
            Share what you know.
            <br />
            Discover what you don't.
            <br />
            Be part of a growing community.
          </p>

          {!isMobile && (
            <img
              src="/onboarding-tree.png"
              alt=""
              style={s.tree}
            />
          )}
        </div>

        <div style={s.safe}>
          <LockKeyhole size={14} />
          Your information is safe with us.
        </div>
      </aside>

      <main
        style={{
          ...s.main,
          padding: isSmallMobile
            ? "18px 16px 28px"
            : isMobile
              ? "24px 24px 32px"
              : "28px 5%",
        }}
      >
        <header style={s.header}>
          <div />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={s.themeButton}
          >
            <span
              style={{
                ...s.themeIcon,
                transform:
                  theme === "dark"
                    ? "translateX(22px)"
                    : "translateX(0)",
              }}
            >
              {theme === "dark" ? (
                <Moon size={15} />
              ) : (
                <Sun size={15} />
              )}
            </span>
          </button>
        </header>

        <div style={s.formShell}>
          <div
            style={{
              ...s.steps,
              marginBottom: isSmallMobile ? 28 : 42,
            }}
          >
            {steps.map((name, index) => {
              const number = index + 1;
              const completed = step > number;
              const active = step === number;

              return (
                <div key={name} style={s.step}>
                  <div
                    style={{
                      ...s.stepLine,
                      background:
                        number < steps.length && completed
                          ? "var(--primary)"
                          : "var(--border)",
                    }}
                  />

                  <div
                    style={{
                      ...s.stepNumber,
                      ...(active || completed
                        ? s.stepActive
                        : {}),
                    }}
                  >
                    {completed ? <Check size={14} /> : number}
                  </div>

                  <span
                    style={{
                      ...s.stepLabel,
                      color:
                        active || completed
                          ? "var(--text)"
                          : "var(--muted)",
                      fontWeight: active ? 700 : 500,
                    }}
                  >
                    {name}
                  </span>
                </div>
              );
            })}
          </div>

          {step === 1 && (
            <section>
              <Heading
                title="Tell us about yourself"
                text="Help the community know who you are."
              />

              <label style={s.field}>
                <b>Full Name</b>

                <div style={s.inputWrap}>
                  <UserRound size={17} />

                  <input
                    value={form.fullName}
                    readOnly
                    style={s.input}
                  />
                </div>
              </label>

              <label style={s.field}>
                <b>Bio</b>

                <div style={s.textareaWrap}>
                  <textarea
                    value={form.bio}
                    maxLength={500}
                    placeholder="Write a short bio about yourself..."
                    onChange={(e) =>
                      set("bio", e.target.value)
                    }
                    rows={5}
                    style={s.textarea}
                  />

                  <span style={s.counter}>
                    {form.bio.length}/500
                  </span>
                </div>
              </label>

              <div style={s.info}>
                <span style={s.infoIcon}>
                  <LockKeyhole size={17} />
                </span>

                <div>
                  <b>
                    Your name is taken from your registration.
                  </b>
                  <span>You can't change it here.</span>
                </div>
              </div>
            </section>
          )}

          {step === 2 && (
            <section>
              <Heading
                title="Your Skills"
                text="Tell us what you can teach and what you want to learn."
              />

              <SkillSelector
                label="Skills You Have"
                placeholder="Search skills you know..."
                skills={skillsYouHave}
                value={form.skillYouHave}
                onToggle={(skill) =>
                  toggleSkill("skillYouHave", skill)
                }
                onRemove={(skill) =>
                  removeSkill("skillYouHave", skill)
                }
              />

              <SkillSelector
                label="Skills You Want to Learn"
                placeholder="Search skills you want to learn..."
                skills={skillsToLearn}
                value={form.skillYouWant}
                onToggle={(skill) =>
                  toggleSkill("skillYouWant", skill)
                }
                onRemove={(skill) =>
                  removeSkill("skillYouWant", skill)
                }
              />

              <div style={s.info}>
                <span style={s.infoIcon}>
                  <Sparkles size={17} />
                </span>

                <div>
                  <b>
                    Your skills help us understand your profile.
                  </b>
                  <span>
                    They help connect you with the right people.
                  </span>
                </div>
              </div>
            </section>
          )}

          {step === 3 && (
            <section>
              <Heading
                title="Review your profile"
                text="Make sure your information looks correct before finishing."
              />

              <ProfileCard
                form={form}
                metallic
                showPreview
              />
            </section>
          )}

          {step === 4 && (
            <section>
              <div style={s.doneHeader}>
                <div style={s.doneIcon}>
                  <Sparkles size={27} />
                </div>

                <h2 style={s.doneTitle}>
                  You're almost there!
                </h2>

                <p style={s.doneText}>
                  Add a profile picture to make your profile
                  more personal. It's completely optional.
                </p>
              </div>

              <ProfileCard
                form={form}
                profileImage={profileImage}
                metallic
                upload
                onUpload={() => fileRef.current?.click()}
              />

              <input
                ref={fileRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleImage}
                hidden
              />

              <div style={{ ...s.info, marginTop: 15 }}>
                <span style={s.infoIcon}>
                  <Sparkles size={17} />
                </span>

                <div>
                  <b>
                    A profile picture helps others recognize
                    you.
                  </b>
                  <span>
                    You can always change it later from your
                    profile settings.
                  </span>
                </div>
              </div>
            </section>
          )}

          <div style={s.actions}>
            {step > 1 ? (
              <button
                type="button"
                onClick={back}
                style={s.back}
              >
                <ArrowLeft size={16} />
                Back
              </button>
            ) : (
              <span />
            )}

            <button
              type="button"
              disabled={!canContinue || onboarding.isPending}
              onClick={step === 4 ? submit : next}
              style={{
                ...s.next,
                opacity:
                  !canContinue || onboarding.isPending
                    ? 0.55
                    : 1,
              }}
            >
              {onboarding.isPending
                ? "Saving..."
                : step === 4
                  ? "Complete Profile"
                  : "Continue"}

              {step === 4 ? (
                <Check size={16} />
              ) : (
                <ArrowRight size={16} />
              )}
            </button>
          </div>

          <div style={s.progress}>
            <div style={s.progressTop}>
              <span>Profile Setup Progress</span>
              <b>{step * 25}%</b>
            </div>

            <div style={s.progressTrack}>
              <div
                style={{
                  ...s.progressFill,
                  width: `${step * 25}%`,
                  animation: "progressPulse 2s infinite",
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {cropImage && (
        <CropModal
          image={cropImage}
          onCancel={() => setCropImage("")}
          onApply={applyCrop}
        />
      )}
    </div>
  );
}

function Heading({ title, text }) {
  return (
    <header style={s.heading}>
      <h2 style={s.headingTitle}>{title}</h2>
      <p style={s.headingText}>{text}</p>
    </header>
  );
}

function SkillSelector({
  label,
  placeholder,
  skills,
  value,
  onToggle,
  onRemove,
}) {
  const [search, setSearch] = useState("");

  const selected = value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const filtered = skills.filter((skill) =>
    skill.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={s.selector}>
      <b style={s.selectorLabel}>{label}</b>

      <div style={s.selectorBox}>
        <div style={s.searchRow}>
          <Search size={16} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            style={s.searchInput}
          />
        </div>

        {selected.length > 0 && (
          <div style={s.selectedArea}>
            {selected.map((skill) => (
              <span key={skill} style={s.selectedChip}>
                {skill}

                <button
                  type="button"
                  onClick={() => onRemove(skill)}
                  aria-label={`Remove ${skill}`}
                  style={s.chipRemove}
                >
                  <X size={11} />
                </button>
              </span>
            ))}
          </div>
        )}

        <div style={s.skillList}>
          {filtered.length ? (
            filtered.map((skill) => {
              const selectedSkill = selected.includes(skill);

              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => onToggle(skill)}
                  style={{
                    ...s.skillOption,
                    ...(selectedSkill
                      ? s.skillOptionSelected
                      : {}),
                  }}
                >
                  <span>{skill}</span>

                  {selectedSkill && (
                    <Check size={14} />
                  )}
                </button>
              );
            })
          ) : (
            <div style={s.emptySkills}>
              No matching skills found.
            </div>
          )}
        </div>

        <div style={s.selectorCount}>
          {selected.length}{" "}
          {selected.length === 1 ? "skill" : "skills"} selected
        </div>
      </div>
    </div>
  );
}

function ProfileCard({
  form,
  profileImage,
  metallic,
  upload,
  onUpload,
  showPreview,
}) {
  const initials =
    form.fullName
      ?.split(" ")
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "US";

  return (
    <div style={metallic ? s.metalCard : s.card}>
      <div style={s.cardShine} />

      <div style={s.profileHeader}>
        <div style={s.avatar}>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile preview"
              style={s.avatarImage}
            />
          ) : (
            initials
          )}
        </div>

        <div style={s.profileIdentity}>
          <small>SKILLSWAP PROFILE</small>
          <h3>{form.fullName || "Your Name"}</h3>

          <span>
            <i />
            {upload
              ? "Almost ready to connect"
              : "Profile ready for review"}
          </span>
        </div>

        {upload ? (
          <div style={s.uploadArea}>
            <div
              style={{
                ...s.uploadAvatar,
                backgroundImage: profileImage
                  ? `url(${profileImage})`
                  : "none",
              }}
            >
              {!profileImage && <UserRound size={30} />}

              <button
                type="button"
                onClick={onUpload}
                aria-label="Upload profile picture"
                style={s.cameraButton}
              >
                <Camera size={14} />
              </button>
            </div>

            <button
              type="button"
              onClick={onUpload}
              style={s.uploadButton}
            >
              {profileImage ? "Change Photo" : "Upload Photo"}
            </button>
          </div>
        ) : (
          showPreview && (
            <div style={s.previewBadge}>
              <Sparkles size={13} />
              Preview
            </div>
          )
        )}
      </div>

      <div style={s.aboutCard}>
        <div style={s.cardSectionTitle}>
          <span>
            <Sparkles size={14} />
          </span>
          About You
        </div>

        <p>{form.bio || "No bio provided yet."}</p>
      </div>

      <div style={s.skillGrid}>
        <SkillCard
          title="Skills You Have"
          icon="◈"
          skills={form.skillYouHave}
        />

        <SkillCard
          title="Skills You Want to Learn"
          icon="◇"
          skills={form.skillYouWant}
        />
      </div>

      <div style={s.cardFooter}>
        <span>
          <Check size={13} />
          Information ready
        </span>

        <span>
          {[
            ...form.skillYouHave.split(","),
            ...form.skillYouWant.split(","),
          ].filter((item) => item.trim()).length}{" "}
          skills selected
        </span>
      </div>
    </div>
  );
}

function SkillCard({ title, icon, skills }) {
  const items = skills
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div style={s.skillCard}>
      <div style={s.skillHeader}>
        <span style={s.skillIcon}>{icon}</span>
        <b>{title}</b>
        <span style={s.skillCount}>{items.length}</span>
      </div>

      <div style={s.tags}>
        {items.length ? (
          items.map((skill) => (
            <span key={skill}>{skill}</span>
          ))
        ) : (
          <em>Not provided</em>
        )}
      </div>
    </div>
  );
}

function CropModal({ image, onCancel, onApply }) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  const imageRef = useRef(null);
  const dragRef = useRef(null);

  const cropSize = 320;

  const getMetrics = () => {
    const img = imageRef.current;

    if (!img) return null;

    const baseScale = Math.max(
      cropSize / img.naturalWidth,
      cropSize / img.naturalHeight
    );

    const scale = baseScale * zoom;

    return {
      scale,
      width: img.naturalWidth * scale,
      height: img.naturalHeight * scale,
    };
  };

  const limitOffset = (x, y) => {
    const metrics = getMetrics();

    if (!metrics) return { x, y };

    const maxX = Math.max(
      0,
      (metrics.width - cropSize) / 2
    );

    const maxY = Math.max(
      0,
      (metrics.height - cropSize) / 2
    );

    return {
      x: Math.min(maxX, Math.max(-maxX, x)),
      y: Math.min(maxY, Math.max(-maxY, y)),
    };
  };

  const changeZoom = (value) => {
    const nextZoom = Number(value);
    setZoom(nextZoom);

    requestAnimationFrame(() => {
      setOffset((current) =>
        limitOffset(current.x, current.y)
      );
    });
  };

  const startDrag = (e) => {
    e.preventDefault();

    dragRef.current = {
      x: e.clientX,
      y: e.clientY,
      offsetX: offset.x,
      offsetY: offset.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const moveDrag = (e) => {
    if (!dragRef.current) return;

    const drag = dragRef.current;

    setOffset(
      limitOffset(
        drag.offsetX + e.clientX - drag.x,
        drag.offsetY + e.clientY - drag.y
      )
    );
  };

  const endDrag = () => {
    dragRef.current = null;
  };

  const apply = () => {
    const img = imageRef.current;

    if (!img || !loaded) return;

    const metrics = getMetrics();

    if (!metrics) return;

    const left =
      (cropSize - metrics.width) / 2 + offset.x;

    const top =
      (cropSize - metrics.height) / 2 + offset.y;

    const sourceSize = cropSize / metrics.scale;
    const sourceX = Math.max(
      0,
      Math.min(
        img.naturalWidth - sourceSize,
        -left / metrics.scale
      )
    );
    const sourceY = Math.max(
      0,
      Math.min(
        img.naturalHeight - sourceSize,
        -top / metrics.scale
      )
    );

    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 800;

    const context = canvas.getContext("2d");

    context.drawImage(
      img,
      sourceX,
      sourceY,
      sourceSize,
      sourceSize,
      0,
      0,
      800,
      800
    );

    onApply(canvas.toDataURL("image/jpeg", 0.9));
  };

  return (
    <div style={s.cropOverlay}>
      <div style={s.cropModal}>
        <div style={s.cropHeader}>
          <div>
            <b>Crop Profile Picture</b>
            <span>Position your photo before applying it.</span>
          </div>

          <button
            type="button"
            onClick={onCancel}
            style={s.cropClose}
            aria-label="Close cropper"
          >
            <X size={19} />
          </button>
        </div>

        <div
          style={s.cropViewport}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          <img
            ref={imageRef}
            src={image}
            alt="Crop preview"
            onLoad={() => setLoaded(true)}
            draggable={false}
            style={{
              ...s.cropImage,
              width: loaded
                ? `${getMetrics()?.width || cropSize}px`
                : "auto",
              height: loaded
                ? `${getMetrics()?.height || cropSize}px`
                : "auto",
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
            }}
          />

          <div style={s.cropGuide} />
          <div style={s.cropShade} />
        </div>

        <div style={s.cropControls}>
          <span>Zoom</span>

          <input
            type="range"
            min="1"
            max="3"
            step="0.01"
            value={zoom}
            onChange={(e) => changeZoom(e.target.value)}
            style={s.zoom}
          />

          <span>{Math.round(zoom * 100)}%</span>
        </div>

        <div style={s.cropHint}>
          Drag the image to position it inside the crop area.
        </div>

        <div style={s.cropActions}>
          <button
            type="button"
            onClick={onCancel}
            style={s.cropCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={apply}
            disabled={!loaded}
            style={{
              ...s.cropApply,
              opacity: loaded ? 1 : 0.5,
            }}
          >
            <Check size={16} />
            Apply Crop
          </button>
        </div>
      </div>
    </div>
  );
}

const s = {
  page: {
    minHeight: "100vh",
    display: "flex",
    background: "var(--bg)",
    color: "var(--text)",
    fontFamily:
      'Inter, "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    overflow: "hidden",
  },

  side: {
    position: "relative",
    boxSizing: "border-box",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    background:
      "linear-gradient(145deg,var(--soft),rgba(120,70,240,.10))",
  },

  brand: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    gap: 9,
    fontSize: 20,
  },

  logo: {
    width: 39,
    height: 39,
    objectFit: "contain",
  },

  sideContent: {
    position: "relative",
    flex: 1,
    paddingTop: 55,
  },

  glow: {
    position: "absolute",
    width: 240,
    height: 240,
    right: -70,
    top: 50,
    borderRadius: "50%",
    background: "rgba(122,65,235,.15)",
    filter: "blur(45px)",
    animation: "onboardingGlow 5s ease-in-out infinite",
  },

  sideTitle: {
    position: "relative",
    zIndex: 2,
    margin: 0,
    lineHeight: 1.05,
    letterSpacing: "-1.5px",
  },

  sideText: {
    position: "relative",
    zIndex: 2,
    maxWidth: 220,
    margin: "18px 0 0",
    color: "var(--muted)",
    fontSize: 14,
    lineHeight: 1.55,
  },

  tree: {
    position: "absolute",
    zIndex: 1,
    width: "min(90%,430px)",
    maxHeight: "65%",
    objectFit: "contain",
    objectPosition: "bottom",
    right: "-7%",
    bottom: "-2%",
    animation: "onboardingFloat 5s ease-in-out infinite",
    filter:
      "drop-shadow(0 20px 25px rgba(40,20,80,.12))",
  },

  safe: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    gap: 7,
    color: "var(--muted)",
    fontSize: 11,
  },

  main: {
    flex: 1,
    minWidth: 0,
    boxSizing: "border-box",
    overflowY: "auto",
    background: "var(--bg)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 36,
  },

  themeButton: {
    position: "relative",
    width: 52,
    height: 30,
    padding: 3,
    border: "1px solid var(--border)",
    borderRadius: 9,
    background: "var(--surface)",
    cursor: "pointer",
    boxShadow: "0 5px 16px rgba(40,20,80,.08)",
  },

  themeIcon: {
    width: 24,
    height: 24,
    display: "grid",
    placeItems: "center",
    borderRadius: 6,
    background: "var(--primary)",
    color: "#fff",
    transition:
      "transform .35s cubic-bezier(.22,.61,.36,1)",
  },

  formShell: {
    width: "min(720px,100%)",
    margin: "0 auto",
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    position: "relative",
  },

  step: {
    position: "relative",
    display: "grid",
    justifyItems: "center",
    gap: 8,
    textAlign: "center",
  },

  stepLine: {
    position: "absolute",
    top: 16,
    left: "50%",
    width: "100%",
    height: 2,
    zIndex: 0,
  },

  stepNumber: {
    position: "relative",
    zIndex: 1,
    width: 32,
    height: 32,
    display: "grid",
    placeItems: "center",
    border: "1px solid var(--border)",
    borderRadius: "50%",
    background: "var(--surface)",
    color: "var(--muted)",
    fontSize: 12,
    fontWeight: 700,
  },

  stepActive: {
    borderColor: "var(--primary)",
    background: "var(--primary)",
    color: "#fff",
    boxShadow: "0 7px 18px rgba(91,32,229,.22)",
  },

  stepLabel: {
    position: "relative",
    zIndex: 1,
    fontSize: 11,
    whiteSpace: "nowrap",
  },

  heading: {
    marginBottom: 27,
  },

  headingTitle: {
    margin: 0,
    fontSize: 30,
    lineHeight: 1.15,
  },

  headingText: {
    margin: "8px 0 0",
    color: "var(--muted)",
    fontSize: 14,
  },

  field: {
    display: "block",
    marginBottom: 20,
  },

  inputWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
    padding: "0 14px",
    height: 48,
    border: "1px solid var(--border)",
    borderRadius: 10,
    background: "var(--soft)",
    color: "var(--muted)",
  },

  input: {
    width: "100%",
    border: 0,
    outline: 0,
    background: "transparent",
    color: "var(--text)",
    fontSize: 14,
  },

  textareaWrap: {
    position: "relative",
    marginTop: 8,
  },

  textarea: {
    width: "100%",
    minHeight: 110,
    boxSizing: "border-box",
    padding: 14,
    paddingBottom: 30,
    border: "1px solid var(--border)",
    borderRadius: 10,
    outline: 0,
    resize: "vertical",
    background: "var(--surface)",
    color: "var(--text)",
    fontSize: 14,
    lineHeight: 1.5,
  },

  counter: {
    position: "absolute",
    right: 12,
    bottom: 9,
    color: "var(--muted)",
    fontSize: 10,
  },

  selector: {
    marginBottom: 20,
  },

  selectorLabel: {
    display: "block",
    marginBottom: 8,
    fontSize: 13,
  },

  selectorBox: {
    overflow: "hidden",
    border: "1px solid var(--border)",
    borderRadius: 11,
    background: "var(--surface)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,.04)",
  },

  searchRow: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    height: 43,
    padding: "0 13px",
    borderBottom: "1px solid var(--border)",
    color: "var(--muted)",
  },

  searchInput: {
    width: "100%",
    height: "100%",
    border: 0,
    outline: 0,
    background: "transparent",
    color: "var(--text)",
    fontSize: 12,
  },

  selectedArea: {
    display: "flex",
    flexWrap: "wrap",
    gap: 7,
    maxHeight: 82,
    overflowY: "auto",
    padding: "9px 10px",
    borderBottom: "1px solid var(--border)",
    background:
      "linear-gradient(180deg,rgba(91,32,229,.055),transparent)",
  },

  selectedChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "5px 7px 5px 9px",
    border: "1px solid rgba(112,64,255,.22)",
    borderRadius: 7,
    background: "rgba(91,32,229,.10)",
    color: "var(--primary)",
    fontSize: 10,
    fontWeight: 600,
  },

  chipRemove: {
    width: 15,
    height: 15,
    display: "grid",
    placeItems: "center",
    padding: 0,
    border: 0,
    borderRadius: "50%",
    background: "transparent",
    color: "inherit",
    cursor: "pointer",
  },

  skillList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    maxHeight: 160,
    overflowY: "auto",
    padding: 6,
    gap: 3,
  },

  skillOption: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    minHeight: 32,
    padding: "0 9px",
    border: "1px solid transparent",
    borderRadius: 7,
    background: "transparent",
    color: "var(--text)",
    textAlign: "left",
    fontSize: 11,
    cursor: "pointer",
    transition: "all .18s ease",
  },

  skillOptionSelected: {
    borderColor: "rgba(112,64,255,.18)",
    background: "rgba(91,32,229,.09)",
    color: "var(--primary)",
    fontWeight: 600,
  },

  emptySkills: {
    gridColumn: "1 / -1",
    padding: 20,
    textAlign: "center",
    color: "var(--muted)",
    fontSize: 11,
  },

  selectorCount: {
    padding: "6px 10px",
    borderTop: "1px solid var(--border)",
    color: "var(--muted)",
    fontSize: 9,
  },

  info: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "13px 15px",
    border: "1px solid rgba(110,70,230,.14)",
    borderRadius: 11,
    background: "rgba(110,70,230,.07)",
    color: "var(--muted)",
    fontSize: 11,
    lineHeight: 1.45,
  },

  infoIcon: {
    width: 34,
    height: 34,
    flexShrink: 0,
    display: "grid",
    placeItems: "center",
    borderRadius: 9,
    background: "rgba(110,70,230,.12)",
    color: "var(--primary)",
  },

  metalCard: {
    position: "relative",
    overflow: "hidden",
    padding: 18,
    border: "1px solid rgba(164,122,255,.42)",
    borderRadius: 18,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.065),rgba(104,65,180,.075) 45%,rgba(255,255,255,.025))",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,.13),inset 0 -1px 0 rgba(0,0,0,.28),0 18px 45px rgba(0,0,0,.20),0 0 35px rgba(112,64,255,.08)",
    backdropFilter: "blur(18px)",
  },

  card: {
    position: "relative",
    overflow: "hidden",
    padding: 18,
    border: "1px solid var(--border)",
    borderRadius: 18,
    background: "var(--surface)",
  },

  cardShine: {
    position: "absolute",
    top: 0,
    left: "-20%",
    width: "28%",
    height: "100%",
    pointerEvents: "none",
    background:
      "linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)",
    animation: "metallicShine 8s ease-in-out infinite",
  },

  profileHeader: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    gap: 13,
    paddingBottom: 17,
    borderBottom: "1px solid rgba(255,255,255,.075)",
  },

  avatar: {
    width: 54,
    height: 54,
    flexShrink: 0,
    display: "grid",
    placeItems: "center",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.28)",
    borderRadius: "50%",
    background:
      "linear-gradient(145deg,#9a63ff,#5420cf)",
    color: "#fff",
    fontSize: 16,
    fontWeight: 800,
    boxShadow:
      "inset 0 1px 5px rgba(255,255,255,.28),0 7px 22px rgba(91,32,229,.30)",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  profileIdentity: {
    minWidth: 0,
    flex: 1,
  },

  previewBadge: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "7px 10px",
    border: "1px solid rgba(139,92,246,.22)",
    borderRadius: 8,
    background: "rgba(91,32,229,.09)",
    color: "#a982ff",
    fontSize: 10,
    fontWeight: 700,
  },

  aboutCard: {
    position: "relative",
    zIndex: 1,
    marginTop: 15,
    padding: "13px 15px",
    border: "1px solid rgba(255,255,255,.075)",
    borderRadius: 12,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.018))",
  },

  cardSectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 11,
    fontWeight: 700,
  },

  skillGrid: {
    position: "relative",
    zIndex: 1,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: 10,
  },

  skillCard: {
    minWidth: 0,
    padding: 13,
    border: "1px solid rgba(255,255,255,.075)",
    borderRadius: 12,
    background:
      "linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.012))",
  },

  skillHeader: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    marginBottom: 10,
    fontSize: 10,
  },

  skillIcon: {
    width: 25,
    height: 25,
    display: "grid",
    placeItems: "center",
    borderRadius: 7,
    background: "rgba(112,64,255,.13)",
    color: "#a982ff",
  },

  skillCount: {
    marginLeft: "auto",
    minWidth: 20,
    padding: "3px 5px",
    borderRadius: 6,
    background: "rgba(112,64,255,.11)",
    color: "#a982ff",
    textAlign: "center",
    fontSize: 9,
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 5,
  },

  cardFooter: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 13,
    paddingTop: 11,
    borderTop: "1px solid rgba(255,255,255,.07)",
    color: "var(--muted)",
    fontSize: 9,
  },

  doneHeader: {
    textAlign: "center",
    marginBottom: 20,
  },

  doneIcon: {
    width: 52,
    height: 52,
    margin: "0 auto 12px",
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(145,100,255,.28)",
    borderRadius: "50%",
    background:
      "linear-gradient(145deg,rgba(130,75,255,.18),rgba(91,32,229,.07))",
    color: "#a982ff",
  },

  doneTitle: {
    margin: 0,
    fontSize: 28,
  },

  doneText: {
    maxWidth: 520,
    margin: "8px auto 0",
    color: "var(--muted)",
    lineHeight: 1.5,
    fontSize: 13,
  },

  uploadArea: {
    flexShrink: 0,
    width: 108,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  uploadAvatar: {
    position: "relative",
    width: 74,
    height: 74,
    display: "grid",
    placeItems: "center",
    border: "2px solid rgba(160,120,255,.70)",
    borderRadius: "50%",
    background:
      "linear-gradient(145deg,rgba(255,255,255,.10),rgba(91,32,229,.16))",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "var(--muted)",
    boxShadow:
      "0 0 0 5px rgba(91,32,229,.08),inset 0 1px 5px rgba(255,255,255,.12)",
  },

  cameraButton: {
    position: "absolute",
    right: -3,
    bottom: -2,
    width: 27,
    height: 27,
    display: "grid",
    placeItems: "center",
    border: "2px solid var(--bg)",
    borderRadius: "50%",
    background:
      "linear-gradient(145deg,#8c50ff,#5b20e5)",
    color: "#fff",
    cursor: "pointer",
  },

  uploadButton: {
    marginTop: 7,
    padding: 0,
    border: 0,
    background: "transparent",
    color: "#a982ff",
    fontSize: 10,
    fontWeight: 700,
    cursor: "pointer",
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginTop: 30,
  },

  back: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    height: 44,
    padding: "0 17px",
    border: "1px solid var(--border)",
    borderRadius: 10,
    background: "var(--surface)",
    color: "var(--text)",
    cursor: "pointer",
  },

  next: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: 44,
    padding: "0 20px",
    border: 0,
    borderRadius: 10,
    background:
      "linear-gradient(135deg,#5b20e5,#7627e8)",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 9px 22px rgba(91,32,229,.20)",
  },

  progress: {
    marginTop: 25,
    padding: "14px 16px",
    border: "1px solid var(--border)",
    borderRadius: 11,
    background: "var(--surface)",
  },

  progressTop: {
    display: "flex",
    justifyContent: "space-between",
    color: "var(--muted)",
    fontSize: 11,
  },

  progressTrack: {
    height: 6,
    marginTop: 10,
    overflow: "hidden",
    borderRadius: 20,
    background: "var(--soft)",
  },

  progressFill: {
    height: "100%",
    borderRadius: 20,
    background:
      "linear-gradient(90deg,#5b20e5,#8b5cf6)",
    transition:
      "width .5s cubic-bezier(.22,.61,.36,1)",
  },

  cropOverlay: {
    position: "fixed",
    inset: 0,
    zIndex: 2000,
    display: "grid",
    placeItems: "center",
    padding: 20,
    background: "rgba(8,6,16,.72)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },

  cropModal: {
    width: "min(430px,100%)",
    maxHeight: "calc(100vh - 40px)",
    overflowY: "auto",
    padding: 20,
    border: "1px solid rgba(164,122,255,.32)",
    borderRadius: 18,
    background: "var(--surface)",
    color: "var(--text)",
    boxShadow:
      "0 25px 70px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.08)",
  },

  cropHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 15,
    marginBottom: 16,
  },

  cropHeaderText: {
    display: "flex",
    flexDirection: "column",
  },

  cropClose: {
    width: 34,
    height: 34,
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    border: "1px solid var(--border)",
    borderRadius: 9,
    background: "var(--soft)",
    color: "var(--text)",
    cursor: "pointer",
  },

  cropViewport: {
    position: "relative",
    width: "min(320px,80vw)",
    aspectRatio: "1",
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: 14,
    background: "#0d0b15",
    cursor: "grab",
    touchAction: "none",
    userSelect: "none",
  },

  cropImage: {
    position: "absolute",
    maxWidth: "none",
    maxHeight: "none",
    userSelect: "none",
    pointerEvents: "none",
  },

  cropGuide: {
    position: "absolute",
    inset: 0,
    zIndex: 3,
    pointerEvents: "none",
    border: "2px solid rgba(255,255,255,.92)",
    borderRadius: "50%",
    boxShadow:
      "0 0 0 999px rgba(0,0,0,.48),inset 0 0 0 1px rgba(255,255,255,.25)",
  },

  cropShade: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
    pointerEvents: "none",
    borderRadius: "50%",
  },

  cropControls: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 18,
    color: "var(--muted)",
    fontSize: 11,
  },

  zoom: {
    flex: 1,
    accentColor: "var(--primary)",
    cursor: "pointer",
  },

  cropHint: {
    marginTop: 10,
    textAlign: "center",
    color: "var(--muted)",
    fontSize: 10,
  },

  cropActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 9,
    marginTop: 18,
  },

  cropCancel: {
    height: 40,
    padding: "0 15px",
    border: "1px solid var(--border)",
    borderRadius: 9,
    background: "var(--surface)",
    color: "var(--text)",
    cursor: "pointer",
  },

  cropApply: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    height: 40,
    padding: "0 16px",
    border: 0,
    borderRadius: 9,
    background:
      "linear-gradient(135deg,#5b20e5,#7627e8)",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },
};