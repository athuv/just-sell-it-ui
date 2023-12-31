import { SearchFormSubmit } from '@/app/components/searchbar/SearchFormAction';
import React, { Dispatch, SetStateAction } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { BiCategoryAlt, BiLocationPlus, BiSearch } from 'react-icons/bi';

const initialState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      type="submit"
      aria-label="Search"
      className="flex h-14 w-full flex-row items-center justify-center gap-2 border bg-tertiaryBg text-xl text-primaryBg"
    >
      <BiSearch />
      <span>Search</span>
    </button>
  );
}

const HomeSearchInputContainer = ({
  setIsLocationOpen,
  selectedArea,
}: {
  setIsLocationOpen: Dispatch<SetStateAction<boolean>>;
  selectedArea: string[];
}) => {
  const [state, formAction] = useFormState(SearchFormSubmit, initialState);

  const handleLocationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLocationOpen(true);
  };

  return (
    <section className="w-full">
      <form action={formAction}>
        <div
          role="group"
          aria-label="Search"
          className="flex flex-col gap-2 pt-3 text-quaternary"
        >
          <button
            aria-label="Location"
            className="flex h-14 w-full items-center justify-start gap-2 border pl-4"
            onClick={handleLocationClick}
          >
            <BiLocationPlus />
            <span>{selectedArea[1]}</span>
          </button>
          <input
            type="text"
            name="location"
            readOnly
            hidden
            value={selectedArea[0]}
          />
          <button
            aria-label="Category"
            className="flex h-14 w-full items-center justify-start gap-2 border pl-4"
          >
            <BiCategoryAlt />
            <span>Category</span>
          </button>
          <input type="text" name="category" readOnly hidden value="123" />
          <div className="relative">
            <input
              name="keyword"
              aria-label="Search"
              placeholder="Keyword"
              className="placeholder:pl-15 h-14 w-full border bg-primaryBg bg-[url('/keyboard-icon.svg')]  bg-[1.1rem] bg-no-repeat pl-10 placeholder:text-quaternary"
              type="text"
              defaultValue={''}
            />
          </div>
          <SubmitButton />
        </div>
      </form>
    </section>
  );
};

export default HomeSearchInputContainer;
