// app/not-found.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft, LayoutGrid, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center select-none">
      {/* Glowing backdrop effect and Kanban-themed abstract art */}
      <div className="relative mb-8 flex justify-center items-center">
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full w-72 h-72 animate-pulse" />
        
        {/* Abstract 3-column Kanban layout skeleton */}
        <div className="relative bg-slate-800/50 border border-slate-700/60 p-6 rounded-2xl flex gap-4 backdrop-blur-sm max-w-md shadow-2xl">
          {/* Column 1 - Hidden/Faded */}
          <div className="w-24 h-36 bg-slate-700/30 rounded-xl p-2 flex flex-col gap-2 opacity-40">
            <div className="h-3 w-10 bg-slate-600 rounded" />
            <div className="h-10 bg-slate-600/50 rounded-lg" />
          </div>
          
          {/* Column 2 - Main Active Error Column */}
          <div className="w-28 h-40 bg-slate-700/50 border border-dashed border-blue-500/40 rounded-xl p-2 flex flex-col items-center justify-center gap-2 relative -translate-y-2 shadow-lg">
            <AlertCircle className="w-8 h-8 text-blue-400 animate-bounce" />
            <span className="text-3xl font-extrabold text-white tracking-wider">404</span>
          </div>
          
          {/* Column 3 - Hidden/Faded */}
          <div className="w-24 h-36 bg-slate-700/30 rounded-xl p-2 flex flex-col gap-2 opacity-40">
            <div className="h-3 w-12 bg-slate-600 rounded" />
            <div className="h-8 bg-slate-600/50 rounded-lg" />
            <div className="h-8 bg-slate-600/50 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="max-w-md space-y-3 z-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
          Board or Column Not Found
        </h1>
        <p className="text-slate-400 text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 z-10">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:bg-slate-750 hover:text-white transition-all active:scale-95 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>

        {/* Dashboard Link */}
        <Link
          href="/dashboard"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
        >
          <LayoutGrid className="w-4 h-4" />
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
