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
//     <div
//       // className={`min-h-screen flex transition-colors duration-300 ${isDarkMode ? "bg-[#0B0F19] text-slate-100" : "bg-slate-50 text-slate-800"}`}
//     >
      
// {/* className="flex-1 flex flex-col min-w-0 overflow-y-auto" */}
//       {/* 🚀 Main User Workspace Area */}
//       <div >
//         {/* 🧭 Top Header Section */}
//         {/* <header
//           className={`px-6 py-4 flex justify-between items-center border-b transition-colors duration-300 ${
//             isDarkMode
//               ? "bg-[#131926] border-slate-800"
//               : "bg-white border-slate-200"
//           }`}
//         >
//           <div>
//             <h1 className="text-xl font-bold tracking-tight">
//               User Workspace Hub
//             </h1>
//             <p className="text-xs text-slate-400 mt-0.5">
//               Manage your structural project pipelines and view your board roles
//               here.
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all hover:scale-105 ${
//                 isDarkMode
//                   ? "bg-slate-800 border-slate-700 text-yellow-400"
//                   : "bg-white border-slate-200 text-indigo-600 shadow-sm"
//               }`}
//             >
//               {isDarkMode ? "☀️ Light" : "🌙 Dark"}
//             </button>
//             <button
//               //   onClick={handleCreateBoard}
//               className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all"
//             >
//               + Create Board
//             </button>
//           </div>
//         </header> */}

//         {/* 📊 Active Workspace Boards Metrics with Roles */}
        
//       </div>
//     </div>
    <main className="p-6 space-y-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Your Active Boards ({boards.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Loop through created boards */}
              {boards.map((board: Board,index) => (
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
