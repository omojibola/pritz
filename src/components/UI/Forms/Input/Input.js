import React from "react";
import styled from "styled-components";

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

const StyledInput = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  background-color: var(--color-mainLight);
  font-weight: 700;
  font-size: 1.3rem;
  border: none;
  border-radius: 2rem;
  color: var(--color-white);

  &::placeholder {
    color: white;
  }
`;

const Error = styled.div`
  color: #ff5757;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0rem 2rem;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translayeY(${({ show }) => (show ? "20px" : "10px")});
  transition: all 0.1s;
  left: 0;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 3.5rem;

  &:last-of-type {
    margin-bottom: 7rem;
  }
`;
export default Input;
