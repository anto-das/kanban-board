"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/src/component/ui/logo";

import DashboardSidebar from "@/src/component/ui/dashboardSidebar";
import SidebarFooter from "@/src/component/ui/sidebarFooter";
import MyBoard from "./myBoard";
import { Board } from "@/src/types/board.type";

// import Cookies from "js-cookie";

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [boards, setBoards] = useState<Board[]>([
    {
      id: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      name: "Project Apollo Dashboard",
      ownerId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
      createdAt: "2026-09-04T08:02:07.357Z",
      updatedAt: "2026-09-04T08:02:07.357Z",
      _count: {
        columns: 4,
      },
      members: [
        // {
        //   memberRole: "ADMIN",
        // },
        {
          memberRole: "MEMBER",
        },
        // {
        //   memberRole: "VIEWER",
        // },
      ],
    },
    {
      id: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      name: "Project Apollo Dashboard",
      ownerId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
      createdAt: "2026-09-04T08:02:07.357Z",
      updatedAt: "2026-09-04T08:02:07.357Z",
      _count: {
        columns: 4,
      },
      members: [
        // {
        //   memberRole: "ADMIN",
        // },
        {
          memberRole: "MEMBER",
        },
        // {
        //   memberRole: "VIEWER",
        // },
      ],
    },
    {
      id: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      name: "Project Apollo Dashboard",
      ownerId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
      createdAt: "2026-09-04T08:02:07.357Z",
      updatedAt: "2026-09-04T08:02:07.357Z",
      _count: {
        columns: 4,
      },
      members: [
        // {
        //   memberRole: "ADMIN",
        // },
        {
          memberRole: "MEMBER",
        },
        // {
        //   memberRole: "VIEWER",
        // },
      ],
    },
    {
      id: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      name: "Project Apollo Dashboard",
      ownerId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
      createdAt: "2026-09-04T08:02:07.357Z",
      updatedAt: "2026-09-04T08:02:07.357Z",
      _count: {
        columns: 4,
      },
      members: [
        // {
        //   memberRole: "ADMIN",
        // },
        {
          memberRole: "MEMBER",
        },
        // {
        //   memberRole: "VIEWER",
        // },
      ],
    },
    {
      id: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      name: "Project Apollo Dashboard",
      ownerId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
      createdAt: "2026-09-04T08:02:07.357Z",
      updatedAt: "2026-09-04T08:02:07.357Z",
      _count: {
        columns: 4,
      },
      members: [
        // {
        //   memberRole: "ADMIN",
        // },
        {
          memberRole: "MEMBER",
        },
        // {
        //   memberRole: "VIEWER",
        // },
      ],
    },
    {
      id: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      name: "Project Apollo Dashboard",
      ownerId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
      createdAt: "2026-09-04T08:02:07.357Z",
      updatedAt: "2026-09-04T08:02:07.357Z",
      _count: {
        columns: 4,
      },
      members: [
        // {
        //   memberRole: "ADMIN",
        // },
        {
          memberRole: "MEMBER",
        },
        // {
        //   memberRole: "VIEWER",
        // },
      ],
    },
    {
      id: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      name: "Project Apollo Dashboard",
      ownerId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
      createdAt: "2026-09-04T08:02:07.357Z",
      updatedAt: "2026-09-04T08:02:07.357Z",
      _count: {
        columns: 4,
      },
      members: [
        // {
        //   memberRole: "ADMIN",
        // },
        {
          memberRole: "MEMBER",
        },
        // {
        //   memberRole: "VIEWER",
        // },
      ],
    },
    {
      id: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      name: "Project Apollo Dashboard",
      ownerId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
      createdAt: "2026-09-04T08:02:07.357Z",
      updatedAt: "2026-09-04T08:02:07.357Z",
      _count: {
        columns: 4,
      },
      members: [
        // {
        //   memberRole: "ADMIN",
        // },
        {
          memberRole: "MEMBER",
        },
        // {
        //   memberRole: "VIEWER",
        // },
      ],
    },
    {
      id: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      name: "Project Apollo Dashboard",
      ownerId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
      createdAt: "2026-09-04T08:02:07.357Z",
      updatedAt: "2026-09-04T08:02:07.357Z",
      _count: {
        columns: 4,
      },
      members: [
        // {
        //   memberRole: "ADMIN",
        // },
        {
          memberRole: "MEMBER",
        },
        // {
        //   memberRole: "VIEWER",
        // },
      ],
    },
  ]);

  const router = useRouter();

  // 🚪 Handle User Logout Action
  //   const handleLogout = () => {
  //     Cookies.remove("token");
  //     Cookies.remove("user");
  //     alert("Logged out successfully!");
  //     router.push("/login");
  //   };

  // ➕ Handle Adding a New Board
  //   const handleCreateBoard = () => {
  //     const boardName = prompt("Enter new board name:");
  //     if (boardName && boardName.trim() !== "") {
  //       setBoards([
  //         boards,
  //         { id: Date.now(), name: boardName.trim(), taskCount: 0 },
  //       ]);
  //     }
  //   };

  return (
    <main className="p-6 space-y-6">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
          Your Active Boards ({boards.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Loop through created boards */}
          {boards.map((board: Board, index) => (
            <MyBoard key={index} board={board} />
          ))}

          {/* Dotted "Add New Board" Placeholder Box */}
          <div
            // onClick={handleCreateBoard}
            className={`h-40 rounded-xl border border-dashed flex flex-col items-center justify-center transition-all cursor-pointer group ${
              isDarkMode
                ? "border-slate-800 hover:bg-slate-800/40 hover:border-slate-700"
                : "border-slate-300 hover:bg-slate-100 hover:border-slate-400"
            }`}
          >
            <span className="text-xl text-slate-400 group-hover:text-indigo-500 transition-colors">
              ＋
            </span>
            <p className="text-xs font-semibold text-slate-400 group-hover:text-indigo-500 transition-colors mt-1">
              Add New Board
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
