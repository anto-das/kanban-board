"use client";

import DashboardSidebar from "@/components/ui/customUI/dashboardSidebar";
import Logo from "@/components/ui/customUI/logo";
import SidebarFooter from "@/components/ui/customUI/sidebarFooter";
import { FolderPlus, UserPlus } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isDashboard = pathname === "/dashboard";
  const isDarkMode = false;
  return (
    <div>
      <header
        className={`px-6 py-4 flex justify-between items-center border-b transition-colors duration-300 ${
          isDarkMode
            ? "bg-[#131926] border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            User Workspace Hub
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage your structural project pipelines and view your board roles
            here.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            // onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all hover:scale-105 ${
              isDarkMode
                ? "bg-slate-800 border-slate-700 text-yellow-400"
                : "bg-white border-slate-200 text-indigo-600 shadow-sm"
            }`}
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <Link
            href={"/dashboard"}
            // onClick={handleCreateBoard}
            className="bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-200 flex items-center justify-center gap-2 group tracking-wide border border-indigo-500/20"
          >
            {/* Folder Plus Icon - Perfect for creating a new board workspace */}
            <FolderPlus className="w-5" />
            <span>Create Board</span>
          </Link>
        </div>
      </header>
      {/* 💾 Sidebar Component */}
      <div className="flex">
        <aside
          className={`w-64 border-r hidden md:flex flex-col p-5 justify-between transition-colors duration-300 ${isDarkMode ? "bg-[#131926] border-slate-800" : "bg-white border-slate-200"} `}
        >
          <div className="space-y-6">
            {/* Logo */}
            <Link href={"/"} className="flex items-center gap-2 px-2">
              <Logo />
            </Link>

            {/* Navigation Links */}
            <DashboardSidebar />
          </div>

          {/* User Account Info & Logout Button */}
          <SidebarFooter />
        </aside>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
