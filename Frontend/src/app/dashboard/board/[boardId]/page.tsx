import { AddColumnModal } from "@/src/component/ui/addColumnModal";
import { AddTaskDialog } from "@/src/component/ui/addToTaskModal";
import { UpdateColumnModal } from "@/src/component/ui/updateColumnModal";
import { boardService } from "@/src/service/board.service";
import { Column } from "@/src/types/column.type";
import { Task } from "@/src/types/task.typ";

import { Delete, Edit2 } from "lucide-react";
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
  }>;
}) {
  const isDarkMode = false;
  const { boardId } = await params;
  const query = await searchParams;
  const res = await boardService.getBoardInfo(boardId);
  const isModalOpen = query.modal === "true";
  const isColumnModalOpen = query.columnModal === "true";
  const isColumnUpdateModalOpen = query.updateColumn === "true";

  return (
    <div
      className={`min-h-screen min-w-full flex transition-colors duration-500 ${isDarkMode ? "bg-[#070A13] text-slate-100" : "bg-slate-50 text-slate-800"}`}
    >
      {/* 🚀 2. Main Content Board Layout */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 🧭 Top Action Subheader Control */}

        {/* 📝 Identity Description Header */}
        <div className="px-8 pt-8 pb-2">
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

        {/* 📊 Horizontal Kanban Grid Area */}
        <main className="flex-1 px-8 py-6 w-full">
          <div className="flex gap-5 items-start h-full pb-4 min-w-full">
            {/* mapping columns directly from your structure */}
            {res.columns?.map((column: any) => (
              <div
                key={column.id}
                className={`w-72 min-w-72 shrink-0 max-h-[calc(100vh-250px)] flex flex-col p-4 rounded-2xl border shadow-xl transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#0E1322]/80 border-slate-800/40"
                    : "bg-slate-100/60 border-slate-200/50"
                }`}
              >
                {/* Meta Column Info & Column Actions */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 max-w-[60%]">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 $`} />

                    <h3 className="font-bold text-xs tracking-wider text-slate-400 uppercase truncate">
                      {column.title}
                    </h3>

                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isDarkMode
                          ? "bg-[#070A13] text-indigo-400"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {column.tasks?.length || 0}
                    </span>
                  </div>

                  {/* Column Actions (Update / Delete) */}
                  <div className="flex items-center gap-1.5">
                    <Link
                      href={`/dashboard/board/${boardId}?updateColumn=true&columnId=${column.id}`}
                      className="p-1 rounded hover:bg-slate-500/10 text-slate-400 hover:text-indigo-400 transition-colors"
                      title="Edit Column"
                    >
                      <Edit2 className="text-lg" />
                    </Link>

                    {isColumnUpdateModalOpen && (
                      <UpdateColumnModal
                        isOpen={isColumnUpdateModalOpen}
                        boardId={boardId}
                        columnId={column.id}
                      />
                    )}

                    <button
                      
                      className="p-1 rounded hover:bg-rose-500/10 text-slate-400 hover:text-rose-400 transition-colors"
                      title="Delete Column"
                    >
                      <Delete />
                    </button>
                  </div>
                </div>

                {/* Visual Inline Action Trigger Button */}
                <div>
                  <Link
                    href={`/dashboard/board/${boardId}?modal=true&columnId=${column.id}`}
                    className="w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-dashed transition-all duration-300 shadow-sm bg-white text-indigo-600 border-slate-200/80 hover:text-indigo-500 hover:bg-indigo-50/50 hover:border-indigo-300/80"
                  >
                    <span className="text-sm font-bold">＋</span>
                    Add New Task
                  </Link>

                  {isModalOpen && (
                    <AddTaskDialog
                      isOpen={isModalOpen}
                      columnId={column.id}
                      boardId={boardId}
                    />
                  )}
                </div>

                {/* Scrollable Tasks Wrapper Stack */}
                <div className="space-y-3 overflow-y-auto pr-0.5 flex-1 min-h-0 mt-1">
                  {/* Mapping over nested column.tasks instead of global tasks object */}
                  {[...(column.tasks || [])]
                    .sort((a, b) => (a.position || 0) - (b.position || 0))
                    .map((task) => (
                      <div
                        key={task.id}
                        className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-lg cursor-grab group ${
                          isDarkMode
                            ? "bg-[#070A13]/90 border-slate-800/50 hover:border-slate-700 hover:shadow-indigo-500/5"
                            : "bg-white border-slate-200/60 hover:border-slate-300 shadow-sm shadow-slate-100"
                        }`}
                      >
                        {/* Task Header */}
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h4 className="text-xs font-bold leading-snug break-words flex-1">
                            {task.title}
                          </h4>

                          {/* Task Quick Actions */}
                          <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                            <button
                              // onClick={() => handleUpdateTask(task.id, task)}
                              className="text-[10px] p-0.5 rounded hover:bg-slate-500/10 text-slate-400 hover:text-indigo-400"
                              title="Edit Task"
                            >
                              ✏️
                            </button>

                            <button
                              // onClick={() =>
                              //   handleDeleteTask(task.id, column.id)
                              // }
                              className="text-[10px] p-0.5 rounded hover:bg-rose-500/10 text-slate-400 hover:text-rose-400"
                              title="Delete Task"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>

                        {/* Task Details Subtext */}
                        {task.description && (
                          <p className="text-[11px] text-slate-400 line-clamp-2 mb-3">
                            {task.description}
                          </p>
                        )}

                        {/* Task Footer Meta Data */}
                        <div className="flex items-center justify-between text-[9px] text-slate-500 font-medium pt-2 border-t border-slate-800/10">
                          <span
                            className={`px-1.5 py-0.5 rounded ${
                              task.status === "DONE"
                                ? "bg-emerald-500/10 text-emerald-400"
                                : task.status === "IN_PROGRESS"
                                  ? "bg-indigo-500/10 text-indigo-400"
                                  : "bg-amber-500/10 text-amber-500"
                            }`}
                          >
                            {task.status || "TODO"}
                          </span>

                          <span className="truncate max-w-[100px]">
                            {task.assigneeId
                              ? `👤 ${task.assigneeId.substring(0, 8)}...`
                              : "👤 Unassigned"}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}

            {/* Add New Column */}
            <div className="w-72 min-w-72 shrink-0">
              <Link
                href={`/dashboard/board/${boardId}?columnModal=true`}
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-dashed transition-all duration-300 shadow-sm bg-white text-indigo-600 border-slate-200/80 hover:text-indigo-500 hover:bg-indigo-50/50 hover:border-indigo-300/80"
              >
                <span className="text-sm font-bold">＋</span>
                Add New Task
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
