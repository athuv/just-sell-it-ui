'use client';

import HumburgerMenuButton from '@/app/components/buttons/HamburgerMenuButton';
import Sidebar from '@/app/components/header/Sidebar';
import React, { useState } from 'react';

function DrawerSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <HumburgerMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default DrawerSidebar;
