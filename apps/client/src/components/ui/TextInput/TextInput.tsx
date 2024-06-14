import clsx from 'clsx';

type Props = JSX.IntrinsicElements['input'];

export const TextInput = ({className, ...props}: Props) => {
  return (
    <input
      className={clsx(
        'border-2',
        'border-gray-400',
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
