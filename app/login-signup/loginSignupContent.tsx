import React from 'react';
import Image from 'next/image';
import LoginForm from '@/app/login-signup/loginForm';
import SignupForm from '@/app/login-signup/signupForm';

function LoginSignupContent() {
  return (
    <aside className="flex flex-col items-center justify-center">
      <div className="w-full py-4 text-center">
        <h1 className="text-xl font-bold md:text-4xl">Welcome to J-S-I</h1>
        <span className="text-sm text-quaternary">
          The largest marketplace in Asia
        </span>
      </div>
      <div className="flex min-h-[505px] w-full items-center justify-center gap-4 divide-x-2 shadow-md">
        <div className="flex w-full justify-center pb-4 pt-4 md:w-1/2 md:p-4">
          <div className="w-full max-w-80">
            <SignupForm />
          </div>
        </div>
        <div className="flex w-2/4 flex-col p-4">
          <div className="flex w-full justify-center pt-4">
            <div className="w-full max-w-80">
              <LoginForm />
            </div>
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
