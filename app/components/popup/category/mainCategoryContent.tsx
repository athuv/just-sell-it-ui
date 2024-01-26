import React, { Dispatch, SetStateAction } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';

function MainCategoryContent({
  setMainCategory,
}: {
  setMainCategory: Dispatch<SetStateAction<string[] | undefined>>;
}) {
  interface MainCategory {
    id: string;
    name: string;
    icon: string;
  }

  const mainCategory: MainCategory[] = [
    {
      id: '1',
      name: 'Electronics',
      icon: 'phone-android.svg',
    },
    {
      id: '2',
      name: 'Property',
      icon: 'property.svg',
    },
    {
      id: '4',
      name: 'Vechicles',
      icon: 'vechicles.svg',
    },
    {
      id: '5',
      name: 'Home & Garden',
      icon: 'home-and-garden.svg',
    },
    {
      id: '6',
      name: 'Services',
      icon: 'services.svg',
    },
    {
      id: '7',
      name: 'Business & Industry',
      icon: 'business-and-industry.svg',
    },
    {
      id: '8',
      name: 'Hobby, Sports & Kids',
      icon: 'hobby-sports-kids.svg',
    },
    {
      id: '9',
      name: 'Vechicles',
      icon: 'jobs.svg',
    },
    {
      id: '10',
      name: 'Animals',
      icon: 'animals.svg',
    },
    {
      id: '11',
      name: 'Fashion & Beauty',
      icon: 'fashion-and-beauty.svg',
    },
    {
      id: '12',
      name: 'Education',
      icon: 'education.svg',
    },
    {
      id: '13',
      name: 'Other',
      icon: 'other.svg',
    },
    {
      id: '14',
      name: 'Essentials',
      icon: 'essentials.svg',
    },
    {
      id: '15',
      name: 'Agriculture',
      icon: 'agriculture.svg',
    },
  ];

  return (
    <div className=" p-4 text-quaternary">
      {mainCategory.map((category) => (
        <button
          type="button"
          className="flex w-full justify-between border-b py-3"
          // eslint-disable-next-line react/no-array-index-key
          key={category.id}
          onClick={() => setMainCategory([category.id, category.name])}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex h-4 w-4 items-center justify-center">
              <Image
                src={category.icon}
                alt={category.name}
                height={800}
                width={800}
              />
            </div>
            <span>{category.name}</span>
          </div>

          <span className="text-2xl">
            <BiChevronRight />
          </span>
        </button>
      ))}
    </div>
  );
}

export default MainCategoryContent;
