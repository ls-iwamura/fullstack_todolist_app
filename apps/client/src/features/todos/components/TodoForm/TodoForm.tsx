import clsx from 'clsx';
import React, {useState} from 'react';

import {Button} from '@/components/ui/Button/Button';
import {DateInput} from '@/components/ui/DateInput/DateInput';
import {TextArea} from '@/components/ui/TextArea/TextArea';
import {TextInput} from '@/components/ui/TextInput/TextInput';

import {AddTodoRequest} from '../../models/addTodo';

type Props = {
  isPending: boolean;
  onSubmit: (values: AddTodoRequest) => void;
};

export const TodoForm = (props: Props) => {
  const [inputState, setInputState] = useState<AddTodoRequest>({
    title: '',
    content: '',
    deadline: '',
  });
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit(inputState);
        }}
        className={clsx(
          'flex',
          'flex-col',
          'gap-4',
          'border-2',
          'border-gray-300',
          'p-4',
          'rounded-md',
        )}
      >
        <div className={clsx('flex', 'flex-col', 'gap-2', 'items-start')}>
          <TextInput
            type="text"
            name="title"
            placeholder="Title"
            value={inputState.title}
            onChange={e =>
              setInputState(prev => ({...prev, title: e.target.value}))
            }
            disabled={props.isPending}
            className={clsx('w-full')}
          />
          <TextArea
            name="content"
            placeholder="Description"
            value={inputState.content}
            onChange={e =>
              setInputState(prev => ({...prev, content: e.target.value}))
            }
            disabled={props.isPending}
            className={clsx('w-full')}
          />
          <DateInput
            name="deadline"
            value={inputState.deadline}
            onChange={e =>
              setInputState(prev => ({...prev, deadline: e.target.value}))
            }
            disabled={props.isPending}
            className={clsx('w-full')}
          />
        </div>
        <div className={clsx('flex', 'justify-end')}>
          <Button
            className={clsx('w-14', 'bg-green-500', 'text-white')}
            type="submit"
            disabled={props.isPending}
          >
            {props.isPending ? '...' : 'Save'}
          </Button>
        </div>
      </form>
    </div>
  );
};
