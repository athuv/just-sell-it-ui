'use client';
import HomeSearchInputContainer from '@/app/components/searchbar/homeSearchInputContainer';
import LocationModal from '@/app/components/searchbar/locationModal';
import React, { useState } from 'react';

const HomeSearchbar = () => {
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const [selectedArea, setSelectedArea] = useState<string[]>(['0', 'Location']);

  return (
    <>
      <HomeSearchInputContainer
        selectedArea={selectedArea}
        setIsLocationOpen={setIsLocationOpen}
      />
      {isLocationOpen && (
        <LocationModal
          setSelectedArea={setSelectedArea}
          setIsLocationOpen={setIsLocationOpen}
        />
      )}
    </>
  );
};

export default HomeSearchbar;
