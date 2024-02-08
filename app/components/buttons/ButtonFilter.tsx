'use client';

import { GiSettingsKnobs } from 'react-icons/gi';
import dynamic from 'next/dynamic';
import useModal from '@/app/_hooks/useModal';

const FilterModal = dynamic(
  () => import('@/app/components/popup/filter/FilterModal'),
  {
    ssr: false,
  },
);

function ButtonFilter() {
  const { isModalOpen, toggleModal } = useModal();
  return (
    <>
      <button
        onClick={() => {
          toggleModal();
          document.body.style.overflow = 'hidden';
        }}
        type="button"
        aria-label="filter"
        className="px-4"
      >
        <span className="text-xl font-bold">
          <GiSettingsKnobs />
        </span>
      </button>
      {isModalOpen && <FilterModal toggleModal={toggleModal} />}
    </>
  );
}

export default ButtonFilter;
