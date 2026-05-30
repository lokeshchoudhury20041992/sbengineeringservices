import React, { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt in degrees. Lower = subtler. */
  maxTilt?: number;
  /** Optional inline style (e.g. transitionDelay for staggered reveals). */
  style?: React.CSSProperties;
  id?: string;
  /** This project ships no React type defs, so `key` isn't auto-stripped from
   * typed props — declare it explicitly. React still consumes it at runtime. */
  key?: string | number;
}

/**
 * Wraps content in a card that tilts in real 3D toward the cursor and shows a
 * moving light glare. Built on CSS custom properties so it stays cheap and
 * automatically disables itself for users who prefer reduced motion (handled in
 * index.css). Place inside a `.perspective-1000` container for the 3D depth to
 * read correctly.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  style,
  id,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    // Rotate opposite the cursor position for a "leaning toward you" feel
    const rotateY = (px - 0.5) * 2 * maxTilt;
    const rotateX = -(py - 0.5) * 2 * maxTilt;
    el.style.setProperty("--tilt-x", `${rotateX}deg`);
    el.style.setProperty("--tilt-y", `${rotateY}deg`);
    el.style.setProperty("--glare-x", `${px * 100}%`);
    el.style.setProperty("--glare-y", `${py * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      id={id}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`tilt-card ${className}`}
    >
      {children}
      <span className="tilt-glare" aria-hidden="true" />
    </div>
  );
}
