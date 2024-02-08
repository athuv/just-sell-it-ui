'use client';

import InputErrorMessage from '@/app/components/error/InputErrorMessage';
import FormInput from '@/app/components/input/FormInput';
import setServerError from '@/lib/react-hook-form/setServerError';
import { TSignupSchema, signupSchema } from '@/lib/zodSchema/signupSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
    setError,
  } = useForm<TSignupSchema>({
    mode: 'onTouched',
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: TSignupSchema) => {
    const response = await fetch('/api/signup', {
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
        setServerError<TSignupSchema>(
          field as keyof TSignupSchema,
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
      aria-label="Signup form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="w-full max-w-md">
        <label className="flex flex-col gap-1 text-quaternary">
          Name:
          <FormInput
            register={{ ...register('name') }}
            type="name"
            classes="rounded border"
            isError={errors.name && true}
            isSuccess={touchedFields.name && !errors.name && true}
          />
          {errors.name && <InputErrorMessage message={errors.name?.message} />}
        </label>
      </div>
      <div className="w-full max-w-md">
        <label className="flex flex-col gap-1 text-quaternary">
          Email:
          <FormInput
            register={{ ...register('email') }}
            type="email"
            classes="rounded border"
            isError={errors.email && true}
            isSuccess={touchedFields.email && !errors.email && true}
          />
          {errors.email && (
            <InputErrorMessage message={errors.email?.message} />
          )}
        </label>
      </div>
      <div className="w-full max-w-md">
        <label className="flex flex-col gap-1 text-quaternary">
          Password:
          <FormInput
            register={{ ...register('password') }}
            type="password"
            classes="rounded border"
            isError={errors.password && true}
            isSuccess={touchedFields.password && !errors.password && true}
          />
          {errors.password && (
            <InputErrorMessage message={errors.password?.message} />
          )}
        </label>
      </div>
      <div className="w-full max-w-md">
        <label className="flex flex-col gap-1 text-quaternary">
          Confirm Password:
          <FormInput
            register={{ ...register('confirmPassword') }}
            type="password"
            classes="rounded border"
            isError={errors.confirmPassword && true}
            isSuccess={
              touchedFields.confirmPassword && !errors.confirmPassword && true
            }
          />
          {errors.confirmPassword && (
            <InputErrorMessage message={errors.confirmPassword?.message} />
          )}
        </label>
      </div>
      <div className="flex w-full max-w-md flex-col text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          className="mb-2 w-full max-w-md rounded-md border border-quaternary bg-tertiaryBg py-2 text-primaryBg"
        >
          Signup
        </button>
        <div className="flex w-full flex-col text-center text-[0.7rem] text-sm text-quaternary">
          <div>By signing up for an account you agree to our</div>
          <Link href="/" className="text-blue-600">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
