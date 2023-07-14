import React from "react";
import { Social } from "../../components/social/Social";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Social />
      <Copyright>© 2023 Daniil Dergunov, All Rights Reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 15px 0
`;

const Copyright = styled.small`
  display: flex;
  color: ${theme.colors.small};
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
`;
