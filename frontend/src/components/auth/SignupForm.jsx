import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Input from "../common/Input";
import Button from "../common/Button";
import ErrorMessage from "../common/ErrorMessage";

const SignupForm = () => {
    const navigate = useNavigate();
    const { signup, error, clearError } = useAuth();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const [fieldError, setFieldError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setFieldError("");
        clearError();
    };

    const validateForm = () => {
        if (!formData.fullName.trim()) {
            return "Full name is required.";
        }

        if (!formData.email.trim()) {
            return "Email is required.";
        }

        if (!formData.password) {
            return "Password is required.";
        }

        if (formData.password.length < 6) {
            return "Password must be at least 6 characters.";
        }

        return "";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationError = validateForm();

        if (validationError) {
            setFieldError(validationError);
            return;
        }

        try {
            setLoading(true);

            const response = await signup({
                fullName: formData.fullName.trim(),
                email: formData.email.trim(),
                password: formData.password,
            });

            if (response?.success) {
                navigate("/onboarding", { replace: true });
            }
        } catch {
            // AuthContext handles the API error.
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
            }}
        >
            {(fieldError || error) && (
                <ErrorMessage
                    message={fieldError || error}
                    onClose={() => {
                        setFieldError("");
                        clearError();
                    }}
                />
            )}

            <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                placeholder="Enter your full name"
                autoComplete="name"
                onChange={handleChange}
                required
            />

            <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                placeholder="Enter your email"
                autoComplete="email"
                onChange={handleChange}
                required
            />

            <Input
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                placeholder="Create a password"
                autoComplete="new-password"
                onChange={handleChange}
                required
            />

            <Button
                type="submit"
                loading={loading}
                disabled={loading}
            >
                Create Account
            </Button>
        </form>
    );
};

export default SignupForm;