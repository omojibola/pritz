import React from "react";
import styled from "styled-components";

const Todo = ({ note }) => {
  return (
    <Wrapper>
      {note.note}
      <Controls>
        <i class='fas fa-edit' />
      </Controls>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 4rem 3rem;
  background-color: var(--color-mainLighter);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  margin-bottom: 2rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-white);
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Todo;
