import styled from "styled-components";
import { theme } from "../../styles/theme";

const Footer = styled.footer`
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

export const S = {
   Footer,
   Copyright
}