import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/theme";

export const Additional = () => {
  return (
    <StyledAdditional>
      <StyledH2Additional>
        Additional technologies and skills
      </StyledH2Additional>
      <ul>
        <li>Git</li>
        <li>Quick learning</li>
        <li>Teamwork</li>
        <li>B1 english</li>
      </ul>
    </StyledAdditional>
  );
};

const StyledAdditional = styled.div`
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

const StyledH2Additional = styled.h2`
  margin: 0 0 15px 0;
`;
