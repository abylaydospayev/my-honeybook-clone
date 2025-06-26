'use client';
import { greatVibes } from "@/app/layout"; // Adjust path if needed

export function Signature() {
  return (
    <div
      className={greatVibes.className}
      style={{
        fontSize: "2.5rem",
        color: "#222",
        fontWeight: 500,
        letterSpacing: "0.05em",
        fontStyle: "italic",
        userSelect: "none",       // prevent accidental selection
        transform: "rotate(-2deg)", // slight tilt for natural look
        margin: "1rem 0",
      }}
    >
      Vozduhadan
    </div>
  );
}
