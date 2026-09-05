"use client";

import Link from "next/link";
import Navbar from "../../ui/navbar";
import Footer from "../../ui/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-50 via-slate-50 to-white text-slate-800 flex flex-col font-sans selection:bg-indigo-600 selection:text-white relative overflow-hidden">
      {/* 🔮 Background Fancy Ambient Light Highlights */}
      <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-linear-to-br from-indigo-200/40 to-purple-200/0 rounded-full blur-3xl -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-125 h-125 bg-linear-to-bl from-pink-200/30 to-cyan-200/0 rounded-full blur-3xl -z-10" />

      {/* 🧭 Navbar Section */}
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 flex flex-col items-center justify-center text-center py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 border border-indigo-100 text-xs font-semibold text-indigo-600 mb-6 backdrop-blur-sm shadow-sm">
          ✨ Simple. Powerful. Fast.
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl leading-tight mb-6 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
          Manage Your Daily Tasks with{" "}
          <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ultimate Control
          </span>
        </h1>

        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
          A fancy, minimalist Kanban board built for developers to track project
          pipeline, sprint progress, and boost productivity flawlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto z-10">
          <Link
            href="/login"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5 text-center"
          >
            Open Your Board
          </Link>
          <a
            href="#features"
            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 font-semibold px-8 py-4 rounded-xl shadow-sm transition-all text-center"
          >
            Learn More
          </a>
        </div>

        <div
          id="features"
          className="w-full max-w-5xl bg-white/80 border border-slate-200 rounded-2xl p-6 shadow-xl shadow-slate-200/60 backdrop-blur-md relative"
        >
          {/* Decorative glowing border accent */}
          <div className="absolute -top-px left-10 right-10 h-px bg-linear-to-r from-transparent via-indigo-400 to-transparent opacity-50" />

          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <div className="w-3 h-3 rounded-full bg-slate-200" />
            <span className="text-xs text-slate-400 ml-2 font-mono">
              workspace / task-orbit
            </span>
          </div>

          {/* Grid Layout representing Kanban Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {/* Column 1 */}
            <div className="bg-slate-50/70 border border-slate-100 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-sm text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> To Do
                </h3>
                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md font-mono font-semibold">
                  2
                </span>
              </div>
              <div className="space-y-2">
                <div className="bg-white border border-slate-200/60 p-3 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-slate-700">
                    Connect PostgreSQL Database
                  </p>
                </div>
                <div className="bg-white border border-slate-200/60 p-3 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-slate-700">
                    Design dynamic Dashboard layout
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-indigo-50/40 border border-indigo-100 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-sm text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" /> In
                  Progress
                </h3>
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md font-mono font-semibold">
                  1
                </span>
              </div>
              <div className="bg-white border border-indigo-200/80 p-3 rounded-lg shadow-sm ring-1 ring-indigo-500/5">
                <p className="text-sm font-semibold text-slate-700">
                  Implement JWT Auth & Cookie Storage
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="text-[10px] bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded font-bold">
                    Auth
                  </span>
                  <span className="text-[10px] bg-rose-50 text-rose-600 border border-rose-100 px-2 py-0.5 rounded font-bold">
                    High
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-slate-50/70 border border-slate-100 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-sm text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Done
                </h3>
                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md font-mono font-semibold">
                  1
                </span>
              </div>
              <div className="bg-white/60 border border-slate-100 p-3 rounded-lg opacity-60 line-through">
                <p className="text-sm font-medium text-slate-500">
                  Initialize Next.js & Express boilerplates
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 📋 Footer */}
      <Footer />
    </div>
  );
}
