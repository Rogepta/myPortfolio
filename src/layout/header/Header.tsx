import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/headerMenu/HeaderMenu";
import { Social } from "../../components/social/Social";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "../../components/mobileMenu/MobileMenu";

export const Header = () => {
  const menuItems = {
    items: ["Projects", "Technologies", "About me"],
    ancor: ["#projects", "#technologies", "#about"],
  };

  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu menuItems={menuItems.items} />
          <MobileMenu menuItems={menuItems.items} />
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
