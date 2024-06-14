import clsx from 'clsx';

type Props = JSX.IntrinsicElements['input'];

export const DateInput = ({className, type = 'date', ...props}: Props) => {
  return (
    <input
      type={type}
      className={clsx(
        'border-2',
        'border-gray-300',
        'px-2',
        'py-1',
        'border-solid',
        'rounded-md',
        className,
      )}
      {...props}
    />
  );
};
