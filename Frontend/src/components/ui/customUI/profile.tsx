"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";

const UserProfile = ({ user, isDarkMode }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopyId = async () => {
    if (!user?.id) return;

    try {
      await navigator.clipboard.writeText(user.id);

      setCopied(true);
      toast.success("User ID copied!");

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      toast.error("Failed to copy ID");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={`flex items-center gap-3 p-2 rounded-xl border cursor-pointer ${
              isDarkMode
                ? "border-slate-800 bg-[#0B0F19]"
                : "border-slate-100 bg-slate-50"
            }`}
          >
            {/* Avatar */}
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm shrink-0">
              {user?.name?.slice(0, 2)}
            </div>

            {/* User info */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate">{user?.name}</p>

              <p className="text-[10px] text-slate-400 truncate">
                {user?.email}
              </p>
            </div>
          </div>
        </TooltipTrigger>

        <TooltipContent
          side="top"
          align="center"
          className="p-0 border-0 bg-transparent"
        >
          <button
            type="button"
            onClick={handleCopyId}
            className="flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-xs text-white shadow-lg hover:bg-slate-800 transition-colors cursor-pointer"
            title="Click to copy"
          >
            <span className="max-w-[220px] truncate">
              {copied ? "Copied!" : user?.id}
            </span>

            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UserProfile;
