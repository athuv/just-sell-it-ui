import { ModalToggleAndAddContent } from '@/lib/types';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

function SubCategoryContent({
  addContent,
  toggleModal,
}: ModalToggleAndAddContent) {
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
            addContent({
              contentType: 'subCategory',
              id: index,
              value: _subCategory,
            });
            toggleModal();
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
