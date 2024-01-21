import React from 'react';
import { spaceMono } from '@/app/fonts';

function LogoText({
  fontSize,
  children,
}: {
  fontSize: string;
  children: React.ReactNode;
}) {
  return (
    <span className={`${spaceMono.className} ${fontSize} text-tertiaryBg`}>
      {children}
    </span>
  );
}

export default LogoText;
