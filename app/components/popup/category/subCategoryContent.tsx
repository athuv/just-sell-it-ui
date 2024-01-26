import React, { Dispatch, SetStateAction } from 'react';
import { BiChevronRight } from 'react-icons/bi';

function SubCategoryContent({
  setSelectedCategory,
  setIsModalOpen,
}: {
  setSelectedCategory: Dispatch<SetStateAction<string[] | undefined>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const subCategories: string[] = [
    'Mobile Phones',
    'Mobile Phone Accessories',
    'Land for Sale',
    'Cars',
  ];

  return (
    <ul className="p-4 text-quaternary">
      {subCategories.map((_subCategory, index) => (
        <button
          type="button"
          className="flex w-full justify-between border-b py-3"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          onClick={() => {
            setSelectedCategory([index.toString(), _subCategory]);
            setIsModalOpen(false);
            document.body.style.overflow = 'visible';
          }}
        >
          <span>{_subCategory}</span>
          <span className="text-2xl">
            <BiChevronRight />
          </span>
        </button>
      ))}
    </ul>
  );
}

export default SubCategoryContent;
