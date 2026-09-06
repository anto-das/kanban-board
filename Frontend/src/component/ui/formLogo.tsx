import React from "react";

const FormLogo = () => {
  const isDarkMode = false;
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 mb-2">
        {/* Task Orbit Logo Icon */}
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-600/20">
          <span className="text-white text-base font-black">O</span>
        </div>
        <span
          className={`font-extrabold text-lg tracking-tight transition-colors ${
            isDarkMode
              ? "bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"
              : "text-slate-900"
          }`}
        >
          Task Orbit
        </span>
      </div>
      <h2
        className={`text-xl font-bold tracking-tight transition-colors ${isDarkMode ? "text-white" : "text-slate-800"}`}
      >
        Create your workspace
      </h2>
      <p className="text-xs text-slate-400 mt-1">
        Start managing your projects like a pro.
      </p>
    </div>
  );
};

export default FormLogo;
