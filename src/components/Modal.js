import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  background: yellow;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = ({ setIsOpen }) => {
  return (
    <ModalOverlay onClick={() => setIsOpen(false)}>
      <ModalContent>can you see?</ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
