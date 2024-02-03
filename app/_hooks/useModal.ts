import { IModal, type ModalContent } from '@/lib/types';
import { useState } from 'react';

function useModal(): IModal {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [contents, setContents] = useState<Array<ModalContent>>([]);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function addContent(newContent: ModalContent) {
    setContents((currentContents) => {
      if (newContent.remove) {
        return currentContents.filter(
          (content) => content.contentType !== newContent.contentType,
        );
      }

      const existingIndex = currentContents?.findIndex(
        (content) => content.contentType === newContent.contentType,
      );

      if (existingIndex !== -1) {
        return currentContents?.map((content, index) =>
          index === existingIndex
            ? {
                ...content,
                id: newContent.id,
                value: newContent.value,
              }
            : content,
        );
      }

      return [
        ...currentContents,
        {
          contentType: newContent.contentType,
          id: newContent.id,
          value: newContent.value,
        },
      ];
    });
  }

  return { isModalOpen, toggleModal, contents, addContent };
}

export default useModal;
