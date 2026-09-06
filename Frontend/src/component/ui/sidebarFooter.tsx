"use client";

import { logout } from "@/src/app/actions/auth.action";
import { toast } from "sonner";

const SidebarFooter = () => {
  const isDarkMode = false;
  const handleLogout = async () => {
    const loadingId = toast.loading("log out...");
    try {
      const res = await logout();
      window.location.href = "/";

      toast.success("logout successfully", { id: loadingId });
    } catch (e: any) {
      toast.error(e.message, { id: loadingId });
    }
  };
  return (
    <div className="space-y-2">
      <div
        className={`flex items-center gap-3 p-2 rounded-xl border ${isDarkMode ? "border-slate-800 bg-[#0B0F19]" : "border-slate-100 bg-slate-50"}`}
      >
        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
          JD
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold truncate">John Doe</p>
          <p className="text-[10px] text-slate-400 truncate">
            john@example.com
          </p>
        </div>
      </div>

      {/* 🚪 Explicit Logout Button Trigger */}
      <button
        onClick={handleLogout}
        className="w-full text-center text-xs font-semibold py-2 rounded-lg border border-rose-500/20 text-rose-500 bg-rose-500/5 hover:bg-rose-500/10 transition-colors"
      >
        Logout From Account
      </button>
    </div>
  );
};

export default SidebarFooter;
