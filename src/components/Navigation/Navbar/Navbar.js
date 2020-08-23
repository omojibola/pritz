import React from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import { Container } from "../../../hoc/layouts/elements";
import NavItems from "../NavItems/NavItems";

const FixedWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-main);
  top: 0;
  left: 0;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Navbar = ({ loggedId }) => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavItems loggedId={loggedId} />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
