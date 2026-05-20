"use client";

import { useEffect, useState, useRef } from "react";

const AnimatedCar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState(false);
  const animRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 200, y: 200 });
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const pickTarget = () => {
      const maxW = window.innerWidth - 80;
      const maxH = Math.min(document.body.scrollHeight, window.innerHeight * 3);
      targetRef.current = {
        x: Math.random() * maxW,
        y: Math.random() * maxH,
      };
    };

    pickTarget();

    const animate = () => {
      const speed = 1.2;
      const dx = targetRef.current.x - posRef.current.x;
      const dy = targetRef.current.y - posRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 10) {
        pickTarget();
      } else {
        posRef.current.x += (dx / dist) * speed;
        posRef.current.y += (dy / dist) * speed;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        setRotation(angle);
        setFlip(dx < 0);
      }

      setPosition({ ...posRef.current });
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      className="fixed z-40 pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: `rotate(${rotation}deg) scaleX(${flip ? -1 : 1})`,
        transition: "transform 0.3s ease",
      }}
    >
      <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Car body */}
        <rect x="5" y="10" width="50" height="14" rx="4" fill="hsl(var(--primary))" />
        {/* Roof */}
        <path d="M18 10 L22 2 L40 2 L44 10" fill="hsl(var(--primary))" stroke="hsl(var(--primary-foreground))" strokeWidth="0.5" />
        {/* Windows */}
        <path d="M20 9 L23 3.5 L30 3.5 L30 9Z" fill="hsl(210 80% 70% / 0.6)" />
        <path d="M31 9 L31 3.5 L39 3.5 L42 9Z" fill="hsl(210 80% 70% / 0.6)" />
        {/* Wheels */}
        <circle cx="16" cy="24" r="5" fill="hsl(var(--foreground))" />
        <circle cx="16" cy="24" r="2.5" fill="hsl(var(--muted))" />
        <circle cx="44" cy="24" r="5" fill="hsl(var(--foreground))" />
        <circle cx="44" cy="24" r="2.5" fill="hsl(var(--muted))" />
        {/* Headlight */}
        <rect x="53" y="13" width="4" height="4" rx="1" fill="hsl(45 100% 60%)" />
        {/* Taillight */}
        <rect x="3" y="14" width="3" height="3" rx="1" fill="hsl(0 80% 50%)" />
      </svg>
    </div>
  );
};

export default AnimatedCar;
