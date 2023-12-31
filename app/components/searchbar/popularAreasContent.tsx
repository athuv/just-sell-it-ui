import ButtonCloseModal from '@/app/components/searchbar/buttonCloseModal';
import React, { Dispatch, SetStateAction } from 'react';

const PopularAreasContent = ({
  setIsSearchModalOpen,
  setSelectedArea,
}: {
  setIsSearchModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedArea: Dispatch<SetStateAction<string[]>>;
}) => {
  const handleLiClick = (
    event: React.MouseEvent<HTMLLIElement>,
    id: string,
    value: string,
  ) => {
    event.preventDefault();
    setSelectedArea([id, value]);
    setIsSearchModalOpen(false);
  };
  return (
    <>
      <li></li>
      <li onClick={(event) => handleLiClick(event, '2', 'SELECTED LOC')}>
        Areas
      </li>
    </>
  );
};

export default PopularAreasContent;
