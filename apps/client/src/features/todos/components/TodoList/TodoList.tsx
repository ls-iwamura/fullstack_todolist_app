import clsx from 'clsx';
import React from 'react';

import {TodoListResponse} from '@/features/todos/models/todoList';

import {TodoListItem} from '../TodoListItem/TodoListItem';

type Props = {
  data: TodoListResponse;
  className?: string;
};

export const TodoList = (props: Props) => {
  return (
    <div
      className={clsx(
        'border-2',
        'border-gray-300',
        'p-4',
        'rounded-md',
        props.className,
      )}
    >
      <ul className={clsx("flex", "flex-col", "gap-4")}>
        {props.data.items.map(todo => (
          <li key={todo.id}>
            <TodoListItem todo={todo}  />
          </li>
        ))}
      </ul>
    </div>
  );
};
