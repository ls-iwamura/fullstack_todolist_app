import clsx from 'clsx';

import {SectionTitle} from '@/components/ui/SectionTitle/SectionTitle';

import {useGetTodoList} from '@/features/todos/hooks/useGetTodoList';

import {TodoForm} from '../TodoForm/TodoForm';
import {TodoList} from '../TodoList/TodoList';

export const TodoContainer = () => {
  const {data} = useGetTodoList();
  return (
    <div className={clsx('w-1/2', 'mx-auto', 'mt-5')}>
      <SectionTitle className={clsx('text-xl', 'mb-4')}>Todo List</SectionTitle>
      <TodoForm />
      {data == null ? (
        <div>Loading...</div>
      ) : (
        <TodoList data={data} className="mt-6" />
      )}
    </div>
  );
};
