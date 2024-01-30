'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'slick-carousel/slick/slick.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';

function SampleNextArrow({
  className,
  style,
  onClick,
}: {
  className: string;
  style: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`${className} !hidden sm:!block`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({
  className,
  style,
  onClick,
}: {
  className: string;
  style: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`${className} !hidden sm:!block`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  const slides: string[] = [
    '/ad-images/desktop-pic.jpg',
    '/ad-images/desktop-pic-2.jpg',
    '/ad-images/desktop-pic.jpg',
    '/ad-images/desktop-pic-2.jpg',
    '/ad-images/desktop-pic.jpg',
  ];

  const settings = {
    dots: true,
    className:
      'h-fit max-h-[306px] w-full max-w-[510px] sm:h-[306px] sm:w-[510px]',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="" style={{}} onClick={() => {}} />,
    prevArrow: <SamplePrevArrow className="" style={{}} onClick={() => {}} />,
  };
  return (
    <div className="h-fit max-h-[306px] w-full max-w-[510px]  sm:h-[306px] sm:w-[510px]">
      <Slider {...settings}>
        {slides.map((_slide, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="flex h-fit max-h-[306px] w-full max-w-[510px] object-contain sm:h-[306px] sm:w-[510px]"
          >
            <Image
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              src={_slide}
              alt="item-image"
              width={605}
              height={466}
              style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
