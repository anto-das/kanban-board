"use client";

import { getUser, logout } from "@/app/actions/auth.action";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import UserProfile from "./profile";


const SidebarFooter = () => {
  const [user, setUser] = useState<any>(null);
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
  useEffect(() => {
    (async () => {
      const res: any = await getUser();
      setUser(res.data);
    })();
  }, []);

  return (
    <div className="space-y-2">
      <UserProfile user={user} isDarkMode={false} />

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
