import clsx from 'clsx';

type Props = JSX.IntrinsicElements['h2'];

export const SectionTitle = ({children, className, ...props}: Props) => {
  return (
    <h2 className={clsx(className)} {...props}>
      {children}
    </h2>
  );
};
