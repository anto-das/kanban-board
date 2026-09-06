export interface Task {
  id: string;
  columnId: string;
  title: string;
  description: string;
  status: string;
  position: number;
  assigneeId: string | null;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
}

// 2. Column Interface
