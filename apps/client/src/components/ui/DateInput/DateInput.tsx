import clsx from 'clsx';

type Props = JSX.IntrinsicElements['input'];

export const DateInput = ({className, type = 'date', ...props}: Props) => {
  return <input type={type} className={clsx(className)} {...props} />;
};
