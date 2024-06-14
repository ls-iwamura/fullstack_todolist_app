import React from 'react';

import {TodoListResponse} from '@/features/todos/models/todoList';

import {TodoListItem} from '../TodoListItem/TodoListItem';

type Props = {
  data: TodoListResponse;
  onRemove: (id: string) => void;
};

export const TodoList = (props: Props) => {
  return (
    <div>
      <ul>
        {props.data.items.map(todo => (
          <li key={todo.id}>
            <TodoListItem
              todo={todo}
              className="mt-6"
              onRemove={props.onRemove}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
