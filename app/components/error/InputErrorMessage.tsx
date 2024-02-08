import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function InputErrorMessage({ message }: { message: string | undefined }) {
  return (
    <div
      id="errorMessage"
      aria-live="polite"
      aria-atomic="true"
      aria-relevant="additions"
      className="flex items-center gap-2 text-xs text-error"
    >
      <div className="min-w-4">
        <FaExclamationTriangle />
      </div>

      <span>{message}</span>
    </div>
  );
}

export default InputErrorMessage;
