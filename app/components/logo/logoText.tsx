import React from 'react';
import { spaceMono } from '@/app/fonts';

const LogoText = ({ fontSize }: { fontSize: string }) => {
  return (
    <span className={`${spaceMono.className} ${fontSize} text-tertiaryBg`}>
      Just-Sell-It
    </span>
  );
};

export default LogoText;
