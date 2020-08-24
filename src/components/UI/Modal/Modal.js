import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Backdrop from "./Backdrop/Backdrop";

const Modal = ({ opened, children, close }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop opened={opened} close={close}></Backdrop>
      <WrappedModal opened={opened}>{children}</WrappedModal>
    </>,
    document.getElementById("root-modal")
  );
};

const WrappedModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
    opened ? " translate(-50%, -50%)" : " translate(-50%, -150%)"};
  display: flex;
  flex-direction: column;
  z-index: 150;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 40rem;
  box-shadow: 0 0.5rem 3.5em var(--shadow);
  border-radius: 0.5rem;
  background-color: var(--color-mainLighter);
  padding: 4rem 3rem;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  transition: all 0.1s;
`;

export default Modal;
