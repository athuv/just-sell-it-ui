'use client';

import ModalLoginSignup from '@/app/components/popup/login-signup/modalLoginSignup';
import React, { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';

function ButtonLoginRegisterNavbar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <button
        type="button"
        aria-label="Login or Register"
        className="flex items-center justify-center gap-1 text-lg"
        onClick={() => {
          setIsModalOpen(true);
          document.body.style.overflow = 'hidden';
          document.body.setAttribute('aria-hidden', 'true');
        }}
      >
        <BiSolidUser />
        <span className="hidden lg:inline-block">Login/Register</span>
      </button>
      {isModalOpen && <ModalLoginSignup setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default ButtonLoginRegisterNavbar;
