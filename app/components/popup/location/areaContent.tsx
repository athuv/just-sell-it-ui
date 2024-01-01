import React, { Dispatch, SetStateAction } from 'react';

function AreaContent({
  setSelectedArea,
  setIsModalOpen,
}: {
  setSelectedArea: Dispatch<SetStateAction<string[]>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  function handleAreaClick(id: string, area: string) {
    setSelectedArea([id, area]);
    setIsModalOpen(false);
  }

  return (
    <ul className="p-4 text-quaternary">
      <button
        type="button"
        key="1"
        onClick={() => {
          handleAreaClick('1', 'LOC');
        }}
      >
        ABCDE
      </button>
    </ul>
  );
}

export default AreaContent;
