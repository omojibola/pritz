import React, { useState } from "react";
import styled from "styled-components";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";

import Heading from "../../components/UI/Headings/Heading";
import { Container } from "../../hoc/layouts/elements";
import AddTodo from "./AddTodo/AddTodo";
import Loader from "../../components/UI/Loader/Loader";
import Todo from "./Todo/Todo";

const Todos = ({ notes, userName, requesting, requested, userId }) => {
  let content;
  if (!notes) {
    content = <Loader isWhite />;
  } else if (!notes[userId] && requested[`notes/${userId}`]) {
    content = (
      <Heading color='white' size='h2'>
        You have no notes...
      </Heading>
    );
  } else {
    content = notes[userId].notes
      .slice()
      .sort((a, b) => b.id - a.id)
      .map((note) => <Todo key={note.id} note={note} />);
  }
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading size='h1' color='white' bold noMargin>
            Welcome {userName}
          </Heading>
          <Heading size='h3' color='white' bold>
            Your Notes
          </Heading>

          <AddTodo />
          <Content>{content}</Content>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  background-color: var(--color-mainLight);
  height: 100%;
  min-height: calc(100vh - 6rem);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  flex-direction: column;
  margin-top: 5rem;
`;

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  userName: firebase.profile.firstName,
  notes: firestore.data.notes,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested,
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [`notes/${props.userId}`])
)(Todos);
