import React, { useState, Dispatch, SetStateAction } from 'react';
import AreaContent from '@/app/components/popup/location/areaContent';
import DistrictContent from '@/app/components/popup/location/districtContent';
import { BiArrowBack } from 'react-icons/bi';
import Modal from '@/app/components/popup/modal';

function LocationModal({
  setIsModalOpen,
  setSelectedArea,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedArea: Dispatch<SetStateAction<string[] | undefined>>;
}) {
  const [district, setDistrict] = useState<string[] | undefined>(undefined);

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <div className="flex justify-between">
        <div className="text-2xl">
          {!district && <h1>Select District</h1>}
          {district && (
            <div className="flex gap-2">
              <button
                aria-label="Back to District"
                type="button"
                onClick={() => setDistrict(undefined)}
              >
                <BiArrowBack />
              </button>
              <h1>Select Area</h1>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="pt-4">
          {!district && <DistrictContent setDistrict={setDistrict} />}
          {district && (
            <AreaContent
              setIsModalOpen={setIsModalOpen}
              setSelectedArea={setSelectedArea}
            />
          )}
        </div>
      </div>
    </Modal>
  );
}

export default LocationModal;
