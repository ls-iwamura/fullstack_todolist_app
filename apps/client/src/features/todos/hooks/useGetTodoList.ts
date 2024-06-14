import useSWR from 'swr';

import {getTodoList} from '../api/getTodoList';

export const useGetTodoList = () => {
  const query = useSWR('/todos', getTodoList);
  return query;
};
