import React from "react";
import styled from "styled-components";
import NavItem from "../Navigation/NavItems/NavItem/NavItem";

const LogoWrapper = styled.div`
  color: var(--color-white);
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Logo = ({ mobile }) => {
  return (
    <LogoWrapper>
      <NavItem mobile={mobile} link='/'>
        Memories
      </NavItem>
    </LogoWrapper>
  );
};

export default Logo;
