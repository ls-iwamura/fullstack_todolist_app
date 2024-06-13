import React, {use} from 'react';

import {TodoListResponse} from '@/features/todos/models/todoList';

import {TodoListItem} from '../TodoListItem/TodoListItem';

type Props = {
  todoListLoader: Promise<TodoListResponse>;
};

export const TodoList = (props: Props) => {
  const todoListData = use(props.todoListLoader);
  return (
    <div>
      <ul>
        {todoListData.items.map(todo => (
          <li key={todo.id}>
            <TodoListItem todo={todo} className="mt-6" />
          </li>
        ))}
      </ul>
    </div>
  );
};
