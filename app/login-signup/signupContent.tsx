import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignupForm from '@/app/login-signup/signupForm';

function SignupContent() {
  return (
    <div
      role="contentinfo"
      aria-label="signup form"
      className="flex flex-col gap-4"
    >
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
          <SignupForm />
          <div className="flex w-full flex-col items-center justify-center gap-2 pt-4">
            <h1 className="font-bold">Already have an account?</h1>
            <Link
              role="button"
              href="/login-signup"
              className="text-primaryB w-full max-w-md rounded-md bg-quaternary py-2 text-center text-primaryBg"
            >
              Login
            </Link>
          </div>
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
