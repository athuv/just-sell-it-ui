'use client';

import useModal from '@/app/_hooks/useModal';
import ModalLoginSignup from '@/app/components/popup/login-signup/modalLoginSignup';
import { BiSolidUser } from 'react-icons/bi';

function ButtonLoginRegisterNavbar() {
  const { isModalOpen, toggleModal, addContent, contents } = useModal();
  return (
    <>
      <button
        type="button"
        aria-label="Login or Register"
        className="flex items-center justify-center gap-1 text-lg"
        onClick={() => {
          toggleModal();
          document.body.style.overflow = 'hidden';
          document.body.setAttribute('aria-hidden', 'true');
        }}
      >
        <BiSolidUser />
        <span className="hidden lg:inline-block">Login/Register</span>
      </button>
      {isModalOpen && (
        <ModalLoginSignup
          toggleModal={toggleModal}
          addContent={addContent}
          contents={contents}
        />
      )}
    </>
  );
}

export default ButtonLoginRegisterNavbar;
