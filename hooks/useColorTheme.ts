import { useEffect, useState } from "react";

export function useColorTheme() {
  const [color, setColor] = useState("color-primary-1");

  useEffect(() => {
    const saved = localStorage.getItem("Simbolo-color-theme");
    if (saved) {
      setColor(saved);
      document.body.setAttribute("data-color-primary", saved);
    }
  }, []);

  const setColorTheme = (newColor: string) => {
    setColor(newColor);
    document.body.setAttribute("data-color-primary", newColor);
    localStorage.setItem("Simbolo-color-theme", newColor);
  };

  return { color, setColorTheme };
}
