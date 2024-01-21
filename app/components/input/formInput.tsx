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
        'border-error focus:border-error focus:outline-none focus:ring-0'
      } ${
        isSuccess &&
        'valid:border-success valid:focus:border-success valid:focus:outline-none valid:focus:ring-0'
      }`}
    />
  );
}

export default FormInput;
