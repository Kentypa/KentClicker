import { ChangeEvent, FormEvent, useState } from 'react';

export function useForm(
  initialState: Record<string, string | number>,
  onSubmit?: (formState: Record<string, string | number>) => void,
) {
  const [formState, setFormState] = useState(initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit?.(formState);
  }

  return { formState, handleChange, handleSubmit };
}
