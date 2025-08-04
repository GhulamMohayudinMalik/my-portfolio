import React from "react";

function Divisor() {
  return (
    <div className="w-full max-w-7xl mx-auto">
  <svg className="w-full h-4" viewBox="0 0 400 16" fill="none">
    <path
      d="M0 8 Q100 2 200 8 T400 8"
      stroke="url(#gradient)"
      strokeWidth="2"
      fill="none"
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
        <stop offset="25%" stopColor="rgba(6, 182, 212, 0.8)" />
        <stop offset="75%" stopColor="rgba(147, 51, 234, 0.8)" />
        <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
      </linearGradient>
    </defs>
  </svg>
</div>
  );
}

export default Divisor;
