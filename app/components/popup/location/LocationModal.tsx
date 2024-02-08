import React from 'react';
import AreaContent from '@/app/components/popup/location/AreaContent';
import DistrictContent from '@/app/components/popup/location/DistrictContent';
import { BiArrowBack } from 'react-icons/bi';
import Modal from '@/app/components/popup/Modal';
import { IModalWithoutIsModalOpen } from '@/lib/types';

function LocationModal({
  toggleModal,
  addContent,
  contents,
}: IModalWithoutIsModalOpen) {
  const districtContent = contents?.find(
    (content) => content.contentType === 'district',
  );

  return (
    <Modal toggleModal={toggleModal}>
      <div className="flex justify-between">
        <div className="text-2xl">
          {!districtContent && <h1>Select District</h1>}
          {districtContent && (
            <div className="flex gap-2">
              <button
                aria-label="Back to District"
                type="button"
                onClick={() =>
                  addContent({
                    contentType: 'district',
                    id: 0,
                    value: '',
                    remove: true,
                  })
                }
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
          {!districtContent && <DistrictContent addContent={addContent} />}
          {districtContent && (
            <AreaContent toggleModal={toggleModal} addContent={addContent} />
          )}
        </div>
      </div>
    </Modal>
  );
}

export default LocationModal;
