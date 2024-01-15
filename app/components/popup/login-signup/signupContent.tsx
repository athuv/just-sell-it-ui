import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SignupContent({
  setContent,
}: {
  setContent: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold md:text-4xl">Welcome to J-S-I</h1>
          <span className="text-sm text-quaternary">
            The largest marketplace in Asia
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:gap-2">
        <div className="w-full pb-4 pt-4 md:w-1/2 md:p-4">
          <form className="flex flex-col items-center justify-center gap-4">
            <div className="w-full max-w-md">
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
            <div className="w-full max-w-md">
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
            <div className="w-full max-w-md">
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
            <div className="w-full max-w-md">
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
            <div className="flex w-full max-w-md flex-col text-center">
              <button
                type="button"
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
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <h1 className="font-bold">Already have an account?</h1>
              <button
                type="button"
                className="text-primaryB w-full max-w-md rounded-md bg-quaternary py-2 text-primaryBg"
                onClick={() => setContent('login')}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center border-t md:w-1/2 md:border-r md:border-t-0 md:p-4">
          <div className="md:flex md:flex-col md:gap-8">
            <div className="flex max-w-md items-center gap-4 pt-6 md:pt-0">
              <div className="h-auto w-7">
                <Image
                  src="/price-tag.svg"
                  alt="price tag"
                  height={800}
                  width={800}
                />
              </div>
              <span className="text-sm text-quaternary">
                Start posting your own ads.
              </span>
            </div>
            <div className="flex max-w-md items-center gap-4 pt-3">
              <div className="h-auto w-7">
                <Image
                  src="/favourite-star.svg"
                  alt="Favoourites"
                  height={800}
                  width={800}
                />
              </div>
              <span className="text-sm text-quaternary">
                Mark ads as favorite and view them later.
              </span>
            </div>
            <div className="flex max-w-md items-center gap-4 pt-3">
              <div className="h-auto w-7">
                <Image
                  src="/price-tag-manage.svg"
                  alt="Favoourites"
                  height={800}
                  width={800}
                />
              </div>
              <span className="text-sm text-quaternary">
                View and manage your ads at your convenience.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupContent;
