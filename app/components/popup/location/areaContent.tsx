import { Dispatch, SetStateAction } from 'react';

function AreaContent({
  setSelectedArea,
  setIsModalOpen,
}: {
  setSelectedArea: Dispatch<SetStateAction<string[] | undefined>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul className="p-4 text-quaternary">
      <button
        type="button"
        key="1"
        onClick={() => {
          setSelectedArea(['1', 'Kandy']);
          setIsModalOpen(false);
          document.body.style.overflow = 'visible';
        }}
      >
        ABCDE
      </button>
    </ul>
  );
}

export default AreaContent;
