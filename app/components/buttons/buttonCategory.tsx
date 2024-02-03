'use client';

import useModal from '@/app/_hooks/useModal';
import CategoryModal from '@/app/components/popup/category/categoryModal';
import { useRouter, useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaTag } from 'react-icons/fa';

function ButtonCategory() {
  const { isModalOpen, toggleModal, contents, addContent } = useModal();

  const selectedCategory = contents?.find(
    (content) => content.contentType === 'subCategory',
  );

  const router = useRouter();
  const { area, category } = useParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selectedCategory &&
      router.push(`/ads/${area || 'all-location'}/${selectedCategory.value}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <>
      <button
        type="button"
        className="flex  items-center justify-center gap-2 overflow-hidden px-4"
        onClick={() => {
          toggleModal();
          document.body.style.overflow = 'hidden';
        }}
      >
        <span className="text-xl text-tertiaryBg">
          <FaTag />
        </span>
        <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">
          {category ? decodeURIComponent(category.toString()) : 'Category'}
        </span>
      </button>
      {isModalOpen && (
        <CategoryModal
          addContent={addContent}
          toggleModal={toggleModal}
          contents={contents}
        />
      )}
    </>
  );
}

export default ButtonCategory;
