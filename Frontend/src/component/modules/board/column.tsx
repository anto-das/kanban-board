"use client";

import { Delete, Edit2, GripVertical } from "lucide-react";
import Link from "next/link";
import { useDroppable } from "@dnd-kit/core";

import {
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import { UpdateColumnModal } from "../../ui/updateColumnModal";
import { AddTaskDialog } from "../../ui/addToTaskModal";
import Task from "./task";

const Column = ({
  column,
  boardId,
  isModalOpen,
  isColumnUpdateModalOpen,
}: {
  column: any;
  boardId: string;
  isModalOpen: boolean;
  isColumnUpdateModalOpen: boolean;
}) => {
  const isDarkMode = false;
  const { setNodeRef: setTaskDropRef } = useDroppable({
    id: `column-${column.id}`,
  });
  // ==============================
  // COLUMN DRAG & DROP
  // ==============================

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`w-72 min-w-72 max-w-72 shrink-0 h-[calc(100vh-250px)] flex flex-col p-4 rounded-2xl border shadow-xl ${isDragging ? "opacity-50 rotate-2 scale-[1.02] shadow-2xl z-50" : ""} ${
          isDarkMode
            ? "bg-[#0E1322]/80 border-slate-800/40"
            : "bg-slate-100/60 border-slate-200/50"
        }`} {...attributes}  >
      {/* ================================= */}
      {/* COLUMN HEADER */}
      {/* ================================= */}

      <div className="flex justify-between items-center mb-2 shrink-0">
        <div className="flex items-center gap-2 max-w-[60%]">
          {/* DRAG HANDLE */}
          <button
            {...listeners}
            className="
              cursor-grab
              active:cursor-grabbing
              text-slate-400
              hover:text-indigo-500
              transition-colors
              touch-none
            "
            title="Drag column"
          >
            <GripVertical size={16} />
          </button>

          <span className="w-2 h-2 rounded-full flex-shrink-0 bg-indigo-500" />

          <h3 className="font-bold text-xs tracking-wider text-slate-400 uppercase truncate">
            {column.title}
          </h3>

          <span
            className={`
              text-[10px]
              font-mono
              font-bold
              px-2
              py-0.5
              rounded-full

              ${
                isDarkMode
                  ? "bg-[#070A13] text-indigo-400"
                  : "bg-slate-200 text-slate-700"
              }
            `}
          >
            {column.tasks?.length || 0}
          </span>
        </div>

        {/* ================================= */}
        {/* COLUMN ACTIONS */}
        {/* ================================= */}

        <div className="flex items-center gap-1.5 shrink-0">
          <Link
            href={`/dashboard/board/${boardId}?updateColumn=true&columnId=${column.id}`}
            className="
              p-1
              rounded
              hover:bg-slate-500/10
              text-slate-400
              hover:text-indigo-400
              transition-colors
            "
            title="Edit Column"
          >
            <Edit2 size={16} />
          </Link>

          {isColumnUpdateModalOpen && (
            <UpdateColumnModal
              isOpen={isColumnUpdateModalOpen}
              boardId={boardId}
              columnId={column.id}
            />
          )}

          <button
            className="
              p-1
              rounded
              hover:bg-rose-500/10
              text-slate-400
              hover:text-rose-400
              transition-colors
            "
            title="Delete Column"
          >
            <Delete size={16} />
          </button>
        </div>
      </div>

      {/* ================================= */}
      {/* ADD TASK */}
      {/* ================================= */}

      <div className="shrink-0 mb-2">
        <Link
          href={`/dashboard/board/${boardId}?modal=true&columnId=${column.id}`}
          className=" w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-dashed transition-all duration-300 shadow-sm bg-white text-indigo-600 border-slate-200/80 hover:text-indigo-500 hover:bg-indigo-50/50 hover:border-indigo-300/80
          ">
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

      {/* ================================= */}
      {/* TASKS */}
      {/* ================================= */}

      <SortableContext
        items={(column.tasks ?? []).map((task: any) => String(task.id))}
        strategy={verticalListSortingStrategy}
      >
        <div
          ref={setTaskDropRef}
          className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3"
        >
          {(column.tasks ?? []).map((task: any) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default Column;
