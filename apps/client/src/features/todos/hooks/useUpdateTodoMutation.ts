import useSWRMutation from 'swr/mutation';

import { updateTodo } from '../api/updateTodo';

export const useUpdateTodoMutation = () => {
  const mutation = useSWRMutation('/todos', updateTodo, {revalidate: true});
  return mutation;
};
