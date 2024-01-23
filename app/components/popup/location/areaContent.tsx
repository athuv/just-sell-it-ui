import { Dispatch, SetStateAction } from 'react';
import { BiChevronRight } from 'react-icons/bi';

function AreaContent({
  setSelectedArea,
  setIsModalOpen,
}: {
  setSelectedArea: Dispatch<SetStateAction<string[] | undefined>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const areas: string[] = ['Kandy City', 'Gampola', 'Nawalapitiya', 'Geli-Oya'];
  return (
    <ul className="p-4 text-quaternary">
      {areas.map((_area, index) => (
        <button
          type="button"
          className="flex w-full justify-between border-b py-3"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          onClick={() => {
            setSelectedArea([index.toString(), _area]);
            setIsModalOpen(false);
            document.body.style.overflow = 'visible';
          }}
        >
          <span>{_area}</span>
          <span className="text-2xl">
            <BiChevronRight />
          </span>
        </button>
      ))}
    </ul>
  );
}

export default AreaContent;
