import React from "react";
import styled from "styled-components";

type YearPropsType = {
  year: number;
  description: string;
};

export const Year = (props: YearPropsType) => {
  return (
    <StyledYear>
      <p>
        {props.year}
        <span></span>
      </p>

      <div>{props.description}</div>
    </StyledYear>
  );
};

const StyledYear = styled.div`
  text-align: center;
  display: inline-block;
`;
