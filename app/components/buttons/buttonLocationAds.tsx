'use client';

import LocationModal from '@/app/components/popup/location/locationModal';
import React, { useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { useRouter, useParams } from 'next/navigation';
import useModal from '@/app/_hooks/useModal';

function ButtonLocationAds() {
  const { isModalOpen, toggleModal, contents, addContent } = useModal();

  const areaContent = contents?.find(
    (content) => content.contentType === 'area',
  );

  const router = useRouter();
  const { area, category } = useParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    areaContent && router.push(`/ads/${areaContent.value}/${category || ''}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areaContent]);

  return (
    <>
      <button
        type="button"
        aria-label="Location"
        className="flex items-center justify-center gap-2 overflow-hidden px-4"
        onClick={() => {
          toggleModal();
          document.body.style.overflow = 'hidden';
        }}
      >
        <span className="text-xl text-tertiaryBg">
          <FaLocationDot />
        </span>
        <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">
          {/* eslint-disable-next-line no-nested-ternary */}
          {area
            ? area === 'all-location'
              ? 'Location'
              : decodeURIComponent(area.toString())
            : 'Location'}
        </span>
      </button>
      {isModalOpen && (
        <LocationModal
          contents={contents}
          addContent={addContent}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}

export default ButtonLocationAds;
