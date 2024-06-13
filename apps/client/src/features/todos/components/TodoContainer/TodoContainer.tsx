import clsx from 'clsx';
import {Suspense} from 'react';

import {SectionTitle} from '@/components/ui/SectionTitle/SectionTitle';

import {getTodoList} from '../../api/getTodoList';
import {TodoForm} from '../TodoForm/TodoForm';
import {TodoList} from '../TodoList/TodoList';

export const TodoContainer = () => {
  const todoListLoader = getTodoList();
  return (
    <div className={clsx("w-1/3", 'mx-auto', 'mt-5')}>
      <SectionTitle className={clsx('text-xl')}>Todo List</SectionTitle>
      <TodoForm />
      <Suspense fallback={'Loading...'}>
        <TodoList todoListLoader={todoListLoader} />
      </Suspense>
    </div>
  );
};
