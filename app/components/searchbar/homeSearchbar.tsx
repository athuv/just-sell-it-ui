'use client';
import HomeSearchInputContainer from '@/app/components/searchbar/homeSearchInputContainer';
import SearchModal from '@/app/components/searchbar/searchModal';
import React, { useState } from 'react';

const HomeSearchbar = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [selectedArea, setSelectedArea] = useState<string[]>(['', 'Location']);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([
    '',
    'Category',
  ]);
  const [isSelected, setIsSelected] = useState('district');

  return (
    <>
      <HomeSearchInputContainer
        selectedArea={selectedArea}
        selectedCategory={selectedCategory}
        setIsSearchModalOpen={setIsSearchModalOpen}
        setIsSelected={setIsSelected}
      />
      {isSearchModalOpen && (
        <SearchModal
          setSelectedArea={setSelectedArea}
          setSelectedCategory={setSelectedCategory}
          setIsSearchModalOpen={setIsSearchModalOpen}
          setIsSelected={setIsSelected}
          isSelected={isSelected}
        />
      )}
    </>
  );
};

export default HomeSearchbar;
