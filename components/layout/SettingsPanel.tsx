'use client';

import { useState, useEffect } from "react";

const COLORS = [
  "color-primary-1",
  "color-primary-2",
  "color-primary-3",
  "color-primary-4",
  "color-primary-5",
];

export default function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("color-primary-1");
  const [cursorEnabled, setCursorEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("Simbolo-color-theme");
    if (saved) {
      setSelectedColor(saved);
      document.body.setAttribute("data-color-primary", saved);
    }

    const cursorSaved = localStorage.getItem("Simbolo-cursor-enabled");
    if (cursorSaved) {
      setCursorEnabled(cursorSaved === "true");
    }
  }, []);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    document.body.setAttribute("data-color-primary", color);
    localStorage.setItem("Simbolo-color-theme", color);
  };

  const handleCursorToggle = () => {
    const newValue = !cursorEnabled;
    setCursorEnabled(newValue);
    localStorage.setItem("Simbolo-cursor-enabled", String(newValue));

    const canvas = document.getElementById("trail") as HTMLCanvasElement;
    if (canvas) {
      canvas.style.display = newValue ? "block" : "none";
    }
  };

  return (
    <>
      <div className="tf-left-bar">
        <button
          className="setting-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open settings"
        >
          <span className="icon icon-settings"></span>
        </button>
      </div>

      <div
        className={`offcanvas-color ${isOpen ? "show" : ""}`}
        id="settingColorMenu"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <button
          className="close-offcanvas"
          onClick={() => setIsOpen(false)}
          aria-label="Close settings"
        >
          <span></span>
        </button>

        <div className="offcanvas-body">
          <h4 className="title">Colors</h4>
          <div className="color-choose">
            {COLORS.map((color) => (
              <button
                key={color}
                className={`choose-item ${selectedColor === color ? "active" : ""}`}
                data-color={color}
                onClick={() => handleColorChange(color)}
                style={{
                  backgroundColor: getColorValue(color),
                }}
                aria-label={`Choose ${color}`}
              ></button>
            ))}
          </div>

          <h4 className="title mt-5">Effects</h4>
          <div className="cursor-option">
            <label className="checkbox">
              <input
                type="checkbox"
                id="cursor"
                checked={cursorEnabled}
                onChange={handleCursorToggle}
              />
              <span>Cursor Trail</span>
            </label>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="offcanvas-overlay"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1040,
          }}
        />
      )}
    </>
  );
}

function getColorValue(colorClass: string): string {
  const colors: Record<string, string> = {
    "color-primary-1": "#FF6B6B",
    "color-primary-2": "#4ECDC4",
    "color-primary-3": "#45B7D1",
    "color-primary-4": "#FFA07A",
    "color-primary-5": "#98D8C8",
  };
  return colors[colorClass] || "#FF6B6B";
}
