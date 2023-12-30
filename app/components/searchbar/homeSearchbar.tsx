'use client';
import HomeSearchInputContainer from '@/app/components/searchbar/homeSearchInputContainer';
import LocationModal from '@/app/components/searchbar/locationModal';
import React, { useState } from 'react';

const HomeSearchbar = () => {
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);

  return (
    <>
      <HomeSearchInputContainer setIsLocationOpen={setIsLocationOpen} />
      {isLocationOpen && (
        <LocationModal setIsLocationOpen={setIsLocationOpen} />
      )}
    </>
  );
};

export default HomeSearchbar;
