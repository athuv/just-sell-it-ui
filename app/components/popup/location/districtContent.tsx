import { ModalAddContent } from '@/lib/types';
import { BiChevronRight } from 'react-icons/bi';

function DistrictContent({ addContent }: ModalAddContent) {
  const sriLankaDistricts = [
    'Ampara',
    'Anuradhapura',
    'Badulla',
    'Batticaloa',
    'Colombo',
    'Galle',
    'Gampaha',
    'Hambantota',
    'Jaffna',
    'Kalutara',
    'Kandy',
    'Kegalle',
    'Kilinochchi',
    'Kurunegala',
    'Mannar',
    'Matale',
    'Matara',
    'Monaragala',
    'Mullaittivu',
    'Nuwara Eliya',
    'Polonnaruwa',
    'Puttalam',
    'Ratnapura',
    'Trincomalee',
    'Vavuniya',
  ];

  // const handleDistrictClick = () => {
  //   // setCurrentContent('area');
  // };

  return (
    <div className=" p-4 text-quaternary">
      {sriLankaDistricts.map((district, index) => (
        <button
          type="button"
          className="flex w-full justify-between border-b py-3"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          onClick={() =>
            addContent({ contentType: 'district', id: index, value: district })
          }
        >
          <span>{district}</span>
          <span className="text-2xl">
            <BiChevronRight />
          </span>
        </button>
      ))}
    </div>
  );
}

export default DistrictContent;
