export type ModalContent = {
  contentType:
    | 'district'
    | 'area'
    | 'mainCategory'
    | 'subCategory'
    | 'login'
    | 'signUp';
  id: number;
  value: string;
  remove?: boolean;
};

export interface ModalAddContent {
  addContent: (newContent: ModalContent) => void;
}

export interface ModalToggle {
  toggleModal: () => void;
}

export type ModalToggleAndAddContent = ModalAddContent & ModalToggle;

export interface IModal extends ModalToggleAndAddContent {
  isModalOpen: boolean;
  contents: ModalContent[];
}

export interface IModalWithoutIsModalOpen extends Omit<IModal, 'isModalOpen'> {}
