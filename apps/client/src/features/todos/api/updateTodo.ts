import {UpdateTodoPathParams, UpdateTodoRequest} from '../models/updateTodo';
export const updateTodo = async (
  _key: string,
  {arg}: {arg: UpdateTodoRequest & UpdateTodoPathParams},
) => {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const {id, ...rest} = arg;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(rest),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};
