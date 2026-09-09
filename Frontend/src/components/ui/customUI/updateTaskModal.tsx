"use client";

import { createTask, updateTask } from "@/app/actions/task.action";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog";
import { Label } from "../label";
import { Input } from "../input";
import { Button } from "../button";

interface AddTaskDialogProps {
  isOpen: boolean;
  boardId: string;
  taskId: string; // কোন কলামে এড হবে তা ট্র্যাক করার জন্য
}

export function UpdateTaskDialog({
  isOpen,
  taskId,
  boardId,
}: AddTaskDialogProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const { assigneeId } = Object.fromEntries(formData.entries());
    const payload = {
      boardId: boardId,
      id: taskId,
      assigneeId: assigneeId as string,
    };
    const loadingId = toast.loading("Task Added..");
    try {
      const res = await updateTask(payload);
      console.log(res);
    } catch (err: any) {
      toast.error(err.message, { id: loadingId });
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() =>
        (window.location.href = `/dashboard/board/${boardId}`)
      }
    >
      <DialogContent className="sm:max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl">
        <form id="submit" className="space-y-4" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-900 tracking-tight">
              Update Task
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Add a new task to your workspace pipeline. Fill in the details
              below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            {/* ৩. Position Field */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="task-position"
                className="text-xs font-bold text-slate-600 uppercase tracking-wider"
              >
                AssigneeId
              </Label>
              <Input
                id="task-position"
                name="assigneeId"
                type="text"
                min="0"
                placeholder="e.g., 1"
                className="rounded-xl border-slate-200 focus-visible:ring-indigo-500 bg-transparent"
              />
            </div>
          </div>
          {/* Action Buttons */}
          <DialogFooter className="flex gap-2 sm:justify-end mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                (window.location.href = `/dashboard/board/${boardId}`)
              }
              className="rounded-xl text-xs font-semibold px-4 border-slate-200 hover:bg-slate-50 text-slate-600"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all px-4"
            >
              Update Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
