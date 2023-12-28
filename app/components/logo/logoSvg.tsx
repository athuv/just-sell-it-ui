'use client';
import React from 'react';
import Image from 'next/image';

const LogoSvg = () => {
  return (
    <>
      <div className="md:hidden">
        <Image src="logo-small.svg" alt="Logo" height={65} width={65} />
      </div>
      <div className="hidden md:block">
        <Image src="logo-large.svg" alt="Logo" height={65} width={200} />
      </div>
    </>
  );
};

export default LogoSvg;
