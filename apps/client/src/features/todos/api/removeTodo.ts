export const removeTodo = async (_key: string, {arg}: {arg: string}) => {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${arg}`, {
    method: 'DELETE',
  });
  return res.json();
};
