import clsx from 'clsx';

type Props = JSX.IntrinsicElements['textarea'];

export const TextArea = ({className, ...props}: Props) => {
  return (
    <textarea
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
