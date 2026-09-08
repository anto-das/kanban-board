"use client";

import { updateColumn } from "@/app/actions/column.action";
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

interface UpdateColumnProps {
  isOpen: boolean;
  boardId: string;
  columnId: string;
}

export function UpdateColumnModal({
  isOpen,
  boardId,
  columnId,
}: UpdateColumnProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const { title } = Object.fromEntries(formData.entries());
    const payload = {
      boardId: boardId as string,
      columnId: columnId as string,
      title: title as string,
    };
    const loadingId = toast.loading("Task Added..");
    try {
      const res: any = await updateColumn(payload);
      if ("success" in res && res.success) {
        toast.success(res.message, { id: loadingId });
        window.location.href = `/dashboard/board/${boardId}`;
      } else {
        toast.error(res.message, { id: loadingId });
      }
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
              Update Column
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
                htmlFor="column-title"
                className="text-xs font-bold text-slate-600 uppercase tracking-wider"
              >
                Column Title *
              </Label>
              <Input
                id="column-title"
                name="title"
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
              Update Column
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
