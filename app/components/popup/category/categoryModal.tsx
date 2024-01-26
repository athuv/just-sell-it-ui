import MainCategoryContent from '@/app/components/popup/category/mainCategoryContent';
import SubCategoryContent from '@/app/components/popup/category/subCategoryContent';
import Modal from '@/app/components/popup/modal';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

function CategoryModal({
  setIsModalOpen,
  setSelectedCategory,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedCategory: Dispatch<SetStateAction<string[] | undefined>>;
}) {
  const [mainCategory, setMainCategory] = useState<string[] | undefined>(
    undefined,
  );

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <div className="flex justify-between">
        <div className="text-2xl">
          {!mainCategory && <h1>Select Category</h1>}
          {mainCategory && (
            <div className="flex gap-2">
              <button
                aria-label="Back to District"
                type="button"
                onClick={() => setMainCategory(undefined)}
              >
                <BiArrowBack />
              </button>
              <h1>Select Area</h1>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="pt-4">
          {!mainCategory && (
            <MainCategoryContent setMainCategory={setMainCategory} />
          )}
          {mainCategory && (
            <SubCategoryContent
              setIsModalOpen={setIsModalOpen}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        </div>
      </div>
    </Modal>
  );
}

export default CategoryModal;
