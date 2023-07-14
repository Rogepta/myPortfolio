import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Social } from "../../components/social/Social";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  const menuItems = ["Projects", "Technologies", "About me"];

  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu menuItems={menuItems} />
          <Social />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: rgba(15, 22, 36, 0.9);
  position: fixed;
  padding: 20px 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;
`;
