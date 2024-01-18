'use client';

import React from 'react';
import Image from 'next/image';

function LogoSvg() {
  return (
    <>
      <div className="flex h-16 w-16 items-center justify-center md:hidden">
        <Image src="logo-small.svg" alt="Logo" height={72.401} width={238.3} />
      </div>
      <div className="hidden h-16 w-52 md:flex md:items-center md:justify-center">
        <Image src="logo-large.svg" alt="Logo" height={29.121} width={286.2} />
      </div>
    </>
  );
}

export default LogoSvg;
