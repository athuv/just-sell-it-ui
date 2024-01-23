'use client';

import LocationModal from '@/app/components/popup/location/locationModal';
import React, { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { useRouter, useParams } from 'next/navigation';

function ButtonLocationAds() {
  const [IsModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedArea, setSelectedArea] = useState<string[] | undefined>(
    undefined,
  );
  const router = useRouter();
  const { area } = useParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selectedArea && router.push(`/ads/${selectedArea[1]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedArea]);

  return (
    <>
      <button
        type="button"
        aria-label="Location"
        className="flex items-center justify-center gap-2 px-4"
        onClick={() => {
          setIsModalOpen(true);
          document.body.style.overflow = 'hidden';
        }}
      >
        <span className="text-xl text-tertiaryBg">
          <FaLocationDot />
        </span>
        <span>{area ? decodeURIComponent(area.toString()) : 'Location'}</span>
      </button>
      {IsModalOpen && (
        <LocationModal
          setSelectedArea={setSelectedArea}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

export default ButtonLocationAds;
