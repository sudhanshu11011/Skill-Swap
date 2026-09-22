const StepIndicator = ({
    currentStep,
    totalSteps,
}) => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "32px",
            }}
        >
            {Array.from({ length: totalSteps }, (_, index) => {
                const step = index + 1;
                const isActive = step === currentStep;
                const isCompleted = step < currentStep;

                return (
                    <div
                        key={step}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <div
                            style={{
                                width: "34px",
                                height: "34px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background:
                                    isActive || isCompleted
                                        ? "#111827"
                                        : "#f3f4f6",
                                color:
                                    isActive || isCompleted
                                        ? "#ffffff"
                                        : "#6b7280",
                                border:
                                    isActive || isCompleted
                                        ? "1px solid #111827"
                                        : "1px solid #d1d5db",
                                fontSize: "13px",
                                fontWeight: "700",
                                transition:
                                    "all 220ms ease",
                                transform: isActive
                                    ? "scale(1.08)"
                                    : "scale(1)",
                            }}
                        >
                            {isCompleted ? "✓" : step}
                        </div>

                        {step < totalSteps && (
                            <div
                                style={{
                                    width: "45px",
                                    height: "2px",
                                    background:
                                        step < currentStep
                                            ? "#111827"
                                            : "#e5e7eb",
                                    transition:
                                        "background 220ms ease",
                                }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default StepIndicator;