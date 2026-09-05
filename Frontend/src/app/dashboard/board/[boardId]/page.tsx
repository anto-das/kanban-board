"use client";

import { useState } from "react";
import Link from "next/link";
import { Column } from "@/src/types/column.type";
import { Task } from "@/src/types/task.typ";
import Logo from "@/src/component/ui/logo";
import { Delete, Edit2 } from "lucide-react";

export default function FancyKanbanWorkspace() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // ডিফল্ট ডার্ক মোড অন ফ্যান্সি ভাইবের জন্য

  // Dynamic State for Board Columns with Fancy Neon Glows
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "col-todo-111",
      title: "Todo",
      boardId: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      createdAt: "2026-09-04T08:11:38.120Z",
      updatedAt: "2026-09-04T08:11:38.120Z",
      tasks: [
        {
          id: "task-001",
          columnId: "col-todo-111",
          title: "Integrate Stripe Payment Gateway",
          description:
            "Implement subscription models and setup webhooks for payment success/failure events.",
          status: "TODO",
          position: 0,
          assigneeId: null,
          createdAt: "2026-09-04T12:26:48.451Z",
          updatedAt: "2026-09-04T12:26:48.451Z",
        },
        {
          id: "task-002",
          columnId: "col-todo-111",
          title: "Fix Profile Picture Upload Bug",
          description:
            "Users are getting 500 server error when uploading images larger than 5MB. Need to add client-side validation.",
          status: "TODO",
          position: 1,
          assigneeId: "user-alex-101",
          createdAt: "2026-09-04T13:10:00.000Z",
          updatedAt: "2026-09-04T13:10:00.000Z",
        },
      ],
    },
    {
      id: "col-progress-222",
      title: "In Progress",
      boardId: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      createdAt: "2026-09-04T08:16:17.993Z",
      updatedAt: "2026-09-04T08:16:17.993Z",
      tasks: [
        {
          id: "task-003",
          columnId: "col-progress-222",
          title: "Create Fancy Frontend Kanban Board",
          description:
            "Build a responsive grid layout using TailwindCSS with smooth animations and theme toggle support.",
          status: "IN_PROGRESS",
          position: 0,
          assigneeId: "f8fc145d-25f9-4754-b861-2b5ddca6ce68",
          createdAt: "2026-09-04T08:18:46.773Z",
          updatedAt: "2026-09-05T02:30:00.000Z",
        },
        {
          id: "task-004",
          columnId: "col-progress-222",
          title: "Setup JWT Authentication",
          description:
            "Write logic for access & refresh tokens, cookies handling, and secure routing inside middleware.",
          status: "IN_PROGRESS",
          position: 1,
          assigneeId: null,
          createdAt: "2026-09-04T12:27:00.675Z",
          updatedAt: "2026-09-04T12:27:00.675Z",
        },
      ],
    },
    {
      id: "col-review-333",
      title: "Feedback / Review",
      boardId: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      createdAt: "2026-09-04T10:17:25.515Z",
      updatedAt: "2026-09-04T10:17:25.515Z",
      tasks: [
        {
          id: "task-005",
          columnId: "col-review-333",
          title: "Optimize Database Queries",
          description:
            "Add indexing on frequently searched fields like 'email' and 'createdAt' to improve response times.",
          status: "FEEDBACK",
          position: 0,
          assigneeId: "user-sarah-202",
          createdAt: "2026-09-04T10:23:46.342Z",
          updatedAt: "2026-09-04T10:23:46.342Z",
        },
      ],
    },
    {
      id: "col-done-444",
      title: "Done",
      boardId: "e9fc69fb-06a9-49e6-8c33-d17eabf3e046",
      createdAt: "2026-09-04T10:13:16.579Z",
      updatedAt: "2026-09-04T10:13:16.579Z",
      tasks: [
        {
          id: "task-006",
          columnId: "col-done-444",
          title: "Project Initialization",
          description:
            "Create repo, configure ESLint, Prettier, and install initial system dependencies.",
          status: "DONE",
          position: 0,
          assigneeId: "77782680-1b1c-4bb6-9a2d-c08a9066ea80",
          createdAt: "2026-09-04T05:00:00.000Z",
          updatedAt: "2026-09-04T07:45:00.000Z",
        },
      ],
    },
  ]);

  const [tasks, setTasks] = useState<Record<string, Task[]>>({});

  // const handleAddColumn = () => {
  //   const title = prompt("Enter new column name:");
  //   const trimmedTitle = title?.trim();
  //   if (!trimmedTitle) return;
  //   const baseId =
  //     trimmedTitle
  //       .toLowerCase()
  //       .replace(/[^a-z0-9]+/g, "-")
  //       .replace(/^-|-$/g, "") || "column";
  //   const newId = columns.some((column) => column.id === baseId)
  //     ? `${baseId}-${Date.now()}`
  //     : baseId;
  //   setColumns((prev) => [
  //     ...prev,
  //     {
  //       id: newId,
  //       title: trimmedTitle.toUpperCase(),
  //       color: "bg-fuchsia-400",
  //       glow: "shadow-fuchsia-500/10",
  //     },
  //   ]);
  //   setTasks((prev) => ({ ...prev, [newId]: [] }));
  // };

  const handleUpdateColumn = (columnId: string, currentTitle: string) => {
    const title = prompt("Enter new column name:", currentTitle);
    if (!title?.trim()) return;
    setColumns((prev) =>
      prev.map((column) =>
        column.id === columnId
          ? { ...column, title: title.trim().toUpperCase() }
          : column,
      ),
    );
  };

  const handleAddTask = (columnId: string) => {
    const title = prompt("Enter task title:");
    if (!title?.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      columnId: "asdfasdfasf",
      title: title.trim(),
      description: "Click to expand workspace operational task metrics.",
      status: columns.find((column) => column.id === columnId)?.title || "TODO",
      position: tasks[columnId]?.length || 0,
      assigneeId: "",
      createdAt: "",
      updatedAt: "",
    };
    setTasks((prev) => ({
      ...prev,
      [columnId]: [...(prev[columnId] || []), newTask],
    }));
  };

  const handleDeleteColumn = (columnId: string) => {
    if (!confirm("Delete this column and all its tasks?")) return;
    setColumns((prev) => prev.filter((column) => column.id !== columnId));
    setTasks((prev) => {
      const next = { ...prev };
      delete next[columnId];
      return next;
    });
  };

  const handleUpdateTask = (taskId: string, task: Task) => {
    const title = prompt("Enter new task title:", task.title);
    if (!title?.trim()) return;
    setTasks((prev) =>
      Object.fromEntries(
        Object.entries(prev).map(([columnId, columnTasks]) => [
          columnId,
          columnTasks.map((item) =>
            item.id === taskId ? { ...item, title: title.trim() } : item,
          ),
        ]),
      ),
    );
  };

  const handleDeleteTask = (taskId: string, columnId: string) => {
    if (!confirm("Delete this task?")) return;
    setTasks((prev) => ({
      ...prev,
      [columnId]: (prev[columnId] || []).filter((task) => task.id !== taskId),
    }));
  };

  return (
    <div
      className={`min-h-screen flex transition-colors duration-500 ${isDarkMode ? "bg-[#070A13] text-slate-100" : "bg-slate-50 text-slate-800"}`}
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
        <main className="flex-1 px-8 py-6 overflow-x-auto">
          <div className="flex gap-5 items-start h-full pb-4">
            {/* mapping columns directly from your structure */}
            {columns.map((column) => (
              <div
                key={column.id}
                className={`w-72 min-w-72 max-h-[calc(100vh-250px)] flex flex-col p-4 rounded-2xl border shadow-xl transition-all duration-300  ${
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
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${isDarkMode ? "bg-[#070A13] text-indigo-400" : "bg-slate-200 text-slate-700"}`}
                    >
                      {column.tasks?.length || 0}
                    </span>
                  </div>

                  {/* Column Actions (Update / Delete) */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        handleUpdateColumn(column.id, column.title)
                      }
                      className="p-1 rounded hover:bg-slate-500/10 text-slate-400 hover:text-indigo-400 transition-colors"
                      title="Edit Column"
                    >
                      <Edit2 className="text-lg" />
                    </button>
                    <button
                      onClick={() => handleDeleteColumn(column.id)}
                      className="p-1 rounded hover:bg-rose-500/10 text-slate-400 hover:text-rose-400 transition-colors"
                      title="Delete Column"
                    >
                      <Delete />
                    </button>
                  </div>
                </div>

                {/* Visual Inline Action Trigger Button */}
                <button
                  onClick={() => handleAddTask(column.id)}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 border border-dashed transition-all duration-200 mb-2 ${
                    isDarkMode
                      ? "border-slate-800 bg-[#070A13]/40 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/20 hover:border-indigo-500/40"
                      : "border-slate-200 bg-white text-indigo-600 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-300"
                  }`}
                >
                  ＋ Add New Task
                </button>

                {/* Scrollable Tasks Wrapper Stack */}
                <div className="space-y-3 overflow-y-auto pr-0.5 flex-1 mt-1">
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
                              onClick={() => handleUpdateTask(task.id, task)}
                              className="text-[10px] p-0.5 rounded hover:bg-slate-500/10 text-slate-400 hover:text-indigo-400"
                              title="Edit Task"
                            >
                              ✏️
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteTask(task.id, column.id)
                              }
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

            {/* Add Column Trigger */}
            <button
              // onClick={handleAddColumn}
              className={`w-64 min-w-64 min-h-[120px] rounded-2xl border-2 border-dashed transition-all duration-300 ${
                isDarkMode
                  ? "border-slate-700 bg-[#0E1322]/40 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-300"
                  : "border-slate-300 bg-slate-50 text-slate-500 hover:border-indigo-400 hover:text-indigo-600"
              }`}
            >
              <span className="text-xl font-bold">＋</span>
              <span className="mt-2 block text-xs font-bold uppercase tracking-wider">
                Add Column
              </span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
