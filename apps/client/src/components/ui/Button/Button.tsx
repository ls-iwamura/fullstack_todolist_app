import clsx from 'clsx';

type Props = JSX.IntrinsicElements['button'];

export const Button = ({children, className, ...props}: Props) => {
  return (
    <button
      type={props.type}
      className={clsx('py-1', 'text-center', 'rounded-md', className)}
      {...props}
    >
      {children}
    </button>
  );
};
