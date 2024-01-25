'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Slider() {
  const slides: string[] = [
    '/ad-images/desktop-pic.jpg',
    '/ad-images/desktop-pic-2.jpg',
    '/ad-images/desktop-pic.jpg',
    '/ad-images/desktop-pic-2.jpg',
    '/ad-images/desktop-pic.jpg',
  ];

  const sequence = [0, -20, -40, -60, -80, -60, -40, -20, 0];
  const [translateValue, setTranslateValue] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isAutoSliding) {
        setTranslateValue((prevIndex) => (prevIndex + 1) % sequence.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoSliding]);

  function handleLeftButtonClick() {
    setIsAutoSliding(false);
    setTranslateValue(
      (prevIndex) => (prevIndex - 1 + sequence.length) % sequence.length,
    );
    setIsAutoSliding(true);
  }

  function handleRightButtonClick() {
    setIsAutoSliding(false);
    setTranslateValue((prevIndex) => (prevIndex + 1) % sequence.length);
    setIsAutoSliding(true);
  }

  return (
    <div className="h-48 w-[343px] bg-cyan-700 lg:h-[306px] lg:w-[510px]">
      <div className="relative flex h-48 w-[343px] overflow-hidden lg:h-[306px] lg:w-[510px]">
        <div className="absolute left-3 top-3 z-50">
          <div className="h-4 w-4">
            <Image
              src="logo-small.svg"
              alt="Logo"
              height={72.401}
              width={238.3}
            />
          </div>
        </div>
        <button
          aria-label="left"
          type="button"
          className="absolute left-0 z-50 hidden bg-transparent lg:top-32 lg:inline-block"
          onClick={handleLeftButtonClick}
        >
          <div className="bg-primaryBg text-5xl">
            <BiChevronLeft />
          </div>
        </button>
        <button
          aria-label="Right"
          type="button"
          className="absolute right-0 z-50 hidden bg-transparent lg:top-32 lg:inline-block"
          onClick={handleRightButtonClick}
        >
          <div className="bg-primaryBg text-5xl">
            <BiChevronRight />
          </div>
        </button>
        <ul
          style={{
            transform: `translateX(${sequence[translateValue]}%)`,
            transition: 'transform 500ms ease-out',
          }}
          className="flex translate-y-0 list-none flex-nowrap"
        >
          {slides.map((_slide, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="flex h-48 w-[343px] list-none bg-cover lg:h-[306px] lg:w-[510px]"
            >
              <Image src={_slide} alt="item-image" width={605} height={466} />
              {/* <Link className="flex flex-1 items-end" href="/">
                avcde
              </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
