import MainCategoryContent from '@/app/components/popup/category/MainCategoryContent';
import SubCategoryContent from '@/app/components/popup/category/SubCategoryContent';
import Modal from '@/app/components/popup/Modal';
import { IModalWithoutIsModalOpen } from '@/lib/types';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

function CategoryModal({
  toggleModal,
  addContent,
  contents,
}: IModalWithoutIsModalOpen) {
  // const [mainCategory, setMainCategory] = useState<string[] | undefined>(
  //   undefined,
  // );
  const mainCategory = contents?.find(
    (content) => content.contentType === 'mainCategory',
  );

  return (
    <Modal toggleModal={toggleModal}>
      <div className="flex justify-between">
        <div className="text-2xl">
          {!mainCategory && <h1>Select Category</h1>}
          {mainCategory && (
            <div className="flex gap-2">
              <button
                aria-label="Back to District"
                type="button"
                onClick={() =>
                  addContent({
                    contentType: 'mainCategory',
                    id: 0,
                    value: '',
                    remove: true,
                  })
                }
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
          {!mainCategory && <MainCategoryContent addContent={addContent} />}
          {mainCategory && (
            <SubCategoryContent
              toggleModal={toggleModal}
              addContent={addContent}
            />
          )}
        </div>
      </div>
    </Modal>
  );
}

export default CategoryModal;
