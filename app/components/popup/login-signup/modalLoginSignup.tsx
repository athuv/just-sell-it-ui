import Modal from '@/app/components/popup/modal';
import React, { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

function ModalLoginSignup({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return createPortal(
    <Modal setIsModalOpen={setIsModalOpen}>ModalLoginSignup</Modal>,
    document.getElementById('modal-root')!,
  );
}

export default ModalLoginSignup;
