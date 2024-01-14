import AreaContent from '@/app/components/popup/location/areaContent';
import DistrictContent from '@/app/components/popup/location/districtContent';
import Link from 'next/link';
import { BiArrowBack, BiSolidXCircle } from 'react-icons/bi';

function Modal({ district = '' }: { district?: string }) {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-full w-screen flex-col justify-center bg-black bg-opacity-50">
      <div className="m-4 flex h-full overflow-hidden md:justify-center">
        <div className="relative block w-full overflow-y-auto rounded-xl bg-primaryBg p-4 outline-none md:w-[800px]">
          <div className="flex flex-col flex-nowrap content-center">
            <div className="flex justify-between">
              <div className="text-2xl">
                {district === '' && <h1>Select District</h1>}
                {district !== '' && (
                  <div className="flex gap-2">
                    <Link
                      href="/?showLocation=true"
                      aria-label="Back to District"
                      role="button"
                    >
                      <BiArrowBack />
                    </Link>
                    <h1>Select Area</h1>
                  </div>
                )}
              </div>
              <Link
                href="/?showLocation=false"
                role="button"
                aria-label="Close Modal"
                className="text-3xl"
              >
                <BiSolidXCircle />
              </Link>
            </div>
            <div>
              <div className="pt-4">
                {district === '' && <DistrictContent />}
                {district !== '' && <AreaContent />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
