import React from 'react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

function LoginSignupContent() {
  return (
    <aside className="flex flex-col items-center justify-center">
      <div className="w-full py-4 text-center">
        <h1 className="text-xl font-bold md:text-4xl">Welcome to J-S-I</h1>
        <span className="text-sm text-quaternary">
          The largest marketplace in Asia
        </span>
      </div>
      <div className="flex w-full items-center justify-center gap-4 divide-x-2 shadow-md">
        <div className="w-full pb-4 pt-4 md:w-1/2 md:p-4">
          <form className="flex flex-col items-center justify-center gap-4">
            <div className="w-full max-w-80">
              <label className="flex flex-col gap-1 text-quaternary">
                Name:
                <input
                  type="text"
                  name="name"
                  defaultValue=""
                  className="rounded border border-quaternary"
                />
              </label>
            </div>
            <div className="w-full max-w-80">
              <label className="flex flex-col gap-1 text-quaternary">
                Email:
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  className="rounded border border-quaternary"
                />
              </label>
            </div>
            <div className="w-full max-w-80">
              <label className="flex flex-col gap-1 text-quaternary">
                Password:
                <input
                  type="password"
                  name="password"
                  defaultValue=""
                  className="rounded border border-quaternary"
                />
              </label>
            </div>
            <div className="w-full max-w-80">
              <label className="flex flex-col gap-1 text-quaternary">
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  defaultValue=""
                  className="rounded border border-quaternary"
                />
              </label>
            </div>
            <div className="flex w-full max-w-80 flex-col text-center">
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
          </form>
        </div>
        <div className="flex w-2/4 flex-col p-4">
          <div className="w-full pt-4">
            <form className="flex flex-col items-center justify-center gap-4">
              <div className="w-full max-w-80">
                <label className="flex flex-col gap-1 text-quaternary">
                  Email:
                  <input
                    type="email"
                    name="email"
                    defaultValue=""
                    className="rounded border border-quaternary"
                  />
                </label>
              </div>
              <div className="w-full max-w-80">
                <label className="flex flex-col gap-1 text-quaternary">
                  Password:
                  <input
                    type="password"
                    name="password"
                    defaultValue=""
                    className="rounded border border-quaternary"
                  />
                </label>
              </div>
              <div className="flex w-full max-w-80 flex-col text-center">
                <button
                  type="button"
                  className="mb-2 w-full rounded-md border border-quaternary bg-tertiaryBg py-2 text-primaryBg"
                >
                  Login
                </button>
                <button
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
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 py-8">
        <div className="flex w-1/3 max-w-80 items-center justify-center gap-4">
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
        <div className="flex w-1/3 max-w-80 items-center justify-center gap-4">
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
        <div className="flex w-1/3 max-w-80 items-center justify-center gap-4">
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
    </aside>
  );
}

export default LoginSignupContent;
