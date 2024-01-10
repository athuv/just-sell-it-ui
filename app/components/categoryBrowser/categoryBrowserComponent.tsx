import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function CategoryBrowserComponent() {
  interface Category {
    id: string;
    name: string;
    icon: string;
  }

  const categories: Category[] = [
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
    <section className="flex w-full justify-center pt-4">
      <div className="flex h-48 w-full flex-col bg-primaryBg p-4 shadow-md md:h-full md:bg-transparent md:px-4 md:shadow-none lg:px-40">
        <div className="flex justify-between">
          <h1 className="font-bold">Browse Items By Category</h1>
          <span>See All</span>
        </div>
        <div className="h-full">
          <ul className="flex snap-x snap-mandatory overflow-x-scroll md:flex-wrap md:overflow-x-hidden">
            {categories.map((category) => (
              <li
                key={category.id}
                className="flex snap-start items-center md:w-1/4"
              >
                <Link
                  href="/"
                  className="flex flex-shrink-0 flex-col p-4 md:flex-shrink md:flex-row"
                >
                  <div className="flex items-center justify-center md:items-start">
                    <div className="m-3 flex h-14 w-14 items-center justify-center text-5xl">
                      <Image
                        src={category.icon}
                        alt={category.name}
                        height={800}
                        width={800}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center md:items-start">
                    <p className="whitespace-nowrap text-quaternary md:whitespace-normal">
                      {category.name}
                    </p>
                    <span className="text-xs text-quaternary">123, 123</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CategoryBrowserComponent;
