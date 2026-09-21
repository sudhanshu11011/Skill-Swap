import { Check, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

const skills = [
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
  "MongoDB",
  "UI/UX Design",
  "Graphic Design",
  "Project Management",
  "Machine Learning",
  "Deep Learning",
  "Data Analysis",
  "Git & GitHub",
  "Public Speaking",
  "Photography",
  "Playing Guitar",
  "Musical Instruments",
  "Arts",
  "Drawing",
  "Video Editing",
  "Content Writing",
  "Digital Marketing",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Blockchain",
  "Game Development",
  "Mobile App Development",
  "Animation",
];

export default function SkillSelector({
  label,
  value = [],
  onChange,
  placeholder,
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      skills.filter((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const toggle = (skill) =>
    onChange(
      value.includes(skill)
        ? value.filter((item) => item !== skill)
        : [...value, skill]
    );

  return (
    <div style={s.field}>
      <label style={s.label}>{label}</label>

      <div style={s.box}>
        <div style={s.search}>
          <Search size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            style={s.input}
          />
        </div>

        {value.length > 0 && (
          <div style={s.selected}>
            {value.map((skill) => (
              <span key={skill} style={s.tag}>
                {skill}
                <button
                  type="button"
                  onClick={() => toggle(skill)}
                  style={s.remove}
                  aria-label={`Remove ${skill}`}
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}

        <div style={s.list}>
          {filtered.map((skill) => {
            const selected = value.includes(skill);

            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggle(skill)}
                style={{
                  ...s.option,
                  ...(selected ? s.selectedOption : {}),
                }}
              >
                <span>{skill}</span>
                {selected && <Check size={15} />}
              </button>
            );
          })}

          {!filtered.length && (
            <p style={s.empty}>No matching skills found.</p>
          )}
        </div>
      </div>

      <small style={s.count}>
        {value.length} skill{value.length !== 1 ? "s" : ""} selected
      </small>
    </div>
  );
}

const s = {
  field: {
    marginBottom: 20,
  },

  label: {
    display: "block",
    marginBottom: 8,
    fontSize: 13,
    fontWeight: 700,
  },

  box: {
    overflow: "hidden",
    border: "1px solid var(--border)",
    borderRadius: 11,
    background: "var(--surface)",
  },

  search: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    height: 46,
    padding: "0 13px",
    color: "var(--muted)",
    borderBottom: "1px solid var(--border)",
  },

  input: {
    width: "100%",
    border: 0,
    outline: 0,
    background: "transparent",
    color: "var(--text)",
    fontSize: 13,
  },

  selected: {
    display: "flex",
    flexWrap: "wrap",
    gap: 7,
    padding: "9px 11px",
    borderBottom: "1px solid var(--border)",
  },

  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "6px 8px 6px 10px",
    borderRadius: 7,
    background: "rgba(108,48,235,.12)",
    color: "var(--primary)",
    fontSize: 11,
    fontWeight: 600,
  },

  remove: {
    display: "grid",
    placeItems: "center",
    padding: 0,
    border: 0,
    background: "transparent",
    color: "inherit",
    cursor: "pointer",
  },

  list: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 2,
    maxHeight: 190,
    overflowY: "auto",
    padding: 8,
  },

  option: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    minHeight: 36,
    padding: "7px 10px",
    border: 0,
    borderRadius: 7,
    background: "transparent",
    color: "var(--text)",
    fontSize: 12,
    textAlign: "left",
    cursor: "pointer",
  },

  selectedOption: {
    background: "rgba(108,48,235,.10)",
    color: "var(--primary)",
    fontWeight: 600,
  },

  empty: {
    gridColumn: "1/-1",
    margin: 12,
    color: "var(--muted)",
    fontSize: 12,
    textAlign: "center",
  },

  count: {
    display: "block",
    marginTop: 6,
    color: "var(--muted)",
    fontSize: 10,
  },
};