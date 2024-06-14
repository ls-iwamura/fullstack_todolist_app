import clsx from 'clsx';

type Props = JSX.IntrinsicElements['textarea'];

export const TextArea = ({className, ...props}: Props) => {
  return <textarea className={clsx(className)} {...props} />;
};
