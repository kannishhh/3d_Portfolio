import { useState, useEffect } from "react";


const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
  largeDesktop: 1920,
};

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: screenSize.width,
    height: screenSize.height,

    isMobile: screenSize.width < breakpoints.mobile,
    isTablet:
      screenSize.width >= breakpoints.mobile &&
      screenSize.width < breakpoints.tablet,
    isDesktop:
      screenSize.width >= breakpoints.tablet &&
      screenSize.width < breakpoints.largeDesktop,
    isLargeDesktop: screenSize.width >= breakpoints.largeDesktop,

    isMobileOrTablet: screenSize.width < breakpoints.tablet,
    isDesktopOrLarger: screenSize.width >= breakpoints.tablet,

    breakpoints,
  };
};

const IsMobile = () => {
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const mobileKeywords = ["Mobile", "Android", "iphone", "ipad", "Tablet"];

  if (mobileKeywords.some((keyword) => userAgent.includes(keyword))) {
    return true;
  }

  const mobileThreshold = 768;
  if (typeof window !== "undefined" && window.innerWidth < mobileThreshold) {
    return true;
  }
  return false;
};

export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.mobile - 1}px)`,
  tablet: `@media (min-width: ${breakpoints.mobile}px) and (max-width: ${
    breakpoints.tablet - 1
  }px)`,
  desktop: `@media (min-width: ${breakpoints.tablet}px) and (max-width: ${
    breakpoints.largeDesktop - 1
  }px)`,
  largeDesktop: `@media (min-width: ${breakpoints.largeDesktop}px)`,

  mobileUp: `@media (min-width: ${breakpoints.mobile}px)`,
  tabletUp: `@media (min-width: ${breakpoints.tablet}px)`,
  desktopUp: `@media (min-width: ${breakpoints.largeDesktop}px)`,

  mobileDown: `@media (max-width: ${breakpoints.mobile - 1}px)`,
  tabletDown: `@media (max-width: ${breakpoints.tablet - 1}px)`,
};

export { useResponsive, breakpoints };
export default IsMobile;
