import React, { Dispatch, SetStateAction } from 'react';
import { BiSolidXCircle } from 'react-icons/bi';

const ButtonCloseModal = ({
  setIsSearchModalOpen,
}: {
  setIsSearchModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleLocationCloseClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setIsSearchModalOpen(false);
  };

  return (
    <button
      className="rounded-full bg-primaryBg text-2xl shadow-2xl"
      onClick={handleLocationCloseClick}
    >
      <BiSolidXCircle />
    </button>
  );
};

export default ButtonCloseModal;
