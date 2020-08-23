import React from "react";
import styled from "styled-components";

const Button = ({ children, disabled, loading, contain, color, ...rest }) => {
  return (
    <StyledButton disabled={disabled} contain={contain} color={color} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${({ contain }) => (contain ? "auto" : "100%")};
  outline: none;
  padding: 1.2rem 3.5rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  color: var(--color-white);
  font-weight: 700;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: ${({ color }) => {
    if (color === "red") {
      return "#dc3545";
    } else if (color === "main") {
      return "var(--color-main)";
    } else return "var(--color-mainLighter)";
  }};
  border: none;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #333;
  }
`;

export default Button;
