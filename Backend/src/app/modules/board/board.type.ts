export type BoardResponse = {
  httpStatusCode: number;
  success: boolean;
  message: string;
  data: TBoard;
};

export type TBoard = {
  id: string;
  name: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  columns: Column[];
};

export type Column = {
  id: string;
  title: string;
  boardId: string;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
};

export type Task = {
  id: string;
  columnId: string;
  title: string;
  description: string;
  status: string;
  position: number;
  assigneeId: string | null;
  createdAt: string;
  updatedAt: string;
};