import styled from "styled-components";
import { theme } from "../../styles/theme";

const Additional = styled.div`
  margin: 25px 0;
  h2 {
    text-align: center;
  }
  div {
    gap: 15px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;

    @media ${theme.media.mobile} {
      flex-direction: column;
      text-align: center;
      gap: 5px;
    }
  }

  li {
    @media ${theme.media.mobile} {
      list-style: none;
    }
  }
`;

const H2Additional = styled.h2`
  margin: 0 0 15px 0;
`;


export const S = {
   Additional,
   H2Additional
}