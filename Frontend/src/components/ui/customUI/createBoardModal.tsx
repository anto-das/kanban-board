"use client";

import { createBoard } from "@/app/actions/board.action";
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

interface CreateBoardDialogProps {
  isOpen: boolean;
  // boardId: string;
  // columnId: string; // কোন কলামে এড হবে তা ট্র্যাক করার জন্য
}

export default function CreateBoardDialog({ isOpen }: CreateBoardDialogProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const { name } = Object.fromEntries(formData.entries());
    const payload = {
      name: name as string,
    };
    console.log(payload);
    const loadingId = toast.loading("Task Added..");
    try {
      const res = await createBoard(payload);
      const result = res as { success?: unknown; message?: unknown };
      if (result.success === true) {
        toast.success(String(result.message ?? "Board created successfully"), {
          id: loadingId,
        });
        window.location.href = `/dashboard`;
      } else {
        toast.error(String(result.message ?? "Failed to create board"), {
          id: loadingId,
        });
      }
    } catch (err: any) {
      toast.error(err.message, { id: loadingId });
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => (window.location.href = `/dashboard`)}
    >
      <DialogContent className="sm:max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl">
        <form id="submit" className="space-y-4" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-900 tracking-tight">
              Create New Task
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Add a new task to your workspace pipeline. Fill in the details
              below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            {/* ১. Task Title Field */}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="task-title"
                className="text-xs font-bold text-slate-600 uppercase tracking-wider"
              >
                Board Name*
              </Label>
              <Input
                id="task-title"
                name="name"
                placeholder="e.g., Integrate Axios Client"
                required
                className="rounded-xl border-slate-200 focus-visible:ring-indigo-500 bg-transparent"
              />
            </div>
          </div>
          {/* Action Buttons */}
          <DialogFooter className="flex gap-2 sm:justify-end mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => (window.location.href = `/dashboard`)}
              className="rounded-xl text-xs font-semibold px-4 border-slate-200 hover:bg-slate-50 text-slate-600"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all px-4"
            >
              Create Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
