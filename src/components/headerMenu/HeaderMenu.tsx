import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Social } from "../social/Social";

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
      <Social />
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  ul {
    display: flex;
    gap: 60px;
    text-decoration: none;
    list-style: none;
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    display: none;
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
