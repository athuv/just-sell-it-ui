import React, { Dispatch, SetStateAction } from 'react';
import { BiSolidXCircle, BiSolidChevronRight } from 'react-icons/bi';

const LocationModal = ({
  setIsLocationOpen,
}: {
  setIsLocationOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleLocationCloseClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setIsLocationOpen(false);
  };

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

  return (
    <div className="fixed left-0 top-0 z-20 flex h-full w-screen flex-col justify-center bg-quaternary">
      <div className="m-4 flex h-full overflow-hidden">
        <div className="relative block w-full overflow-y-auto rounded-xl bg-primaryBg p-4 outline-none">
          <div className="flex flex-col flex-nowrap content-center">
            <div className="flex justify-between">
              <div>Select District</div>
              <button
                className="rounded-full bg-primaryBg text-2xl shadow-2xl"
                onClick={handleLocationCloseClick}
              >
                <BiSolidXCircle />
              </button>
            </div>
            <div>
              <div className="pt-4">
                <ul className="divide-y divide-quaternary text-quaternary">
                  <li></li>
                  {sriLankaDistricts.map((districts, index) => (
                    <li className="flex items-center justify-between py-2">
                      <span>{districts}</span>
                      <BiSolidChevronRight />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
