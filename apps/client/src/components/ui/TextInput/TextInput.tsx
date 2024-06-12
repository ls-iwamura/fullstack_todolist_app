import clsx from 'clsx';

type Props = JSX.IntrinsicElements['input'];

export const TextInput = ({className, ...props}: Props) => {
  return <input className={clsx(className)} {...props} />;
};
