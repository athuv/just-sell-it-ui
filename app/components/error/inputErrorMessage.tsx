import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function InputErrorMessage({ message }: { message: string | undefined }) {
  return (
    <div
      id="errorMessage"
      aria-live="polite"
      aria-atomic="true"
      aria-relevant="additions"
      className="flex items-center gap-2 text-sm text-red-500"
    >
      <FaExclamationTriangle />
      <span>{message}</span>
    </div>
  );
}

export default InputErrorMessage;
