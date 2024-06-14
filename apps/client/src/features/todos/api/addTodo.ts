import {AddTodoRequest} from '@/features/todos/models/addTodo';
export const addTodo = async (req: AddTodoRequest) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};
