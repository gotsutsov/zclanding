import { useEffect } from "react";

export function useScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      history.scrollRestoration = "auto";
    };
  }, []);
}
