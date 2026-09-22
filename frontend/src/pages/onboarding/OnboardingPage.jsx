import OnboardingForm from "../../components/onboarding/OnboardingForm";
import PageContainer from "../../components/common/PageContainer";

const OnboardingPage = () => {
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
                    maxWidth: "760px",
                    padding: "40px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "18px",
                    background: "#ffffff",
                    boxShadow:
                        "0 12px 35px rgba(0, 0, 0, 0.06)",
                    boxSizing: "border-box",
                    animation:
                        "skillswap-onboarding-enter 400ms ease-out",
                }}
            >
                <div
                    style={{
                        marginBottom: "30px",
                        textAlign: "center",
                    }}
                >
                    <h1
                        style={{
                            margin: "0 0 10px",
                            color: "#111827",
                            fontSize: "32px",
                            lineHeight: "1.2",
                            fontWeight: "750",
                        }}
                    >
                        Complete Your Profile
                    </h1>

                    <p
                        style={{
                            margin: 0,
                            color: "#6b7280",
                            fontSize: "14px",
                            lineHeight: "1.6",
                        }}
                    >
                        Tell the SkillSwap community about
                        yourself and what you want to learn.
                    </p>
                </div>

                <OnboardingForm />
            </section>

            <style>
                {`
                    @keyframes skillswap-onboarding-enter {
                        from {
                            opacity: 0;
                            transform: translateY(18px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 600px) {
                        section {
                            padding: 28px 20px !important;
                            border-radius: 14px !important;
                        }
                    }

                    @media (max-width: 420px) {
                        section {
                            padding: 22px 16px !important;
                        }

                        h1 {
                            font-size: 26px !important;
                        }
                    }
                `}
            </style>
        </PageContainer>
    );
};

export default OnboardingPage;