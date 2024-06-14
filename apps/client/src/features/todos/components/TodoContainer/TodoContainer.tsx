import clsx from 'clsx';

import {SectionTitle} from '@/components/ui/SectionTitle/SectionTitle';

import {useGetTodoList} from '@/features/todos/hooks/useGetTodoList';
import {useRemoveTodoMutation} from '@/features/todos/hooks/useRemoveTodoMutation';

import {useAddTodoMutation} from '../../hooks/useAddTodoMutation';
import {AddTodoRequest} from '../../models/addTodo';
import {TodoForm} from '../TodoForm/TodoForm';
import {TodoList} from '../TodoList/TodoList';

export const TodoContainer = () => {
  const {data} = useGetTodoList();
  const {trigger: addTrigger, isMutating: addIsMutating} = useAddTodoMutation();
  const {trigger: removeTrigger} = useRemoveTodoMutation();
  const handleSubmit = async (values: AddTodoRequest) => {
    addTrigger(values);
  };
  const handleRemove = async (id: string) => {
    removeTrigger(id);
  };
  return (
    <div className={clsx('w-1/2', 'mx-auto', 'mt-5')}>
      <SectionTitle className={clsx('text-xl', "mb-4")}>Todo List</SectionTitle>
      <TodoForm onSubmit={handleSubmit} isPending={addIsMutating} />
      {data == null ? (
        <div>Loading...</div>
      ) : (
        <TodoList data={data} onRemove={handleRemove} className="mt-6" />
      )}
    </div>
  );
};
