import useSWRMutation from 'swr/mutation';

import {addTodo} from '../api/addTodo';

export const useAddTodoMutation = () => {
  const mutation = useSWRMutation('/todos', addTodo, {revalidate: true});
  return mutation;
};
