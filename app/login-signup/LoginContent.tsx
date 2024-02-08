import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoginForm from '@/app/login-signup/LoginForm';

function LoginContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold md:text-4xl">Welcome to J-S-I</h1>
          <span className="text-sm text-quaternary">
            Login to manage your account
          </span>
        </div>
      </div>
      <div className="flex flex-col md:w-full md:flex-row-reverse">
        <div className="flex flex-col md:w-1/2 md:p-4">
          <div className="w-full pt-4">
            <LoginForm />
            {/* <form className="flex flex-col items-center justify-center gap-4">
              <div className="w-full max-w-md">
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
              <div className="w-full max-w-md">
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
              <div className="flex w-full max-w-md flex-col text-center">
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
            </form> */}
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border-b pb-5 pt-6 md:border-b-0">
            <h1 className="font-bold">Don&apos;t have an account yet?</h1>
            <Link
              role="button"
              href="?signup=true"
              className="w-full max-w-md rounded-md border border-quaternary bg-quaternary py-2 text-center text-primaryBg"
            >
              Signup
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center md:w-1/2 md:border-r md:p-4">
          <div className="md:flex md:flex-col md:gap-8">
            <div className="flex max-w-md items-center gap-4 pt-6">
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
            <div className="flex max-w-md items-center gap-4 pt-3">
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

export default LoginContent;
