"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={`p-2 px-4 flex items-center gap-2 transition-colors duration-300 border shadow-sm
        ${isDark ? "bg-white text-black border-gray-300 hover:bg-gray-100" : "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"}
      `}
    >
      {isDark ? (
        <>
          <MdLightMode className="text-yellow-400 text-lg" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <BsMoonStarsFill className="text-gray-300 text-lg" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
