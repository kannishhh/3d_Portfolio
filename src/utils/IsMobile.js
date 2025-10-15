const IsMobile = () => {
  const userAgent = navigator.userAgent;
  const mobileKeywords = ["Mobile", "Android", "iphone", "ipad", "Tablet"];

  if (mobileKeywords.some((keyword) => userAgent.includes(keyword))) {
    return true;
  }

  const mobileThreshold = 768;
  if (window.innerWidth < mobileThreshold) {
    return true;
  }
  return false;
};

export default IsMobile;
