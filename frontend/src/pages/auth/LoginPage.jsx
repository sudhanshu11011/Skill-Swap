import { Link } from "react-router-dom";

import LoginForm from "../../components/auth/LoginForm";
import PageContainer from "../../components/common/PageContainer";

const LoginPage = () => {
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
                    maxWidth: "430px",
                    padding: "32px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    background: "#ffffff",
                    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.06)",
                    boxSizing: "border-box",
                    animation: "skillswap-auth-enter 400ms ease-out",
                }}
            >
                <div
                    style={{
                        marginBottom: "28px",
                        textAlign: "center",
                    }}
                >
                    <h1
                        style={{
                            margin: "0 0 8px",
                            color: "#111827",
                            fontSize: "30px",
                            lineHeight: "1.2",
                            fontWeight: "750",
                        }}
                    >
                        Welcome Back
                    </h1>

                    <p
                        style={{
                            margin: 0,
                            color: "#6b7280",
                            fontSize: "14px",
                            lineHeight: "1.6",
                        }}
                    >
                        Login to continue to SkillSwap.
                    </p>
                </div>

                <LoginForm />

                <p
                    style={{
                        margin: "22px 0 0",
                        textAlign: "center",
                        color: "#6b7280",
                        fontSize: "14px",
                    }}
                >
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        style={{
                            color: "#111827",
                            fontWeight: "600",
                            textDecoration: "none",
                        }}
                    >
                        Create one
                    </Link>
                </p>
            </section>

            <style>
                {`
                    @keyframes skillswap-auth-enter {
                        from {
                            opacity: 0;
                            transform: translateY(18px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 480px) {
                        section {
                            padding: 24px !important;
                            border-radius: 12px !important;
                        }
                    }
                `}
            </style>
        </PageContainer>
    );
};

export default LoginPage;