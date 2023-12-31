import ButtonCloseModal from '@/app/components/searchbar/buttonCloseModal';
import React, { Dispatch, SetStateAction } from 'react';

const PopularAreasContent = ({
  setIsLocationOpen,
  setSelectedArea,
}: {
  setIsLocationOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedArea: Dispatch<SetStateAction<string[]>>;
}) => {
  const handleLiClick = (
    event: React.MouseEvent<HTMLLIElement>,
    id: string,
    value: string,
  ) => {
    event.preventDefault();
    setSelectedArea([id, value]);
    setIsLocationOpen(false);
  };
  return (
    <div className="flex flex-col flex-nowrap content-center">
      <div className="flex justify-between">
        <div>Popular Areas</div>
        <ButtonCloseModal setIsLocationOpen={setIsLocationOpen} />
      </div>
      <div>
        <div className="pt-4">
          <ul className="divide-y divide-quaternary text-quaternary">
            <li></li>
            <li onClick={(event) => handleLiClick(event, '2', 'SELECTED LOC')}>
              Areas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularAreasContent;
