import {AddTodoRequest} from '@/features/todos/models/addTodo';
export const addTodo = async (_key: string, {arg}: {arg: AddTodoRequest}) => {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};
