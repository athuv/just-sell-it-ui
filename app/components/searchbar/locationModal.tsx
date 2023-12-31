import DistrictContent from '@/app/components/searchbar/districtContent';
import PopularAreasContent from '@/app/components/searchbar/popularAreasContent';
import React, { Dispatch, SetStateAction, useState } from 'react';

const LocationModal = ({
  setIsLocationOpen,
  setSelectedArea,
}: {
  setIsLocationOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedArea: Dispatch<SetStateAction<string[]>>;
}) => {
  const [isSelected, setIsSelected] = useState('district');

  return (
    <div className="fixed left-0 top-0 z-20 flex h-full w-screen flex-col justify-center bg-quaternary">
      <div className="m-4 flex h-full overflow-hidden">
        <div className="relative block w-full overflow-y-auto rounded-xl bg-primaryBg p-4 outline-none">
          {isSelected === 'district' && (
            <DistrictContent
              setIsSelected={setIsSelected}
              setIsLocationOpen={setIsLocationOpen}
            />
          )}

          {isSelected === 'area' && (
            <PopularAreasContent
              setSelectedArea={setSelectedArea}
              setIsLocationOpen={setIsLocationOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
