import {TodoListResponse} from '../models/todoList';

export const getTodoList = async (_key: string): Promise<TodoListResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
  const data = await response.json();
  return data;
};
