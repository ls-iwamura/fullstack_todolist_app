import clsx from 'clsx';

type Props = JSX.IntrinsicElements['button']

export const Button = ({children, className, ...props}: Props) => {
  return (
    <button className={clsx(className)} {...props}>
      {children}
    </button>
  );
};
