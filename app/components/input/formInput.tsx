import React from 'react';

function FormInput({
  register,
  type,
  classes,
  isError,
  isSuccess,
}: {
  register: any;
  type: string;
  classes: string;
  isError: boolean | undefined;
  isSuccess: boolean | undefined;
}) {
  return (
    <input
      {...register}
      autoComplete={type}
      aria-errormessage="errorMessage"
      type={type}
      className={`${classes} ${
        isError &&
        'border-red-600 focus:border-red-600 focus:outline-none focus:ring-0'
      } ${
        isSuccess &&
        'border-green-500 focus:border-green-600 focus:outline-none focus:ring-0'
      }`}
    />
  );
}

export default FormInput;
