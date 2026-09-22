import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import PageContainer from "../../components/common/PageContainer";

const DashboardPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const displayName =
        user?.fullName?.trim() || "SkillSwap User";

    const getItems = (value) => {
        if (!value) return [];

        if (Array.isArray(value)) {
            return value.filter(Boolean);
        }

        return String(value)
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
    };

    const teachingSkills = getItems(user?.skillYouHave);
    const learningSkills = getItems(user?.skillYouWant);
    const languages = getItems(user?.language);

    const profileFields = [
        user?.fullName,
        user?.bio,
        teachingSkills.length > 0,
        learningSkills.length > 0,
        languages.length > 0,
    ];

    const completedFields = profileFields.filter(Boolean).length;
    const profileCompletion = Math.round(
        (completedFields / profileFields.length) * 100
    );

    return (
        <PageContainer
            style={{
                minHeight: "100vh",
                paddingTop: "32px",
                paddingBottom: "40px",
            }}
        >
            <section className="dashboard-page">
                <div className="dashboard-welcome">
                    <p>Welcome back</p>

                    <h1>{displayName}</h1>

                    <span>
                        Continue discovering people, exchanging
                        skills, and building meaningful connections.
                    </span>
                </div>

                <div className="dashboard-stats">
                    <DashboardStat
                        value={teachingSkills.length}
                        label="Skills You Teach"
                    />

                    <DashboardStat
                        value={learningSkills.length}
                        label="Skills You Want"
                    />

                    <DashboardStat
                        value={languages.length}
                        label="Languages"
                    />
                </div>

                <div className="dashboard-main-grid">
                    <section className="dashboard-actions">
                        <h2>Quick Actions</h2>

                        <p>Start where you want to go.</p>

                        <div className="action-grid">
                            <ActionCard
                                title="Discover"
                                text="Find matching learners and teachers."
                                onClick={() =>
                                    navigate("/discover")
                                }
                            />

                            <ActionCard
                                title="Connections"
                                text="Manage your connection requests."
                                onClick={() =>
                                    navigate("/connections")
                                }
                            />

                            <ActionCard
                                title="Chat"
                                text="Talk with your skill partners."
                                onClick={() =>
                                    navigate("/chat")
                                }
                            />
                        </div>
                    </section>

                    <section className="dashboard-profile">
                        <h2>Profile</h2>

                        <p>Profile completion</p>

                        <div className="progress-track">
                            <div
                                className="progress-value"
                                style={{
                                    width: `${profileCompletion}%`,
                                }}
                            />
                        </div>

                        <div className="profile-meta">
                            <span>
                                {profileCompletion}% complete
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/profile")
                                }
                            >
                                View Profile
                            </button>
                        </div>

                        {user?.bio && (
                            <div className="profile-bio">
                                {user.bio}
                            </div>
                        )}
                    </section>
                </div>
            </section>

            <style>
                {`
                    .dashboard-page {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        animation: dashboard-enter 450ms ease-out;
                    }

                    .dashboard-welcome {
                        padding: 30px;
                        border-radius: 18px;
                        background: #111827;
                        color: #ffffff;
                        box-sizing: border-box;
                    }

                    .dashboard-welcome p {
                        margin: 0 0 8px;
                        color: #d1d5db;
                        font-size: 14px;
                    }

                    .dashboard-welcome h1 {
                        margin: 0 0 10px;
                        font-size: clamp(28px, 4vw, 40px);
                        line-height: 1.15;
                    }

                    .dashboard-welcome span {
                        color: #d1d5db;
                        font-size: 15px;
                        line-height: 1.7;
                    }

                    .dashboard-stats {
                        display: grid;
                        grid-template-columns:
                            repeat(3, minmax(0, 1fr));
                        gap: 16px;
                    }

                    .dashboard-main-grid {
                        display: grid;
                        grid-template-columns:
                            minmax(0, 1.4fr)
                            minmax(280px, 0.6fr);
                        gap: 18px;
                    }

                    .dashboard-actions,
                    .dashboard-profile {
                        min-width: 0;
                        padding: 24px;
                        border: 1px solid #e5e7eb;
                        border-radius: 16px;
                        background: #ffffff;
                        box-sizing: border-box;
                    }

                    .dashboard-actions h2,
                    .dashboard-profile h2 {
                        margin: 0 0 6px;
                        color: #111827;
                        font-size: 20px;
                    }

                    .dashboard-actions > p,
                    .dashboard-profile > p {
                        margin: 0 0 18px;
                        color: #6b7280;
                        font-size: 13px;
                    }

                    .action-grid {
                        display: grid;
                        grid-template-columns:
                            repeat(3, minmax(0, 1fr));
                        gap: 12px;
                    }

                    .action-card {
                        min-width: 0;
                        min-height: 120px;
                        padding: 16px;
                        border: 1px solid #e5e7eb;
                        border-radius: 12px;
                        background: #ffffff;
                        text-align: left;
                        font-family: inherit;
                        cursor: pointer;
                        transition:
                            transform 180ms ease,
                            box-shadow 180ms ease;
                    }

                    .action-card:hover {
                        transform: translateY(-3px);
                        box-shadow:
                            0 8px 20px
                            rgba(0, 0, 0, 0.07);
                    }

                    .action-card strong {
                        display: block;
                        margin-bottom: 7px;
                        color: #111827;
                        font-size: 15px;
                    }

                    .action-card span {
                        color: #6b7280;
                        font-size: 12px;
                        line-height: 1.5;
                    }

                    .progress-track {
                        width: 100%;
                        height: 8px;
                        overflow: hidden;
                        border-radius: 999px;
                        background: #e5e7eb;
                    }

                    .progress-value {
                        height: 100%;
                        border-radius: 999px;
                        background: #111827;
                        transition: width 500ms ease;
                    }

                    .profile-meta {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        margin-top: 10px;
                    }

                    .profile-meta span {
                        color: #6b7280;
                        font-size: 13px;
                    }

                    .profile-meta button {
                        border: none;
                        background: transparent;
                        padding: 0;
                        color: #111827;
                        font-family: inherit;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .profile-bio {
                        margin-top: 20px;
                        padding-top: 18px;
                        border-top: 1px solid #f3f4f6;
                        color: #4b5563;
                        font-size: 13px;
                        line-height: 1.6;
                    }

                    @keyframes dashboard-enter {
                        from {
                            opacity: 0;
                            transform: translateY(14px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 900px) {
                        .dashboard-main-grid {
                            grid-template-columns: 1fr;
                        }
                    }

                    @media (max-width: 700px) {
                        .dashboard-stats {
                            grid-template-columns: 1fr;
                        }

                        .action-grid {
                            grid-template-columns: 1fr;
                        }
                    }

                    @media (max-width: 480px) {
                        .dashboard-welcome {
                            padding: 24px;
                        }

                        .dashboard-actions,
                        .dashboard-profile {
                            padding: 20px;
                        }
                    }
                `}
            </style>
        </PageContainer>
    );
};

const DashboardStat = ({ value, label }) => {
    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                background: "#ffffff",
            }}
        >
            <strong
                style={{
                    display: "block",
                    marginBottom: "5px",
                    color: "#111827",
                    fontSize: "26px",
                }}
            >
                {value}
            </strong>

            <span
                style={{
                    color: "#6b7280",
                    fontSize: "13px",
                }}
            >
                {label}
            </span>
        </div>
    );
};

const ActionCard = ({ title, text, onClick }) => {
    return (
        <button
            type="button"
            className="action-card"
            onClick={onClick}
        >
            <strong>{title}</strong>
            <span>{text}</span>
        </button>
    );
};

export default DashboardPage;