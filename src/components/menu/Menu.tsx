import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href="">{item}</Link>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 60px;
    text-decoration: none;
    list-style: none;
    justify-content: center;
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
