import ButtonCloseModal from '@/app/components/searchbar/buttonCloseModal';
import React, { Dispatch, SetStateAction } from 'react';

const PopularAreasContent = ({
  setIsLocationOpen,
}: {
  setIsLocationOpen: Dispatch<SetStateAction<boolean>>;
}) => {
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
            <li>Areas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularAreasContent;
