import {Button} from '@/components/ui/Button/Button';
import clsx from 'clsx';
import React, {useActionState} from 'react';

export const TodoForm = () => {
  const [_, runAction, isPending] = useActionState(
    async (_: unknown, formData: FormData) => {
      console.log(Object.fromEntries(formData));

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res.json();
    },
    null,
  );
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
