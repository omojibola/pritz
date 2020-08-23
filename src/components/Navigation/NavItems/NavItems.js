import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem/NavItem";

const Nav = styled.nav`
  display: flex;
  margin-top: ${(props) => (props.mobile ? "-6rem" : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;
const NavItems = ({ mobile, loggedId }) => {
  let links;
  if (loggedId.uid) {
    links = (
      <Ul mobile={mobile}>
        <NavItem mobile={mobile} link='/'>
          Todos
        </NavItem>

        <NavItem mobile={mobile} link='/profile'>
          Account
        </NavItem>

        <NavItem mobile={mobile} link='/logout'>
          Logout
        </NavItem>
      </Ul>
    );
  } else {
    links = (
      <Ul mobile={mobile}>
        <NavItem mobile={mobile} link='/login'>
          Login
        </NavItem>
      </Ul>
    );
  }
  return <Nav mobile={mobile}>{links}</Nav>;
};

export default NavItems;
