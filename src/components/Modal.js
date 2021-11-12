import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalShadow = styled.div`
  background: black;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.3em;
  border-radius: 10px;
`;

const ModalContent = styled.div``;

const StyledModal = ({ setIsOpen }) => {
  return (
    <ModalContainer>
      <ModalShadow onClick={() => setIsOpen(false)} />
      <Modal>
        <ModalContent></ModalContent>
      </Modal>
    </ModalContainer>
  );
};

export default StyledModal;
