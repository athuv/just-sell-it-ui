import useModal from '@/app/_hooks/useModal';
import ModalLoginSignup from '@/app/components/popup/login-signup/ModalLoginSignup';
import React from 'react';
import { BiLogIn } from 'react-icons/bi';

function ButtonLoginRegisterSidebar() {
  const { isModalOpen, toggleModal, addContent, contents } = useModal();
  return (
    <>
      <button
        type="button"
        aria-label="Login or Register"
        className="flex items-center justify-center gap-2"
        onClick={() => toggleModal()}
      >
        <span className="text-tertiaryBg">
          <BiLogIn />
        </span>
        <span>Login/Register</span>
      </button>
      {isModalOpen && (
        <ModalLoginSignup
          addContent={addContent}
          contents={contents}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}

export default ButtonLoginRegisterSidebar;
