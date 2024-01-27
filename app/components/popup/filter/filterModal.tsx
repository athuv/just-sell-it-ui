import FilterContent from '@/app/components/popup/filter/filterContent';
import Modal from '@/app/components/popup/modal';
import React, { Dispatch, SetStateAction } from 'react';

function FilterModal({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <div className="flex justify-between">
        <div className="text-2xl">Filter</div>
      </div>
      <div className="h-full pt-4">
        <FilterContent setIsModalOpen={setIsModalOpen} />
      </div>
    </Modal>
  );
}

export default FilterModal;
