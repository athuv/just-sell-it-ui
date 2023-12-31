import ErrorMessage from '@/app/components/error/errorMessage';
import { SearchFormSubmit } from '@/app/components/searchbar/SearchFormAction';
import { SearchSchema, searchSchema } from '@/lib/searchSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiCategoryAlt, BiLocationPlus, BiSearch } from 'react-icons/bi';

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
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [state, formAction] = useFormState(SearchFormSubmit, undefined);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<SearchSchema>({
    mode: 'all',
    resolver: zodResolver(searchSchema),
  });

  const onSubmit: SubmitHandler<SearchSchema> = (data) => console.log(data);

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

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return undefined;
    }

    setValue('location', selectedArea[0], {
      shouldValidate: true,
      shouldTouch: true,
    });
  }, [selectedArea]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return undefined;
    }

    setValue('category', selectedCategory[0], {
      shouldValidate: true,
      shouldTouch: true,
    });
  }, [selectedCategory]);

  return (
    <section className="w-full">
      <form method="POST" onSubmit={handleSubmit(onSubmit)} action={formAction}>
        <div
          role="group"
          aria-label="Search"
          className="flex flex-col gap-2 pt-3 text-quaternary"
        >
          <div>
            <button
              aria-label="Location"
              className="flex h-14 w-full items-center justify-start gap-2 border pl-4"
              onClick={handleLocationButtonClick}
            >
              <BiLocationPlus />
              <span>{selectedArea[1]}</span>
            </button>
            <input
              {...register('location')}
              type="text"
              name="location"
              readOnly
              hidden
              value={selectedArea[0]}
            />
            <ErrorMessage>{state?.message.location}</ErrorMessage>
            <ErrorMessage>
              {errors.location && errors?.location.message}
            </ErrorMessage>
          </div>

          <div>
            <button
              onClick={handleCategoryButtonClick}
              aria-label="Category"
              className="flex h-14 w-full items-center justify-start gap-2 border pl-4"
            >
              <BiCategoryAlt />
              <span>{selectedCategory[1]}</span>
            </button>
            <input
              {...register('category')}
              type="text"
              name="category"
              hidden
              readOnly
              value={selectedCategory[0]}
            />
            <ErrorMessage>{state?.message.keyword}</ErrorMessage>
            <ErrorMessage>
              {errors.category && errors?.category.message}
            </ErrorMessage>
          </div>

          <div className="relative">
            <input
              {...register('keyword')}
              aria-label="Search Keyword"
              placeholder="Keyword"
              className="placeholder:pl-15 h-14 w-full border bg-primaryBg bg-[url('/keyboard-icon.svg')]  bg-[1.1rem] bg-no-repeat pl-10 placeholder:text-quaternary"
              type="text"
            />
            <ErrorMessage>{state?.message.keyword}</ErrorMessage>
            <ErrorMessage>
              {errors.keyword && errors?.keyword.message}
            </ErrorMessage>
          </div>
          <button
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
            type="submit"
            aria-label="Search"
            className="flex h-14 w-full flex-row items-center justify-center gap-2 border bg-tertiaryBg text-xl text-primaryBg"
          >
            <BiSearch />
            <span>Search</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default HomeSearchInputContainer;
