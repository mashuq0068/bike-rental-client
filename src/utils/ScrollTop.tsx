import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation(); // Get the location object

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional: smooth scrolling for a better experience
    });
  }, [location.pathname]); // Dependency array is location.pathname

  return null;
};

export default ScrollToTop;
