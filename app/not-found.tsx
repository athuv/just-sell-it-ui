import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <div className="lg:p-8¬ flex w-full flex-col items-center justify-center gap-4 py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:w-fit">
        <p className="text-center text-2xl">
          The page you are looking for is unavailable
        </p>

        <button
          type="button"
          className="rounded-md bg-tertiaryBg px-4 py-2 text-primaryBg"
        >
          <Link href="/">All Ads</Link>
        </button>
      </div>
      <div className="flex flex-col gap-2 text-tertiaryBg">
        <div className="text-2xl">
          <p className="text-center">Do you have something to sell?</p>
        </div>
        <div className="flex flex-col">
          <button
            type="button"
            className="self-center rounded-md bg-quaternary px-4 py-2 text-primaryBg"
          >
            Post an ad now
          </button>
        </div>
      </div>
    </main>
  );
}
