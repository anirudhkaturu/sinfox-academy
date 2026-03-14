// app/components/ScrambleText.tsx
"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  alwaysAnimate?: boolean
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const ScrambleText = React.memo<ScrambleTextProps>(
  function ScrambleText({ text, className = "" }) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = useCallback(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      let iteration = 0;
      const maxIterations = text.length * 3;

      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < Math.floor(iteration / 3)) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );

        if (iteration >= maxIterations) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(text);
        }
        iteration++;
      }, 30);
    }, [text]);

    useEffect(() => {
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, []);

    return (
      <span onMouseEnter={scramble} className={`cursor-pointer ${className}`}>
        {displayText}
      </span>
    );
  },
);
