import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

function EmailLogin({
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
      <div className="w-full pt-4">
        <form className="flex flex-col gap-4">
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
          <div className="flex w-full flex-col text-center">
            <button
              type="button"
              className="mb-2 w-full rounded-md border border-quaternary bg-tertiaryBg py-2 text-primaryBg"
            >
              Login
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-md border border-quaternary bg-transparent py-2"
            >
              <FcGoogle />
              <span>Continue with Google</span>
            </button>
            <Link href="/" className="pt-2 text-blue-600">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 border-b pb-5 pt-6">
        <h1 className="font-bold">Don&apos;t have an account yet?</h1>
        <button
          type="button"
          className="w-full rounded-md border border-quaternary bg-quaternary py-2 text-primaryBg"
          onClick={() => setContent('signup')}
        >
          Signup
        </button>
      </div>
      <div>
        <div className="flex items-center gap-4 pt-6">
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

export default EmailLogin;
