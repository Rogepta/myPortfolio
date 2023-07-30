import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { Social } from "../social/Social";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopUp isOpen={false}>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href="">{item}</Link>
              </li>
            );
          })}
          <Social />
        </ul>
      </MobileMenuPopUp>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 60px;
    text-decoration: none;
    list-style: none;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  div {
    justify-content: center;
    align-items: center;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -95px;
  right: -100px;
  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 65px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;

const Link = styled.a`
  color: ${theme.colors.font};
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
