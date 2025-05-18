import { ChangeEvent, FC } from "react";
import { Input, InputProps } from "../Input";
import { Button } from "../Button";
import { Label } from "../Label";
import { validateNumbers } from "../../../utils/number-validator";
import LeftArrow from "../../../assets/icons/simple-arrow-left.svg";
import RightArrow from "../../../assets/icons/simple-arrow-right.svg";

type NumericInputProps = InputProps & {
  handleChangeByValue: (name: string, value: string | number) => void;
};

export const NumericInput: FC<NumericInputProps> = ({
  autoComplete,
  className,
  handleChangeByValue,
  id,
  label,
  labelClassName,
  name,
  placeholder,
  type,
  value,
}) => {
  function incrementValue() {
    if (name) {
      const newValue = Number(value) + 1;
      handleChangeByValue(name, newValue);
    }
  }

  function decrementValue() {
    if (name) {
      const newValue = Math.max(Number(value) - 1, 0);
      handleChangeByValue(name, newValue);
    }
  }

  function validateInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name && value) {
      const newValue = validateNumbers(value);
      handleChangeByValue(name, newValue);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Label className={labelClassName}>{label}</Label>
      <div className="relative">
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
          className="absolute left-1 top-1/2 transform -translate-y-1/2">
          <img
            src={LeftArrow}
            alt="arrow-left"
            className="rounded-xl bg-background p-2.5"
          />
        </Button>
        <Button
          handleClick={incrementValue}
          className="absolute right-1 top-1/2 transform -translate-y-1/2">
          <img
            src={RightArrow}
            alt="arrow-right"
            className="rounded-xl bg-background p-2.5"
          />
        </Button>
      </div>
    </div>
  );
};
