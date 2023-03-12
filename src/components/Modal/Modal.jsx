import { useRef } from "react";

import {
  Background,
  FlavorText,
  ModalWrapper,
  OptionChoosed
} from "./Modal.style";

const Modal = ({ showModal, setShowModal, optionChoose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <FlavorText>Você deveria comer</FlavorText>
            <OptionChoosed>{optionChoose}</OptionChoosed>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
