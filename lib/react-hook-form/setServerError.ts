import { FieldError } from 'react-hook-form';

interface ServerValidationErrors {
  [key: string]: string;
}

type SetError<T> = (name: keyof T, error: FieldError) => void;

export default function setServerError<T>(
  field: keyof T,
  serverValidationErrors: ServerValidationErrors,
  setError: SetError<T>,
): void {
  if (serverValidationErrors[field as string]) {
    setError(field, {
      type: 'server',
      message: serverValidationErrors[field as string],
    });
  }
}
