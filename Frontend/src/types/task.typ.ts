export interface Task {
  id: string;
  columnId: string;
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE' | string; // আপনার ডাটাতে মূলত "TODO" স্ট্যাটাস আছে
  position: number;
  assigneeId: string | null;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
}

// 2. Column Interface
