"use client";
import { Board } from "@/src/types/board.type";
import Link from "next/link";

const MyBoard = ({
  board,
  isDarkMode = true,
}: {
  board: Board;
  isDarkMode?: boolean;
}) => {
  // মেম্বার লিস্ট থেকে কারেন্ট ইউজারের রোল বের করা (আপাতত প্রথম মেম্বারের রোল ডিফাইন করা হলো নিরাপদ উপায়ে)
  const userRole = board.members?.[0]?.memberRole || "ADMIN";

  // রোল অনুযায়ী ডাইনামিক স্টাইল এবং আইকন নির্ধারণ
  const getRoleConfig = (role: string) => {
    switch (role) {
      case "ADMIN":
        return {
          icon: "👑",
          label: "Admin",
          styles: isDarkMode
            ? "bg-rose-500/10 border-rose-500/20 text-rose-400"
            : "bg-rose-50 border-rose-100 text-rose-700",
        };
      case "MEMBER":
        return {
          icon: "👤",
          label: "Member",
          styles: isDarkMode
            ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
            : "bg-indigo-50 border-indigo-100 text-indigo-700",
        };
      default:
        return {
          icon: "👁️",
          label: "Viewer",
          styles: isDarkMode
            ? "bg-slate-800 border-slate-700 text-slate-400"
            : "bg-slate-100 border-slate-200 text-slate-600",
        };
    }
  };

  const roleConfig = getRoleConfig(userRole);

  return (
    <div
      className={`p-6 rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-44 group ${
        isDarkMode
          ? "bg-[#0E1322]/90 border-slate-800/60 hover:border-indigo-500/30 hover:shadow-indigo-500/5"
          : "bg-white border-slate-200/80 hover:border-indigo-200 hover:shadow-slate-100"
      }`}
    >
      <div>
        {/* Header Section */}
        <div className="flex justify-between items-start gap-4">
          <h3
            className={`font-bold text-sm tracking-tight line-clamp-2 transition-colors flex-1 ${
              isDarkMode
                ? "text-slate-200 group-hover:text-white"
                : "text-slate-800 group-hover:text-slate-900"
            }`}
          >
            {board.name}
          </h3>

          {/* 🏷️ Dynamic Role Badge */}
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1.5 shadow-sm shrink-0 ${roleConfig.styles}`}
          >
            <span>{roleConfig.icon}</span>
            <span className="tracking-wide uppercase text-[9px]">
              {roleConfig.label}
            </span>
          </span>
        </div>

        {/* Dynamic Creation Subtitle */}
        {board.createdAt && (
          <p className="text-[10px] text-slate-500 mt-1">
            Created:{" "}
            {new Date(board.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}
      </div>

      {/* Footer Section */}
      <div
        className={`flex justify-between items-center pt-3 border-t ${
          isDarkMode ? "border-slate-800/60" : "border-slate-100"
        }`}
      >
        {/* Columns count tracker badge */}
        <div className="flex items-center gap-1.5">
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold ${
              isDarkMode
                ? "bg-[#070A13] text-indigo-400 border border-indigo-500/10"
                : "bg-indigo-50 text-indigo-600 border border-indigo-100"
            }`}
          >
            {board._count?.columns || 0}
          </span>
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
            Columns
          </span>
        </div>

        {/* Link Button with Hover Slide Effect */}
        <Link href={`/dashboard/board/${board.id}`} className="no-underline">
          <span className="text-xs font-semibold text-indigo-500 hover:text-indigo-400 transition-colors flex items-center gap-1 group/btn">
            Open Board
            <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
              →
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MyBoard;
