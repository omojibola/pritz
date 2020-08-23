import React from "react";
import styled from "styled-components";

const Backdrop = ({ opened, close }) => {
  return <Wrapper onClick={close} opened={opened} />;
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  z-index: 100;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  transition: all 0.1s;
`;

export default Backdrop;
