"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";

interface AnimatedButtonProps {
  text: string;
  href?: string; // ✅ optional
  bgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  shadowColor?: string;
  hoverColor?: string;
  icon?: ReactNode; // ✅ optional icon
  iconPosition?: "left" | "right"; // ✅ control icon placement
  onClick?: () => void; // ✅ for non-link usage
  disabled?: boolean; // ✅ added disabled prop
  newTab?: boolean;
}

const Button = ({
  text,
  href,
  bgColor = "#4848FF",
  textColor = "#CFCEFB",
  hoverTextColor,
  shadowColor,
  hoverColor = "#1E1EBE",
  icon,
  iconPosition = "left",
  onClick,
  disabled = false, // ✅ default false
  newTab = false,
}: AnimatedButtonProps) => {
  const [hovered, setHovered] = useState(false);

  // Detect if color is light
  const isLightColor = (hex: string) => {
    const c = hex.replace("#", "");
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 255;
    const g = (rgb >> 8) & 255;
    const b = rgb & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 > 180;
  };

  // Auto shadow based on bg color brightness
  const computedShadow = shadowColor
    ? shadowColor
    : isLightColor(bgColor)
    ? "rgba(255,255,255,0.4)"
    : "rgba(72,72,255,0.5)";

  // Shared styles
  const baseStyles: React.CSSProperties = {
    color: hovered && hoverTextColor ? hoverTextColor : textColor,
    backgroundColor: bgColor,
    boxShadow: disabled ? "none" : `0 0 10px 5px ${computedShadow}`,
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    backdropFilter: "blur(45px)",
    transition: "all 400ms ease-in-out",
  };

  const content = (
    <>
      {/* Hover overlay (disabled = no animation) */}
      <span
        className="absolute inset-0 transition-transform duration-[600ms] ease-in-out"
        style={{
          backgroundColor: hoverColor,
          transform:
            hovered && !disabled ? "translateX(0)" : "translateX(-100%)",
        }}
      ></span>

      {/* Text + Icon */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === "left" && <span>{icon}</span>}
        {text}
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </span>
    </>
  );

  const sharedClasses =
    "relative flex items-center justify-center gap-2 px-5 py-3 " +
    "text-[14px] md:text-[16px] font-semibold font-['Bai_Jamjuree'] " +
    "min-w-[150px] text-center overflow-hidden transition-all duration-300 ease-in-out ";

  if (href) {
    return (
     <Link
        href={href}
        target={newTab ? "_blank" : "_self"} // ✅ open in new tab if true
        rel={newTab ? "noopener noreferrer" : undefined} // ✅ safe link handling
        onMouseEnter={() => !disabled && setHovered(true)}
        onMouseLeave={() => !disabled && setHovered(false)}
        className={sharedClasses}
        style={baseStyles}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => !disabled && setHovered(false)}
      className={sharedClasses}
      style={baseStyles}
    >
      {content}
    </button>
  );
};

export default Button;
