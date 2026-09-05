import { Task } from "./task.typ";

export interface Column {
  id: string;
  title: string;
  boardId: string;
  createdAt: string;
  updatedAt: string;
  tasks: Task[]; // কলামের ভেতরেই টাস্কের অ্যারে নেস্টেড অবস্থায় আছে
}
