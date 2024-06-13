import clsx from 'clsx';
import React, {useState} from 'react';

import {Button} from '@/components/ui/Button/Button';

import {TodoListResponse} from '../../models/todoList';

type Props = {
  todo: TodoListResponse['items'][number];
  className?: string;
};

export const TodoListItem = (props: Props) => {
  const [mode, setMode] = useState<'view' | 'edit'>('view');
  const statusLabelColor = (() => {
    switch (props.todo.status) {
      case 'todo':
        return 'bg-blue-200 text-blue-500';
      case 'wip':
        return 'bg-yellow-200 text-yellow-500';
      case 'done':
        return 'bg-green-200 text-green-500';
      case 'pending':
        return 'bg-gray-200 text-gray-500';
      case 'canceled':
        return 'bg-red-200 text-red-500';
      default:
        return 'bg-gray-200 text-gray-500';
    }
  })();

  return (
    <div
      className={clsx(
        'flex',
        'gap-10',
        'items-center',
        'justify-between',
        props.className,
      )}
    >
      <p className={clsx('text-lg')}>{props.todo.title}</p>
      <div className={clsx('flex', 'items-center', 'gap-4')}>
        <span
          className={clsx(
            statusLabelColor,
            'w-16',
            'text-center',
            'py-1',
            'rounded-md',
          )}
        >
          {props.todo.status}
        </span>
        <div className={clsx('flex', 'items-center', 'gap-2')}>
          <Button
            className={clsx(
              'bg-gray-500',
              'text-white',
              'hover:opacity-50',
              'w-12',
            )}
            onClick={() => {
              setMode('edit');
            }}
          >
            Edit
          </Button>
          <Button
            className={clsx(
              'bg-red-500',
              'text-white',
              'hover:opacity-50',
              'w-10',
            )}
            onClick={() => {}}
          >
            ✘
          </Button>
        </div>
      </div>
    </div>
  );
};
