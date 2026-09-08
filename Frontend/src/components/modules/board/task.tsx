"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ task }: { task: any }) => {
  const isDarkMode = false;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useSortable({
    id: String(task.id),
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-4 rounded-xl border hover:shadow-lg cursor-grab active:cursor-grabbing group touch-none ${isDragging ? "opacity-50 scale-[1.02] shadow-2xl z-50" : "" } ${ isDarkMode ? "bg-[#070A13]/90 border-slate-800/50 hover:border-slate-700" : "bg-white border-slate-200/60 hover:border-slate-300 shadow-sm" } `}
    >
      {/* Task Header */}

      <div className="flex justify-between items-start gap-2 mb-2">
        <h4 className="text-xs font-bold leading-snug break-words flex-1">
          {task.title}
        </h4>

        <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            className="
              text-[10px]
              p-0.5
              rounded
              hover:bg-slate-500/10
              text-slate-400
              hover:text-indigo-400
            "
            title="Edit Task"
          >
            ✏️
          </button>

          <button
            type="button"
            className="
              text-[10px]
              p-0.5
              rounded
              hover:bg-rose-500/10
              text-slate-400
              hover:text-rose-400
            "
            title="Delete Task"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Description */}

      {task.description && (
        <p className="text-[11px] text-slate-400 line-clamp-2 mb-3">
          {task.description}
        </p>
      )}

      {/* Footer */}

      <div className="flex items-center justify-between text-[9px] text-slate-500 font-medium pt-2 border-t border-slate-800/10">
        <span
          className={`
            px-1.5
            py-0.5
            rounded

            ${
              task.status === "DONE"
                ? "bg-emerald-500/10 text-emerald-400"
                : task.status === "IN_PROGRESS"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "bg-amber-500/10 text-amber-500"
            }
          `}
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
  );
};

export default Task;