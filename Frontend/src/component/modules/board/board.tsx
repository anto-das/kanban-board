"use client";

import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useState } from "react";

import Column from "./column";
import Task from "./task";
import { toast } from "sonner";
import { moveTask } from "@/src/app/actions/task.action";

const Board = ({
  initialColumns,
  isModalOpen,
  boardId,
  isColumnUpdateModalOpen,
}: any) => {
  const [columns, setColumns] = useState(initialColumns);
  const [activeTask, setActiveTask] = useState<any>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    const taskId = String(active.id);
    for (const column of columns) {
      const task = column.tasks?.find(
        (task: any) => String(task.id) === taskId,
      );

      if (task) {
        setActiveTask(task);
        break;
      }
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveTask(null);

    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    // ==========================================
    // FIND SOURCE COLUMN + TASK
    // ==========================================

    let sourceColumnIndex = -1;
    let sourceTaskIndex = -1;

    columns.forEach((column: any, columnIndex: number) => {
      const taskIndex = (column.tasks ?? []).findIndex(
        (task: any) => String(task.id) === activeId,
      );

      if (taskIndex !== -1) {
        sourceColumnIndex = columnIndex;
        sourceTaskIndex = taskIndex;
      }
    });

    if (sourceColumnIndex === -1) return;

    // ==========================================
    // FIND DESTINATION COLUMN
    // ==========================================

    let destinationColumnIndex = -1;
    let destinationTaskIndex = -1;

    // ------------------------------------------
    // CASE 1:
    // Dropped directly on another TASK
    // ------------------------------------------

    columns.forEach((column: any, columnIndex: number) => {
      const taskIndex = (column.tasks ?? []).findIndex(
        (task: any) => String(task.id) === overId,
      );

      if (taskIndex !== -1) {
        destinationColumnIndex = columnIndex;
        destinationTaskIndex = taskIndex;
      }
    });

    // ------------------------------------------
    // CASE 2:
    // Dropped on COLUMN EMPTY AREA
    // ------------------------------------------

    if (overId.startsWith("column-")) {
      const columnId = overId.replace("column-", "");

      destinationColumnIndex = columns.findIndex(
        (column: any) => String(column.id) === columnId,
      );

      if (destinationColumnIndex !== -1) {
        destinationTaskIndex =
          columns[destinationColumnIndex].tasks?.length ?? 0;
      }
    }

    if (destinationColumnIndex === -1) return;

    // ==========================================
    // DATA FOR API
    // ==========================================

    const taskId = activeId;

    const columnId = String(columns[destinationColumnIndex].id);

    const position = destinationTaskIndex;

    const payload = {
      taskId,
      targetedColumnId: columnId,
      targetedPosition: position,
      boardId: String(boardId),
    };

    // ==========================================
    // SAME COLUMN
    // ==========================================

    if (sourceColumnIndex === destinationColumnIndex) {
      if (sourceTaskIndex === destinationTaskIndex) {
        return;
      }

      setColumns((prev: any[]) => {
        const newColumns = [...prev];

        const tasks = [...(newColumns[sourceColumnIndex].tasks ?? [])];

        newColumns[sourceColumnIndex] = {
          ...newColumns[sourceColumnIndex],
          tasks: arrayMove(tasks, sourceTaskIndex, destinationTaskIndex),
        };

        return newColumns;
      });

      return;
    }

    // DIFFERENT COLUMN

    setColumns((prev: any[]) => {
      const newColumns = [...prev];

      const sourceColumn = newColumns[sourceColumnIndex];

      const destinationColumn = newColumns[destinationColumnIndex];

      const sourceTasks = [...(sourceColumn.tasks ?? [])];

      const destinationTasks = [...(destinationColumn.tasks ?? [])];

      // Remove task from source
      const [movedTask] = sourceTasks.splice(sourceTaskIndex, 1);

      if (!movedTask) return prev;

      // Update task's columnId
      const updatedTask = {
        ...movedTask,
        columnId: destinationColumn.id,
      };

      // Insert into destination
      destinationTasks.splice(destinationTaskIndex, 0, updatedTask);

      // Update source column
      newColumns[sourceColumnIndex] = {
        ...sourceColumn,
        tasks: sourceTasks,
      };

      // Update destination column
      newColumns[destinationColumnIndex] = {
        ...destinationColumn,
        tasks: destinationTasks,
      };

      return newColumns;
    });
    const previousColumns = columns;
    const loadingId = toast.loading("task shift loading....");
    try {
      const res = await moveTask(payload);
      toast.success(res.message, { id: loadingId });
    } catch (err: any) {
      setColumns(previousColumns);
      toast.error(err.message || "Task moved Failed", { id: loadingId });
    }
  };
  return (
    <DndContext
      id="kanban-dnd-context"
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveTask(null)}
    >
      <SortableContext
        items={columns.map((column: any) => String(column.id))}
        strategy={horizontalListSortingStrategy}
      >
        <div className="flex gap-5 items-start overflow-auto max-w-7xl ">
          {columns.map((column: any) => (
            <Column
              key={column.id}
              column={column}
              boardId={boardId}
              isModalOpen={isModalOpen}
              isColumnUpdateModalOpen={isColumnUpdateModalOpen}
            />
          ))}
        </div>
      </SortableContext>

      <DragOverlay>
        {activeTask ? <Task task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Board;
