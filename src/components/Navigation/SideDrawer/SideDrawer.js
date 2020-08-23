import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import Hamburger from "./Hamburger/Hamburger";
import NavItems from "../NavItems/NavItems";

const SideDrawer = ({ loggedId }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <FixedWrapper>
        <Wrapper>
          <Logo />
          <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
        </Wrapper>
      </FixedWrapper>
      <Menu opened={isOpened}>
        <NavItems mobile loggedId={loggedId} />
      </Menu>
    </>
  );
};

const FixedWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-main);
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  height: 6rem;
  display: none;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 2rem;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

const Menu = styled.div`
  width: 100%;
  background-color: var(--color-main);
  height: 100vh;
  margin-top: 6rem;
  z-index: 100;
  opacity: ${(props) => (props.opened ? "1" : "0")};
  transform: translateY(${(props) => (props.opened ? "0%" : "-100%")});
  visibility: ${(props) => (props.opened ? "visible" : "hidden")};
  transition: all 0.1s cubic-beizer(0.445, 0.05, 0.55, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

export default SideDrawer;
