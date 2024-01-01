import AreaContent from '@/app/components/popup/location/areaContent';
import DistrictContent from '@/app/components/popup/location/districtContent';
import React, { Dispatch, SetStateAction } from 'react';
import { BiArrowBack, BiSolidXCircle } from 'react-icons/bi';

function Modal({
  setIsModalOpen,
  setCurrentContent,
  currentContent,
  setSelectedArea,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentContent: Dispatch<SetStateAction<string>>;
  setSelectedArea: Dispatch<SetStateAction<string[]>>;
  currentContent: string;
}) {
  const handleModalCloseClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setIsModalOpen(false);
    setCurrentContent('district');
  };

  const handleBackButtonClick = () => {
    setCurrentContent('district');
  };

  return (
    <div className="fixed left-0 top-0 z-20 flex h-full w-screen flex-col justify-center bg-quaternary">
      <div className="m-4 flex h-full overflow-hidden">
        <div className="relative block w-full overflow-y-auto rounded-xl bg-primaryBg p-4 outline-none">
          <div className="flex flex-col flex-nowrap content-center">
            <div className="flex justify-between">
              <div className="text-2xl">
                {currentContent === 'district' && <h1>Select District</h1>}
                {currentContent === 'area' && (
                  <div className="flex gap-2">
                    <button
                      aria-label="Back to District"
                      onClick={handleBackButtonClick}
                      type="button"
                    >
                      <BiArrowBack />
                    </button>
                    <h1>Select Area</h1>
                  </div>
                )}
              </div>
              <button
                onClick={handleModalCloseClick}
                type="button"
                aria-label="Close Modal"
                className="text-3xl"
              >
                <BiSolidXCircle />
              </button>
            </div>
            <div>
              <div className="pt-4">
                {currentContent === 'district' && (
                  <DistrictContent setCurrentContent={setCurrentContent} />
                )}
                {currentContent === 'area' && (
                  <AreaContent
                    setIsModalOpen={setIsModalOpen}
                    setSelectedArea={setSelectedArea}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
