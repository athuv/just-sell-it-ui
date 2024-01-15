import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SignupContent({
  setContent,
}: {
  setContent: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-xl">Welcome to J-S-I</h1>
          <span className="text-sm text-quaternary">
            Login to manage your account
          </span>
        </div>
      </div>
      <div className="w-full pb-4 pt-4">
        <form className="flex flex-col gap-4">
          <div className="w-full">
            <label
              htmlFor="login-name"
              className="flex flex-col gap-1 text-quaternary"
            >
              Name:
              <input
                type="text"
                id="login-name"
                name="name"
                value=""
                className="rounded border border-quaternary"
              />
            </label>
          </div>
          <div className="w-full">
            <label
              htmlFor="login-email"
              className="flex flex-col gap-1 text-quaternary"
            >
              Email:
              <input
                type="email"
                id="login-email"
                name="email"
                value=""
                className="rounded border border-quaternary"
              />
            </label>
          </div>
          <div className="w-full">
            <label
              htmlFor="login-password"
              className="flex flex-col gap-1 text-quaternary"
            >
              Password:
              <input
                type="password"
                id="login-password"
                name="password"
                value=""
                className="rounded border border-quaternary"
              />
            </label>
          </div>
          <div className="w-full">
            <label
              htmlFor="login-confirm-password"
              className="flex flex-col gap-1 text-quaternary"
            >
              Confirm Password:
              <input
                type="password"
                id="login-confirm-password"
                name="confirmPassword"
                value=""
                className="rounded border border-quaternary"
              />
            </label>
          </div>
          <div className="flex w-full flex-col text-center">
            <button
              type="button"
              className="mb-2 w-full rounded-md border border-quaternary bg-tertiaryBg py-2 text-primaryBg"
            >
              Login
            </button>
            <div className="flex w-full flex-col text-center text-[0.7rem] text-sm text-quaternary">
              <div>By signing up for an account you agree to our</div>
              <Link href="/" className="text-blue-600">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold">Already have an account?</h1>
            <button
              type="button"
              className="text-primaryB w-full rounded-md bg-quaternary py-2 text-primaryBg"
              onClick={() => setContent('login')}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="border-t border-quaternary pt-6">
        <div className="flex items-center gap-2">
          <div className="h-auto w-7">
            <Image
              src="/favourite-star.svg"
              alt="Favoourites"
              height={800}
              width={800}
            />
          </div>
          <span className="text-sm text-quaternary">
            Start posting your own ads.
          </span>
        </div>
        <div className="flex items-center gap-4 pt-3">
          <div className="h-auto w-7">
            <Image
              src="/price-tag.svg"
              alt="price tag"
              height={800}
              width={800}
            />
          </div>
          <span className="text-sm text-quaternary">
            Mark ads as favorite and view them later.
          </span>
        </div>
      </div>
    </>
  );
}

export default SignupContent;
