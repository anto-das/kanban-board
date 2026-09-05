"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import SidebarFooter from "./sidebarFooter";

const DashboardSidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const params = useParams();
  const pathname = usePathname(); // কারেন্ট URL এর পাথ ট্র্যাক করার জন্য

  const boardId = params.boardId;
  console.log(boardId);

  // ডাইনামিক অ্যাক্টিভ স্টেট চেক করার কন্ডিশন
  const isDashboardActive = pathname === "/dashboard";
  const isBoardActive = pathname.startsWith("/board/") || pathname === "/";

  return (
    <div
      className={`flex-1 flex flex-col min-w-0 overflow-y-auto min-h-full p-4 ${isDarkMode ? "bg-[#070A13]" : "bg-white"}`}
    >
      <nav className="space-y-1.5">
        {/* 📊 Dashboard Link */}
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
            isDashboardActive
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
              : isDarkMode
                ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          📊 Dashboard
        </Link>

        {/* 📋 My Board Link (Dynamic Routing Handle) */}
        <Link
          href={boardId ? `/dashboard/board/${boardId}` : "/"}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            isBoardActive
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
              : isDarkMode
                ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          📋 My Board
        </Link>

        {/* ➕ Add New Board Action Trigger */}
        <button
          // onClick={handleCreateBoard}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
            isDarkMode
              ? "text-emerald-400 hover:bg-emerald-950/30"
              : "text-emerald-600 hover:bg-emerald-50"
          }`}
        >
          ➕ Add New Board
        </button>
      </nav>
      
    </div>
  );
};

export default DashboardSidebar;
