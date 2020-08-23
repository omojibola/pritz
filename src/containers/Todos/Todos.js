import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../../components/UI/Headings/Heading";
import { Container } from "../../hoc/layouts/elements";
import AddTodo from "./AddTodo/AddTodo";

const Todos = () => {
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading size='h1' color='white' bold noMargin>
            Your Notes
          </Heading>
          <Heading size='h4' color='white' bold>
            All your memories in one place
          </Heading>
          <AddTodo />
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

export default Todos;
