import ModalLoginSignup from '@/app/components/popup/login-signup/modalLoginSignup';
import React, { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';

function ButtonLoginRegisterSidebar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <button
        type="button"
        aria-label="Login or Register"
        className="flex items-center justify-center gap-2"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="text-tertiaryBg">
          <BiLogIn />
        </span>
        <span>Login/Register</span>
      </button>
      {isModalOpen && <ModalLoginSignup setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default ButtonLoginRegisterSidebar;
