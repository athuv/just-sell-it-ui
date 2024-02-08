'use client';

import useModal from '@/app/_hooks/useModal';
import LocationModal from '@/app/components/popup/location/LocationModal';
import { BiSolidLocationPlus } from 'react-icons/bi';

function ButtonAllLocation() {
  const { isModalOpen, toggleModal, contents, addContent } = useModal();

  const areaContent = contents?.find(
    (content) => content.contentType === 'area',
  );
  return (
    <>
      <button
        aria-label="Select Location"
        type="button"
        className="flex items-center justify-center gap-2 rounded-md bg-quinary p-2 text-lg text-primaryBg"
        onClick={() => {
          toggleModal();
          document.body.style.overflow = 'hidden';
        }}
      >
        <BiSolidLocationPlus />
        <span>{areaContent ? areaContent.value : 'ALL LOCATION'}</span>
        <input readOnly hidden name="area" value="" />
      </button>
      {isModalOpen && (
        <LocationModal
          contents={contents}
          addContent={addContent}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}

export default ButtonAllLocation;
