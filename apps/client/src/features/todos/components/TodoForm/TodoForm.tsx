import clsx from 'clsx';
import React, {useActionState} from 'react';

import {Button} from '@/components/ui/Button/Button';

import {addTodo} from '../../api/addTodo';
import {AddTodoRequest} from '../../models/addTodo';

export const TodoForm = () => {
  const [inputState, runAction, isPending] = useActionState<
    AddTodoRequest | null,
    FormData
  >(async (_, formData) => {
    const req = Object.fromEntries(formData.entries());
    const res = await addTodo(req);
    return res;
  }, null);
  return (
    <div>
      <form action={runAction}>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="content" placeholder="Description" />
        <input type="date" name="deadline" />
        <Button
          className={clsx('w-14', 'bg-green-500', 'text-white')}
          type="submit"
          disabled={isPending}
        >
          {isPending ? '...' : 'Save'}
        </Button>
      </form>
    </div>
  );
};
