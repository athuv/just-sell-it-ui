import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

function FilterContent({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  function onsubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries = Array.from(formData.entries());
    const queryParams = Object.fromEntries(
      entries.map(([key, value]) => [key, String(value)]),
    );

    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`?${queryString}`);
    setIsModalOpen(false);
    document.body.style.overflow = 'visible';
  }

  return (
    <div className=" p-4 text-quaternary">
      <form method="GET" onSubmit={onsubmit} className="h-full">
        <fieldset className="relative flex h-full flex-col gap-4">
          <div>
            <label className="flex flex-col gap-2">
              <span className="text-sm">Sort Results By:</span>
              <select className="border" name="sortBy">
                <option value="newest">Date: Newest</option>
                <option value="oldest">Date: Oldest</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="lowToHigh">Price: Low to High</option>
              </select>
            </label>
          </div>

          <div>
            <label className="flex flex-col ">
              <span className="text-sm">Filter Ads By:</span>
              <label className="flex items-center justify-start gap-2">
                <input type="checkbox" name="urgent" />
                Urgent
              </label>
              <label className="flex items-center justify-start gap-2">
                <input type="checkbox" name="featured" />
                Featured
              </label>
            </label>
          </div>
          <div className="fixed bottom-8 left-0 flex w-full items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Clear form fields"
              className="rounded-md bg-quaternary  text-primaryBg"
            >
              <input type="reset" value="Clear" className="h-auto px-6 py-2" />
            </button>
            <button
              type="submit"
              className="rounded-md bg-tertiaryBg px-6 py-2 text-primaryBg"
            >
              Apply
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default FilterContent;
