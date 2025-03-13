import { ChangeEvent, FC } from 'react';
import { Input, InputProps } from '../Input';
import { Button } from '../Button';
import LeftArrow from '../../assets/icons/simple-arrow-left.svg';
import RightArrow from '../../assets/icons/simple-arrow-right.svg';
import { Label } from '../Label';
import { validateNumbers } from '../../utils/number-validator';

type NumericInputProps = InputProps;

export const NumericInput: FC<NumericInputProps> = ({
  autoComplete,
  className,
  handleChange,
  id,
  label,
  labelClassName,
  name,
  placeholder,
  type,
  value,
}) => {
  function incrementValue() {
    const newValue = Number(value) + 1;
    handleChange?.({
      target: { name, value: newValue },
    } as unknown as ChangeEvent<HTMLInputElement>);
  }

  function decrementValue() {
    const newValue = Math.max(Number(value) - 1, 0);
    handleChange?.({
      target: { name, value: newValue },
    } as unknown as ChangeEvent<HTMLInputElement>);
  }

  function validateInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    const newValue = validateNumbers(value);

    handleChange?.({
      target: { name, value: newValue },
    } as unknown as ChangeEvent<HTMLInputElement>);
  }

  return (
    <div className='flex flex-col gap-2'>
      <Label className={labelClassName}>{label}</Label>
      <div className='relative'>
        <Input
          autoComplete={autoComplete}
          className={className}
          handleChange={validateInput}
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        <Button
          handleClick={decrementValue}
          className='absolute left-1 top-1/2 transform -translate-y-1/2'
        >
          <img
            src={LeftArrow}
            alt='arrow-left'
            className='rounded-xl bg-background p-2.5'
          />
        </Button>
        <Button
          handleClick={incrementValue}
          className='absolute right-1 top-1/2 transform -translate-y-1/2'
        >
          <img
            src={RightArrow}
            alt='arrow-right'
            className='rounded-xl bg-background p-2.5'
          />
        </Button>
      </div>
    </div>
  );
};
