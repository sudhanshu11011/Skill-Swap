import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import PageContainer from "../../components/common/PageContainer";
import SkillList from "../../components/user/SkillList";

const ProfilePage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const teachingSkills = user?.skillYouHave || "";
    const learningSkills = user?.skillYouWant || "";
    const languages = user?.language || "";

    return (
        <PageContainer
            style={{
                minHeight: "100vh",
                paddingTop: "32px",
                paddingBottom: "40px",
            }}
        >
            <section
                style={{
                    width: "100%",
                    maxWidth: "900px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    animation:
                        "skillswap-profile-enter 400ms ease-out",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        padding: "24px",
                        border: "1px solid #e5e7eb",
                        borderRadius: "16px",
                        background: "#ffffff",
                        boxSizing: "border-box",
                    }}
                >
                    <div>
                        <p
                            style={{
                                margin: "0 0 5px",
                                color: "#6b7280",
                                fontSize: "13px",
                            }}
                        >
                            Your Profile
                        </p>

                        <h1
                            style={{
                                margin: 0,
                                color: "#111827",
                                fontSize: "30px",
                                lineHeight: "1.2",
                            }}
                        >
                            {user?.fullName || "SkillSwap User"}
                        </h1>
                    </div>

                    <button
                        type="button"
                        onClick={() => navigate("/dashboard")}
                        style={{
                            minHeight: "40px",
                            padding: "9px 14px",
                            borderRadius: "9px",
                            border: "1px solid #d1d5db",
                            background: "#ffffff",
                            color: "#111827",
                            fontFamily: "inherit",
                            fontSize: "13px",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        Dashboard
                    </button>
                </div>

                <section
                    style={{
                        padding: "24px",
                        border: "1px solid #e5e7eb",
                        borderRadius: "16px",
                        background: "#ffffff",
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 10px",
                            color: "#111827",
                            fontSize: "20px",
                        }}
                    >
                        About
                    </h2>

                    <p
                        style={{
                            margin: 0,
                            color: "#4b5563",
                            fontSize: "14px",
                            lineHeight: "1.7",
                        }}
                    >
                        {user?.bio ||
                            "No bio has been added yet."}
                    </p>
                </section>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(2, minmax(0, 1fr))",
                        gap: "18px",
                    }}
                >
                    <SkillList
                        title="Skills I Can Teach"
                        skills={teachingSkills}
                    />

                    <SkillList
                        title="Skills I Want To Learn"
                        skills={learningSkills}
                    />
                </div>

                <SkillList
                    title="Languages"
                    skills={languages}
                    emptyText="No languages added."
                />

                <div
                    style={{
                        padding: "20px",
                        border: "1px solid #e5e7eb",
                        borderRadius: "14px",
                        background: "#ffffff",
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 12px",
                            color: "#111827",
                            fontSize: "18px",
                        }}
                    >
                        Account Information
                    </h2>

                    <p
                        style={{
                            margin: 0,
                            color: "#6b7280",
                            fontSize: "13px",
                        }}
                    >
                        {user?.email || "Email unavailable"}
                    </p>
                </div>
            </section>

            <style>
                {`
                    @keyframes skillswap-profile-enter {
                        from {
                            opacity: 0;
                            transform: translateY(12px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 700px) {
                        section > div:nth-of-type(2) {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}
            </style>
        </PageContainer>
    );
};

export default ProfilePage;