import React from 'react';
import { FcMoneyTransfer, FcPlus } from 'react-icons/fc';
import Image from 'next/image';
import { BiChevronRightCircle } from 'react-icons/bi';

function PostAdandJob() {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col items-center justify-center gap-2 px-4 pt-4 md:flex-row md:gap-0 md:px-40">
        <div className="flex w-full items-center justify-center rounded-md bg-primaryBg shadow-sm md:h-48 md:border-r">
          <div className="flex flex-col items-center justify-center p-4 md:flex-row">
            <div className="text-9xl">
              <FcMoneyTransfer />
            </div>

            <div className="mb-1 flex flex-col items-center justify-center">
              <div>
                <h1 className="text-xl font-bold">Start Making Money!</h1>
              </div>
              <p className="flex flex-col items-center justify-center text-quaternary">
                <span>Do you have something to sell? </span>
                <span className="text-center">
                  Post your first ad and start making money!
                </span>
              </p>
              <div className="md:pt-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-full bg-tertiaryBg p-2 pr-4 text-primaryBg"
                  aria-label="Post your ad for free"
                >
                  <span className="text-2xl">
                    <FcPlus />
                  </span>
                  <span>Post your ad for free</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-md bg-primaryBg shadow-sm md:h-48">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="flex items-center justify-center">
              <Image
                src="just-jobs-logo.svg"
                alt="Logo"
                height={21}
                width={140}
              />
            </div>
            <div className="mb-1 flex items-center justify-center">
              <p className="flex flex-col items-center justify-center text-quaternary">
                <span>Looking to hire or get hired ?</span>
                <span className="text-center">
                  Get access to 400k+ CVs or browse through 4.5k+ job vacancies!
                </span>
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-full bg-[#0074ba] p-2 pl-4 font-bold text-primaryBg"
                aria-label="Post your ad for free"
              >
                <span>Explore More</span>
                <span className="text-2xl">
                  <BiChevronRightCircle />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostAdandJob;
