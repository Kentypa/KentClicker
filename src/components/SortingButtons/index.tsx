import { FC } from 'react';
import { Button } from '../Button';
import { SortingType } from '../../types/sorting-types';

type SortingButtonsProps = {
  className?: string;
  sortingType: SortingType;
  setSortingType: (sortingType: SortingType) => void;
  sortingTypes: string[];
  buttonClassName?: string;
};

export const SortingButtons: FC<SortingButtonsProps> = ({
  className,
  sortingTypes,
  sortingType,
  setSortingType,
  buttonClassName,
}) => {
  return (
    <ul className={className}>
      {sortingTypes.map((item) => (
        <Button
          handleClick={() => {
            setSortingType(item as SortingType);
          }}
          className={`${buttonClassName} ${item === sortingType ? 'bg-background border-primary' : 'border-subtle-light'}`}
          key={item}
        >
          <div className='w-[100.75px] h-[20px]'>{item}</div>
        </Button>
      ))}
    </ul>
  );
};
