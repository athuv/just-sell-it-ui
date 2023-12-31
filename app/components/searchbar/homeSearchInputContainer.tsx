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
  setIsSearchModalOpen,
  selectedArea,
  setIsSelected,
  selectedCategory,
}: {
  setIsSearchModalOpen: Dispatch<SetStateAction<boolean>>;
  selectedArea: string[];
  setIsSelected: Dispatch<SetStateAction<string>>;
  selectedCategory: string[];
}) => {
  const [state, formAction] = useFormState(SearchFormSubmit, initialState);

  const handleLocationButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setIsSearchModalOpen(true);
    setIsSelected('district');
  };

  const handleCategoryButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setIsSearchModalOpen(true);
    setIsSelected('category');
  };

  return (
    <section className="w-full">
      <form method="POST" action={formAction}>
        <div
          role="group"
          aria-label="Search"
          className="flex flex-col gap-2 pt-3 text-quaternary"
        >
          <button
            aria-label="Location"
            className="flex h-14 w-full items-center justify-start gap-2 border pl-4"
            onClick={handleLocationButtonClick}
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
            onClick={handleCategoryButtonClick}
            aria-label="Category"
            className="flex h-14 w-full items-center justify-start gap-2 border pl-4"
          >
            <BiCategoryAlt />
            <span>{selectedCategory[1]}</span>
          </button>
          <input
            type="text"
            name="category"
            readOnly
            hidden
            value={selectedCategory[0]}
          />
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
