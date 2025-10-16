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
      className="p-2 flex items-center justify-center text-xl transition-transform duration-300 hover:scale-110 focus:outline-none ml-0 sm:ml-2"
    >
      {isDark ? (
        <MdLightMode className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7" />
      ) : (
        <BsMoonStarsFill className="text-gray-600 dark:text-gray-300 w-6 h-6 sm:w-7 sm:h-7" />
      )}
    </button>
  );
};

export default ThemeToggle;
