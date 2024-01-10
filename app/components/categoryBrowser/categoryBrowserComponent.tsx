import Link from 'next/link';
import React from 'react';
import {
  FcAutomotive,
  FcCustomerSupport,
  FcFactory,
  FcHome,
  FcLandscape,
  FcMultipleCameras,
  FcPhoneAndroid,
  FcSportsMode,
} from 'react-icons/fc';

function CategoryBrowserComponent() {
  interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
  }

  const categories: Category[] = [
    {
      id: '1',
      name: 'Electronics',
      icon: <FcPhoneAndroid />,
    },
    {
      id: '2',
      name: 'Property',
      icon: <FcHome />,
    },
    {
      id: '4',
      name: 'Vechicles',
      icon: <FcAutomotive />,
    },
    {
      id: '5',
      name: 'Home & Garden',
      icon: <FcLandscape />,
    },
    {
      id: '6',
      name: 'Services',
      icon: <FcCustomerSupport />,
    },
    {
      id: '7',
      name: 'Business & Industry',
      icon: <FcFactory />,
    },
    {
      id: '8',
      name: 'Hobby, Sports & Kids',
      icon: <FcSportsMode />,
    },
    {
      id: '9',
      name: 'Vechicles',
      icon: <FcMultipleCameras />,
    },
  ];

  return (
    <section className="flex w-full justify-center pt-4">
      <div className="flex h-48 w-full flex-col bg-primaryBg p-4 shadow-md md:h-full md:bg-transparent md:px-4 md:shadow-none">
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
                      {category.icon}
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
