import ButtonCategory from '@/app/components/buttons/ButtonCategory';
import ButtonFilter from '@/app/components/buttons/ButtonFilter';
import ButtonLocationAds from '@/app/components/buttons/ButtonLocationAds';
import SearchInput from '@/app/components/search-component/SearchInput';
import React from 'react';

function MobileSearchFilter() {
  return (
    <>
      <div className="h-20 bg-tertiaryBg px-4 py-4">
        <div className="h-12 w-full">
          <SearchInput />
        </div>
      </div>
      <div className="flex h-11 items-center justify-between divide-x shadow-md">
        <ButtonLocationAds />
        <ButtonCategory />
        <ButtonFilter />
      </div>
    </>
  );
}

export default MobileSearchFilter;
