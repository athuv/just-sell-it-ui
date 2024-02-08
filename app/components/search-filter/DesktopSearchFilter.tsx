import ButtonCategory from '@/app/components/buttons/ButtonCategory';
import ButtonLocationAds from '@/app/components/buttons/ButtonLocationAds';
import SearchInput from '@/app/components/search-component/SearchInput';
import React from 'react';

function DesktopSearchFilter() {
  return (
    <div className="grid h-16 grid-cols-4 border-b">
      <div className="flex items-center justify-center font-bold">
        <ButtonLocationAds />
      </div>
      <div className="flex items-center justify-center font-bold">
        <ButtonCategory />
      </div>
      <div className="col-span-2 flex h-full w-full items-center justify-center">
        <div className="h-[80%] w-[95%] rounded-3xl border border-tertiaryBg">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

export default DesktopSearchFilter;
