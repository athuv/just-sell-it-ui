import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

function DistrictContent() {
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
        <Link
          href={`/?showLocation=true&district=${index}`}
          className="flex w-full justify-between border-b py-3"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          <span>{district}</span>
          <span className="text-2xl">
            <BiChevronRight />
          </span>
        </Link>
      ))}
    </div>
  );
}

export default DistrictContent;
