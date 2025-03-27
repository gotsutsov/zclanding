import { useState, useEffect } from "react";

import styles from "./scroll-to-top-button.module.scss";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button
      className={`${styles["scroll-to-top"]} 
        ${isVisible ? styles["visible"] : ""}`}
      onClick={scrollToTop}
      aria-label="Наверх"
    >
      <img
        src="images/scroll-to-top-button.svg"
        width={60}
        height={60}
        alt="ScrollButton"
      />
    </button>
  );
}
