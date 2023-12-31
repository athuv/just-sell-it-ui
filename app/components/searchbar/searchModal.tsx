import ButtonCloseModal from '@/app/components/searchbar/buttonCloseModal';
import CategoryContent from '@/app/components/searchbar/categoryContent';
import DistrictContent from '@/app/components/searchbar/districtContent';
import PopularAreasContent from '@/app/components/searchbar/popularAreasContent';
import React, { Dispatch, SetStateAction, useState } from 'react';

const SearchModal = ({
  setIsSearchModalOpen,
  setSelectedArea,
  setSelectedCategory,
  setIsSelected,
  isSelected,
}: {
  setIsSearchModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedArea: Dispatch<SetStateAction<string[]>>;
  setIsSelected: Dispatch<SetStateAction<string>>;
  setSelectedCategory: Dispatch<SetStateAction<string[]>>;
  isSelected: string;
}) => {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-full w-screen flex-col justify-center bg-quaternary">
      <div className="m-4 flex h-full overflow-hidden">
        <div className="relative block w-full overflow-y-auto rounded-xl bg-primaryBg p-4 outline-none">
          <div className="flex flex-col flex-nowrap content-center">
            <div className="flex justify-between">
              <div>
                {isSelected === 'district' && 'Select District'}
                {isSelected === 'area' && 'Select Area'}
                {isSelected === 'area' && 'Select Area'}
                {isSelected === 'category' && 'Select Category'}
              </div>
              <ButtonCloseModal setIsSearchModalOpen={setIsSearchModalOpen} />
            </div>
            <div>
              <div className="pt-4">
                <ul className="divide-y divide-quaternary text-quaternary">
                  {isSelected === 'district' && (
                    <DistrictContent
                      setIsSelected={setIsSelected}
                      setIsSearchModalOpen={setIsSearchModalOpen}
                    />
                  )}
                  {isSelected === 'area' && (
                    <PopularAreasContent
                      setIsSearchModalOpen={setIsSearchModalOpen}
                      setSelectedArea={setSelectedArea}
                    />
                  )}
                  {isSelected === 'category' && (
                    <CategoryContent
                      setIsSearchModalOpen={setIsSearchModalOpen}
                      setIsSelected={setIsSelected}
                      setSelectedCategory={setSelectedCategory}
                    />
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
