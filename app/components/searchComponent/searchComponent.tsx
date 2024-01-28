import ButtonAllLocation from '@/app/components/buttons/buttonAllLocation';
import SearchInput from '@/app/components/searchComponent/searchInput';
import React from 'react';

function SearchComponent() {
  return (
    <section className="w-full">
      <div className="flex h-48 w-full flex-col items-center justify-center bg-tertiaryBg px-4 md:h-60">
        <form className="w-full">
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <ButtonAllLocation />
            </div>
            <div className="h-11 w-full md:h-14 md:w-[755px]">
              <SearchInput />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchComponent;
