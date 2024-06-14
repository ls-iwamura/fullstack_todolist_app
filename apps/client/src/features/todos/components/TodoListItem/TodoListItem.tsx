import clsx from 'clsx';
import React, {useState} from 'react';

import {Button} from '@/components/ui/Button/Button';

import {useRemoveTodoMutation} from '@/features/todos/hooks/useRemoveTodoMutation';

import {TodoListResponse} from '../../models/todoList';
import {SelectBox} from '@/components/ui/SelectBox/SelectBox';
import {TextInput} from '@/components/ui/TextInput/TextInput';
import {useUpdateTodoMutation} from '../../hooks/useUpdateTodoMutation';

type Props = {
  todo: TodoListResponse['items'][number];
  className?: string;
};

export const TodoListItem = (props: Props) => {
  const [mode, setMode] = useState<'view' | 'edit'>('view');

  if (mode === 'edit') {
    return (
      <TodoListItemEditMode
        todo={props.todo}
        className={props.className}
        changeMode={() => setMode('view')}
      />
    );
  }
  return (
    <TodoListItemViewMode
      todo={props.todo}
      className={props.className}
      changeMode={() => setMode('edit')}
    />
  );
};

const TodoListItemViewMode = (props: Props & {changeMode: () => void}) => {
  const {trigger, isMutating} = useRemoveTodoMutation();
  const handleRemove = async () => {
    trigger(props.todo.id);
  };
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
        'rounded-md',
        'p-4',
        'border-2',
        'border-gray-300',
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
            onClick={props.changeMode}
            disabled={isMutating}
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
            onClick={handleRemove}
            disabled={isMutating}
          >
            {isMutating ? '...' : '✘'}
          </Button>
        </div>
      </div>
    </div>
  );
};

const TodoListItemEditMode = (props: Props & {changeMode: () => void}) => {
  const {trigger, isMutating} = useUpdateTodoMutation();
  const [inputState, setInputState] = useState({
    title: props.todo.title,
    content: props.todo.content,
    status: props.todo.status,
    deadline: props.todo.deadline,
  });
  return (
    <form
      className={clsx(
        'flex',
        'gap-10',
        'items-center',
        'justify-between',
        'rounded-md',
        'p-4',
        'border-2',
        'border-gray-300',
        props.className,
      )}
      onSubmit={e => {
        e.preventDefault();
        trigger(
          {...inputState, id: props.todo.id},
          {onSuccess: props.changeMode},
        );
      }}
    >
      <TextInput
        value={inputState.title}
        onChange={e =>
          setInputState(prev => ({...prev, title: e.target.value}))
        }
      />
      <div className={clsx('flex', 'items-center', 'gap-4')}>
        <SelectBox
          options={[
            {label: 'todo', value: 'todo'},
            {label: 'wip', value: 'wip'},
            {label: 'done', value: 'done'},
            {label: 'pending', value: 'pending'},
            {label: 'canceled', value: 'canceled'},
          ]}
          onChange={e =>
            setInputState(prev => ({
              ...prev,
              status: e.target.value as (typeof inputState)['status'],
            }))
          }
        />
        <div className={clsx('flex', 'items-center', 'gap-2')}>
          <Button
            type="submit"
            className={clsx(
              'bg-green-500',
              'text-white',
              'hover:opacity-50',
              'w-12',
            )}
            disabled={isMutating}
          >
            Save
          </Button>
          <Button
            type="button"
            className={clsx(
              'bg-gray-500',
              'text-white',
              'hover:opacity-50',
              'w-12',
            )}
            onClick={props.changeMode}
            disabled={isMutating}
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};
