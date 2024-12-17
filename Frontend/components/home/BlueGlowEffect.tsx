import React from 'react';
import { motion } from 'framer-motion';

interface BlueGlowEffectProps {
  className?: string;
  color?: string;
  size?: number;
  blur?: number;
  opacity?: number;
  rotate?: number;
}

const BlueGlowEffect: React.FC<BlueGlowEffectProps> = ({
  className = '',
  color = '#4848FF',
  size = 400,
  blur = 500,
  opacity = 0.25,
  rotate = 36,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1 }}
      className={`absolute  ${className}`}
      style={{
        width: size,
        height: size * 0.825, // Maintain the aspect ratio from your example
        backgroundColor: color,
        filter: `blur(${blur}px)`,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
};

export default BlueGlowEffect;

