import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header({ onThemeChange, theme }) {
  return (
    <header className="header">
      <h1>calc</h1>
      <ThemeSwitcher onThemeChange={onThemeChange} theme={theme} />
    </header>
  );
}
