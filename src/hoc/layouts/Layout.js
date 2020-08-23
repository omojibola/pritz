import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh-6rem);
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children, loggedId }) => {
  return (
    <>
      <Navbar loggedId={loggedId} />
      <SideDrawer loggedId={loggedId} />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedId: firebase.auth,
});

export default connect(mapStateToProps)(Layout);
