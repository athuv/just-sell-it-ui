'use client';
import HumburgerMenuButton from '@/app/components/buttons/hamburgerMenuButton';
import Sidebar from '@/app/components/header/sidebar';
import React, { useState } from 'react';

const DrawerSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <HumburgerMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default DrawerSidebar;
