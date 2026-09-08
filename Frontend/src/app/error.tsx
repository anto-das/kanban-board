// app/error.tsx
'use client';

import { useEffect } from 'react';
import { RefreshCw, LayoutGrid, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error('Captured Runtime Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center select-none">
      {/* Glowing backdrop effect with Error Icon */}
      <div className="relative mb-8 flex justify-center items-center">
        <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full w-72 h-72 animate-pulse" />
        
        {/* Error Symbol Box */}
        <div className="relative bg-slate-800/50 border border-red-500/30 p-8 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm shadow-2xl w-48 h-48">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl mb-2">
            <ShieldAlert className="w-12 h-12 text-red-400" />
          </div>
          <span className="text-xs font-mono text-red-400/80 bg-red-950/40 px-2 py-0.5 rounded border border-red-900/50">
            CRASH_DETECTED
          </span>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="max-w-md space-y-3 z-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
          Something went wrong!
        </h1>
        <p className="text-slate-400 text-base leading-relaxed">
          An unexpected error occurred while processing your workspace data. Try refreshing the state block.
        </p>
        
        {error.digest && (
          <p className="text-xs font-mono text-slate-500 bg-slate-950/30 py-1.5 px-3 rounded-lg inline-block border border-slate-800">
            Error ID: {error.digest}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 z-10">
        {/* Try Again Button (Calls Next.js reset function) */}
        <button
          onClick={() => reset()}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-500 shadow-lg shadow-red-600/20 transition-all active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>

        {/* Home Link fallback */}
        <Link
          href="/dashboard"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:bg-slate-750 hover:text-white transition-all active:scale-95 shadow-sm"
        >
          <LayoutGrid className="w-4 h-4" />
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
