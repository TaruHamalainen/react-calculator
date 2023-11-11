import React from "react";

export default function ThemeSwitcher({ onThemeChange, theme }) {
  return (
    <div className="themes">
      <span className="theme-header">Theme</span>
      <div className="theme-switcher">
        <div className="theme-nums">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="theme-slider">
          {Array.from(
            [1, 2, 3].map((val) => (
              <button
                className={`${
                  val.toString() === theme
                    ? "btn-theme btn-theme-active"
                    : "btn-theme"
                }`}
                onClick={() => onThemeChange(val)}
                key={val}
              >
                {val}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
