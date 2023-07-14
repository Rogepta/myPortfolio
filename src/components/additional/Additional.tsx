import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Additional = () => {
  return (
    <StyledAdditional>
      <StyledH2Additional>Additional technologies and skills</StyledH2Additional>
      <FlexWrapper justify="space-between">
        <li>Git</li>
        <li>Quick learning</li>
        <li>Teamwork</li>
        <li>B1 english</li>
      </FlexWrapper>
    </StyledAdditional>
  );
};

const StyledAdditional = styled.div`
  h2 {
    text-align: center;
  }
  div {
    gap: 15px;
  }
`;

const StyledH2Additional = styled.h2`
  margin: 0 0 15px 0;
`;
