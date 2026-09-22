const PageContainer = ({
    children,
    maxWidth = "1200px",
    padding = "24px",
    style = {},
}) => {
    return (
        <main
            style={{
                width: "100%",
                maxWidth,
                margin: "0 auto",
                padding,
                boxSizing: "border-box",
                animation: "skillswap-page-enter 350ms ease-out",
                ...style,
            }}
        >
            {children}

            <style>
                {`
                    @keyframes skillswap-page-enter {
                        from {
                            opacity: 0;
                            transform: translateY(8px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 768px) {
                        main {
                            padding: 18px !important;
                        }
                    }

                    @media (max-width: 480px) {
                        main {
                            padding: 14px !important;
                        }
                    }
                `}
            </style>
        </main>
    );
};

export default PageContainer;