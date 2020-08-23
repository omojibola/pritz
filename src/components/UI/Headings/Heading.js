import React from "react";
import styled, { css } from "styled-components";

const Heading = ({ children, color, noMargin, size, bold }) => {
  if (size === "h1")
    return (
      <Heading1 noMargin={noMargin} color={color} bold={bold}>
        {children}
      </Heading1>
    );

  if (size === "h2")
    return (
      <Heading2 noMargin={noMargin} color={color} bold={bold}>
        {children}
      </Heading2>
    );

  if (size === "h3")
    return (
      <Heading3 noMargin={noMargin} color={color} bold={bold}>
        {children}
      </Heading3>
    );

  if (size === "h4")
    return (
      <Heading4 noMargin={noMargin} color={color} bold={bold}>
        {children}
      </Heading4>
    );
};

const baseStyle = css`
  color: ${({ color }) =>
    color === "white" ? "var(--color-white)" : "var(--color-main"};
  font-weight: ${({ bold }) => (bold ? "700" : "300")};
  margin-top: 1rem;
  margin-bottom: ${({ noMargin }) => (noMargin ? "0rem" : "3rem")};
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  ${baseStyle}
`;

const Heading2 = styled.h1`
  font-size: 1.8rem;
  ${baseStyle}
`;
const Heading3 = styled.h1`
  font-size: 1.5rem;
  ${baseStyle}
`;
const Heading4 = styled.h1`
  font-size: 1.3rem;
  ${baseStyle}
`;

export default Heading;
