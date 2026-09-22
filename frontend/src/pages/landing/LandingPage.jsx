import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";
import PageContainer from "../../components/common/PageContainer";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <PageContainer
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <section
                style={{
                    width: "100%",
                    maxWidth: "850px",
                    textAlign: "center",
                    padding: "40px 20px",
                    boxSizing: "border-box",
                    animation: "skillswap-landing-enter 600ms ease-out",
                }}
            >
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "7px 14px",
                        marginBottom: "20px",
                        borderRadius: "999px",
                        background: "#f3f4f6",
                        color: "#374151",
                        fontSize: "13px",
                        fontWeight: "600",
                    }}
                >
                    Learn. Share. Connect.
                </div>

                <h1
                    style={{
                        margin: "0",
                        color: "#111827",
                        fontSize: "clamp(38px, 7vw, 72px)",
                        lineHeight: "1.05",
                        fontWeight: "800",
                        letterSpacing: "-2px",
                    }}
                >
                    Exchange Skills.
                    <br />
                    Grow Together.
                </h1>

                <p
                    style={{
                        maxWidth: "650px",
                        margin: "24px auto 32px",
                        color: "#6b7280",
                        fontSize: "clamp(15px, 2vw, 18px)",
                        lineHeight: "1.7",
                    }}
                >
                    SkillSwap connects people who want to learn
                    new skills with people who are ready to share
                    what they know.
                </p>

                <div
                    style={{
                        width: "100%",
                        maxWidth: "360px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    <Button
                        onClick={() => navigate("/signup")}
                    >
                        Get Started
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                </div>
            </section>

            <style>
                {`
                    @keyframes skillswap-landing-enter {
                        from {
                            opacity: 0;
                            transform: translateY(24px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 480px) {
                        section {
                            padding: 24px 12px !important;
                        }
                    }
                `}
            </style>
        </PageContainer>
    );
};

export default LandingPage;