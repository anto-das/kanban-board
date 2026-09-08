"use client";
import { useState } from "react";

const Logo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="flex items-center gap-2 px-2">
      <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
        O
      </div>
      <span
        className={`text-xl font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
      >
        TaskOrbit
      </span>
    </div>
  );
};

export default Logo;
