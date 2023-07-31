import styled from "styled-components";
import { theme } from "../../../styles/theme";


const About = styled.section``;

const Div = styled.div`
  display: flex;
  gap: 20px;

  @media ${theme.media.mobile} {
    flex-direction: column;
    gap: 10;
  }
`;


export const S = {
   About,
   Div
}