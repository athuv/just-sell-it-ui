'use client';

import InputErrorMessage from '@/app/components/error/InputErrorMessage';
import FormInput from '@/app/components/input/FormInput';
import setServerError from '@/lib/react-hook-form/setServerError';
import { TLoginSchema, loginSchema } from '@/lib/zodSchema/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
    setError,
  } = useForm<TLoginSchema>({
    mode: 'onTouched',
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLoginSchema) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.json();

    if (responseData.errors) {
      const { errors: serverValidationErrors } = responseData;
      Object.keys(serverValidationErrors).forEach((field) => {
        setServerError<TLoginSchema>(
          field as keyof TLoginSchema,
          serverValidationErrors,
          setError,
        );
      });
    }

    if (responseData.success) {
      // console.log('form submitted');
      reset();
    }
  };

  return (
    <form
      role="contentinfo"
      aria-label="Login form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="w-full max-w-md">
        <label className="flex flex-col gap-1 text-quaternary">
          Email:
          <FormInput
            register={{ ...register('email') }}
            type="email"
            classes="rounded border-2"
            isError={errors.email && true}
            isSuccess={touchedFields.email && !errors.email && true}
          />
          {errors.email && <InputErrorMessage message={errors.email.message} />}
        </label>
      </div>
      <div className="w-full max-w-md">
        <label className="flex flex-col gap-1 text-quaternary">
          Password:
          <FormInput
            register={{ ...register('password') }}
            type="password"
            classes="rounded border-2"
            isError={errors.password && true}
            isSuccess={touchedFields.password && !errors.password && true}
          />
          {errors.password && (
            <InputErrorMessage message={errors.password.message} />
          )}
        </label>
      </div>
      <div className="flex w-full max-w-md flex-col text-center">
        <button
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          type="submit"
          className="mb-2 w-full rounded-md border border-quaternary bg-tertiaryBg py-2 text-primaryBg"
        >
          Login
        </button>
        <button
          disabled={isSubmitting}
          type="button"
          className="flex max-w-md items-center justify-center gap-2 rounded-md border border-quaternary bg-transparent py-2"
        >
          <FcGoogle />
          <span>Continue with Google</span>
        </button>
        <Link href="/" className="pt-2 text-blue-600">
          Forgot Password?
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
