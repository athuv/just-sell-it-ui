import FilterContent from '@/app/components/popup/filter/FilterContent';
import Modal from '@/app/components/popup/Modal';
import { ModalToggle } from '@/lib/types';

function FilterModal({ toggleModal }: ModalToggle) {
  return (
    <Modal toggleModal={toggleModal}>
      <div className="flex justify-between">
        <div className="text-2xl">Filter</div>
      </div>
      <div className="h-full pt-4">
        <FilterContent toggleModal={toggleModal} />
      </div>
    </Modal>
  );
}

export default FilterModal;
