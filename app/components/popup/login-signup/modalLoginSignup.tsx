'use client';

import Modal from '@/app/components/popup/modal';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { createPortal } from 'react-dom';
import EmailLogin from '@/app/components/popup/login-signup/emailLogin';
import SignupContent from '@/app/components/popup/login-signup/signupContent';

function ModalLoginSignup({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [content, setContent] = useState<string>('login');
  return createPortal(
    <Modal setIsModalOpen={setIsModalOpen}>
      {content === 'login' && <EmailLogin setContent={setContent} />}
      {content === 'signup' && <SignupContent setContent={setContent} />}
    </Modal>,
    document.getElementById('modal-root')!,
  );
}

export default ModalLoginSignup;
