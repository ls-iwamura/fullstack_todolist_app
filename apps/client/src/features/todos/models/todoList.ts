export type TodoListResponse = {
  items: {
    id: string;
    title: string;
    content: string;
    status: 'todo' | 'wip' | 'done' | 'pending' | 'canceled';
    deadline: string;
    createdAt: string;
    updatedAt: string;
  }[];
};
