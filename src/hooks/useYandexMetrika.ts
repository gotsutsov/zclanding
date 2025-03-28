import { useEffect } from "react";
import { initYandexMetrika } from "../analytics/yandexMetrika";

export function useYandexMetrika() {
  useEffect(() => {
    initYandexMetrika();
  }, []);
}
