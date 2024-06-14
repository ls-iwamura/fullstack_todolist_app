import useSWRMutation from 'swr/mutation';

import {removeTodo} from '../api/removeTodo';

export const useRemoveTodoMutation = () => {
  const mutation = useSWRMutation('/todos', removeTodo, {revalidate: true});
  return mutation;
};
