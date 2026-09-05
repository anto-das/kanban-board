export interface Board {
  id: string;
  name: string;
  ownerId: string;
  createdAt?: string;
  updatedAt?: string;
  members?: BoardMember[];
  _count?: {
  columns: number;
};
}

export interface BoardMember {
  memberRole: "ADMIN" | "MEMBER" | "VIEWER";
}
