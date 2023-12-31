import ButtonCloseModal from '@/app/components/searchbar/buttonCloseModal';
import React, { Dispatch, SetStateAction } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';

const DistrictContent = ({
  setIsSearchModalOpen,
  setIsSelected,
}: {
  setIsSearchModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsSelected: Dispatch<SetStateAction<string>>;
}) => {
  const sriLankaDistricts = [
    'Ampara',
    'Anuradhapura',
    'Badulla',
    'Batticaloa',
    'Colombo',
    'Galle',
    'Gampaha',
    'Hambantota',
    'Jaffna',
    'Kalutara',
    'Kandy',
    'Kegalle',
    'Kilinochchi',
    'Kurunegala',
    'Mannar',
    'Matale',
    'Matara',
    'Monaragala',
    'Mullaittivu',
    'Nuwara Eliya',
    'Polonnaruwa',
    'Puttalam',
    'Ratnapura',
    'Trincomalee',
    'Vavuniya',
  ];

  const handleLiClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    setIsSelected('area');
  };

  return (
    <>
      <li></li>
      {sriLankaDistricts.map((districts, index) => (
        <li
          key={index}
          className="flex items-center justify-between py-2"
          onClick={handleLiClick}
        >
          <span>{districts}</span>
          <BiSolidChevronRight />
        </li>
      ))}
    </>
  );
};

export default DistrictContent;
