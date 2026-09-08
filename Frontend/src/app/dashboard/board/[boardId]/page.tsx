import Board from "@/components/modules/board/board";
import { AddBoardMemberModal } from "@/components/ui/customUI/addBoardMember";
import { AddColumnModal } from "@/components/ui/customUI/addColumnModal";

import { boardService } from "@/service/board.service";
import { UserPlus } from "lucide-react";

import Link from "next/link";

export default async function FancyKanbanWorkspace({
  params,
  searchParams,
}: {
  params: Promise<{ boardId: string }>;
  searchParams: Promise<{
    updateColumn: string;
    columnModal: string;
    modal?: string;
    columnId?: string;
    shareBoardOpen?: string;
  }>;
}) {
  const isDarkMode = false;
  const { boardId } = await params;
  const query = await searchParams;
  const res = await boardService.getBoardInfo(boardId);
  const isModalOpen = query.modal === "true";
  const isColumnModalOpen = query.columnModal === "true";
  const isColumnUpdateModalOpen = query.updateColumn === "true";
  const isSharedBoardOpen = query.shareBoardOpen === "true";

  return (
    <div
      className={`min-h-screen min-w-full flex transition-colors duration-500 ${isDarkMode ? "bg-[#070A13] text-slate-100" : "bg-slate-50 text-slate-800"}`}
    >
      {/* 🚀 2. Main Content Board Layout */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 🧭 Top Action Subheader Control */}

        {/* 📝 Identity Description Header */}
        <div className="px-8 pt-8 pb-2 max-w-7xl flex justify-between items-center ">
          <div>
            <h2
              className={`text-2xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              E-commerce Project Pipeline
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Manage your active workspace tasks and seamlessly collaborate with
              team members.
            </p>
          </div>
          <Link
            href={`/dashboard/board/${boardId}?shareBoardOpen=true`}
            // onClick={handleShareBoard}
            className="bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-200 flex items-center justify-center gap-2 group tracking-wide border border-indigo-500/20"
          >
            {/* User Plus Icon - Perfect for sharing/inviting members */}
            <UserPlus className="w-5" />
            <span>Share Board</span>
          </Link>
          {isSharedBoardOpen && (
            <AddBoardMemberModal isOpen={isSharedBoardOpen} boardId={boardId} />
          )}
        </div>

        {/* 📊 Horizontal Kanban Grid Area */}
        <main className="flex-1 px-8 py-6 w-full">
          <div className="flex gap-5 items-start h-full pb-4 w-full">
            {/* mapping columns directly from your structure */}
            <Board
              initialColumns={res?.columns}
              boardId={boardId}
              isColumnUpdateModalOpen={isColumnUpdateModalOpen}
              isModalOpen={isModalOpen}
            />

            {/* Add New Column */}
            <div className="w-72 min-w-72 shrink-0">
              <Link
                href={`/dashboard/board/${boardId}?columnModal=true`}
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-dashed transition-all duration-300 shadow-sm bg-white text-indigo-600 border-slate-200/80 hover:text-indigo-500 hover:bg-indigo-50/50 hover:border-indigo-300/80"
              >
                <span className="text-sm font-bold">＋</span>
                Add New Column
              </Link>

              {isColumnModalOpen && (
                <AddColumnModal isOpen={isColumnModalOpen} boardId={boardId} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
