import React from 'react';
import Image from 'next/image';

import LoginForm from '@/app/login-signup/loginForm';
import { ModalAddContent } from '@/lib/types';

function EmailLoginContent({ addContent }: ModalAddContent) {
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
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border-b pb-5 pt-6 md:border-b-0">
            <h1 className="font-bold">Don&apos;t have an account yet?</h1>
            <button
              type="button"
              className="w-full max-w-md rounded-md border border-quaternary bg-quaternary py-2 text-primaryBg"
              onClick={() => {
                addContent({
                  contentType: 'signUp',
                  id: 0,
                  value: '',
                });
                addContent({
                  contentType: 'login',
                  id: 0,
                  value: '',
                  remove: true,
                });
              }}
            >
              Signup
            </button>
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

export default EmailLoginContent;
