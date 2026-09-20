import { useEffect, useState } from "react";

export default function useResponsive() {
  const getWidth = () =>
    typeof window === "undefined" ? 1280 : window.innerWidth;

  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isDesktop: width >= 1100,
    isTablet: width >= 768 && width < 1100,
    isMobile: width < 768,
    isSmallMobile: width < 480,
  };
}