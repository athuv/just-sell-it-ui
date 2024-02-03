'use client';

import Modal from '@/app/components/popup/modal';
import React from 'react';
import { createPortal } from 'react-dom';
import EmailLoginContent from '@/app/components/popup/login-signup/emailLoginContent';
import SignupContent from '@/app/components/popup/login-signup/signupContent';
import { IModalWithoutIsModalOpen } from '@/lib/types';

function ModalLoginSignup({
  toggleModal,
  addContent,
  contents,
}: IModalWithoutIsModalOpen) {
  const login = contents?.find((content) => content.contentType === 'login');
  const signup = contents?.find((content) => content.contentType === 'signUp');

  return createPortal(
    <Modal toggleModal={toggleModal}>
      {(login || (!login && !signup)) && (
        <EmailLoginContent addContent={addContent} />
      )}
      {signup && <SignupContent addContent={addContent} />}
    </Modal>,
    document.getElementById('modal-root')!,
  );
}

export default ModalLoginSignup;
