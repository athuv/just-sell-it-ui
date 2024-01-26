'use client';

import CategoryModal from '@/app/components/popup/category/categoryModal';
import { useRouter, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaTag } from 'react-icons/fa';

function ButtonCategory() {
  const [IsModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<
    string[] | undefined
  >(undefined);

  const router = useRouter();
  const { area, category } = useParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selectedCategory &&
      router.push(`/ads/${area || 'all-location'}/${selectedCategory[1]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <>
      <button
        type="button"
        className="flex  items-center justify-center gap-2 overflow-hidden px-4"
        onClick={() => {
          setIsModalOpen(true);
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
      {IsModalOpen && (
        <CategoryModal
          setSelectedCategory={setSelectedCategory}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

export default ButtonCategory;
