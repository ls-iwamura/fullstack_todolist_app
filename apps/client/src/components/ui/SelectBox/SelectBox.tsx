import clsx from 'clsx';
import React from 'react';

type Props = JSX.IntrinsicElements['select'] & {
  options: {readonly label: string; readonly value: string}[];
};

export const SelectBox = ({className, options}: Props) => {
  return (
    <select
      className={clsx(
        'border-2',
        'border-gray-300',
        'px-2',
        'py-1',
        'border-solid',
        'rounded-md',
        className,
      )}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
