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
  const baseStyles = {
    color: hovered && hoverTextColor ? hoverTextColor : textColor,
    backgroundColor: bgColor,
    boxShadow: `0 0 10px 5px ${computedShadow}`,
    backdropFilter: "blur(45px)",
    transition: "color 400ms ease-in-out, box-shadow 400ms ease-in-out",
  };

  const content = (
    <>
      {/* Moving hover overlay */}
      <span
        className="absolute inset-0 transition-transform duration-[600ms] ease-in-out"
        style={{
          backgroundColor: hoverColor,
          transform: hovered ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 600ms ease-in-out",
        }}
      ></span>

      {/* Text + Icon Row */}
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

  return href ? (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={sharedClasses}
      style={baseStyles}
    >
      {content}
    </Link>
  ) : (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={sharedClasses}
      style={baseStyles}
    >
      {content}
    </button>
  );
};

export default Button;
