import { GraduationCap, Handshake, Users, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5K+",
    label: "Active Users",
    color: "#7c4dff",
    bg: "#eee8ff",
  },
  {
    icon: GraduationCap,
    number: "2K+",
    label: "Skills Available",
    color: "#0d9f78",
    bg: "#e2f8f1",
  },
  {
    icon: Handshake,
    number: "3K+",
    label: "Successful Swaps",
    color: "#df6b27",
    bg: "#fff0e8",
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries",
    color: "#3475d5",
    bg: "#e8f0ff",
  },
];

export default function Stats({ dark }) {
  return (
    <section style={{ padding: "0 0 40px" }}>
      <div
        className="stats-grid"
        style={{
          width: "min(1360px, calc(100% - 40px))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          border: `1px solid ${dark ? "#37334f" : "#e5e7eb"}`,
          borderRadius: 16,
          background: dark ? "#1b1930" : "#ffffff",
        }}
      >
        {stats.map(({ icon: Icon, number, label, color, bg }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              padding: "24px 12px",
              minWidth: 0,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
                borderRadius: 14,
                color,
                background: bg,
              }}
            >
              <Icon size={24} />
            </div>
            <div>
              <strong style={{ display: "block", fontSize: 22 }}>
                {number}
              </strong>
              <span
                style={{
                  display: "block",
                  marginTop: 4,
                  color: dark ? "#b8b4cc" : "#687187",
                  fontSize: 13,
                }}
              >
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 760px) {
          .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  );
}
